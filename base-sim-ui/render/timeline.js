import { createDefaultTimelineSeries, sanitizeTimelineSeries } from "../state.js";
import { formatNumber, round, formatCompactNumber, formatIntermediateValue } from "../formatters.js";

export function renderTimeline(timeline, seriesVisibility = createDefaultTimelineSeries()) {
  if (!timeline?.points?.length) return `<div class="timeline-empty">時系列データなし</div>`;
  const operators = collectTimelineOperators(timeline).slice(0, 8);
  const visibility = sanitizeTimelineSeries(seriesVisibility);
  return `
    <div class="timeline-board" style="--timeline-columns: ${timeline.points.length}">
      ${renderTimelineChart(timeline, operators, visibility)}
      <div class="timeline-scroll" aria-label="24時間タイムライン">
        <div class="timeline-hour-row">
          ${timeline.points.map(renderTimelineHour).join("")}
        </div>
        <div class="timeline-section-label">中間パラメータ</div>
        ${renderTimelineParameterRows(timeline)}
        <div class="timeline-section-label">体力</div>
        ${operators.length ? operators.map((operator) => renderTimelineOperatorRow(operator, timeline.points)).join("") : `<div class="timeline-empty-row">配置オペレーターなし</div>`}
      </div>
    </div>
  `;
}

function renderTimelineChart(timeline, operators, visibility = createDefaultTimelineSeries()) {
  const points = timeline.points || [];
  const width = 960;
  const height = 260;
  const padding = { top: 18, right: 18, bottom: 34, left: 44 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const maxTotal = Math.max(1, ...points.map((point) => Number(point.totals?.totalValuePerHour || 0)));
  const minMoraleByHour = points.map((point) => {
    const values = Object.values(point.moraleByOperator || {}).map((entry) => Number(entry.morale || 0));
    return values.length ? Math.min(...values) : 24;
  });
  const totalPath = linePath(points.map((point, index) => ({
    x: timelineChartX(index, points.length, padding.left, chartWidth),
    y: timelineChartY(Number(point.totals?.totalValuePerHour || 0), maxTotal, padding.top, chartHeight),
  })));
  const moralePath = linePath(minMoraleByHour.map((morale, index) => ({
    x: timelineChartX(index, points.length, padding.left, chartWidth),
    y: timelineChartY(morale, 24, padding.top, chartHeight),
  })));
  const parameterSeries = buildTimelineParameterSeries(points, padding, chartWidth, chartHeight);
  const cumulativeSeries = buildTimelineCumulativeSeries(points, padding, chartWidth, chartHeight);
  const operatorSeries = operators.slice(0, 3).map((operator) => ({
    operator,
    path: linePath(points.map((point, index) => ({
      x: timelineChartX(index, points.length, padding.left, chartWidth),
      y: timelineChartY(Number(point.moraleByOperator?.[operator.id]?.morale ?? 24), 24, padding.top, chartHeight),
    }))),
  }));
  const shiftBands = buildTimelineShiftBands(points, padding, chartWidth, chartHeight);

  return `
    <div class="timeline-chart" aria-label="時系列折れ線グラフ">
      <div class="timeline-chart-head">
        <strong>折れ線グラフ</strong>
        <span>総合価値/hを基準に、必要な系列だけ重ねる</span>
      </div>
      ${renderTimelineSeriesControls(visibility)}
      ${renderTimelineCumulativeSummary(points)}
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="24時間の効率と体力推移">
        ${shiftBands}
        ${[0, 6, 12, 18, 24].map((hour) => {
          const x = padding.left + (hour / 24) * chartWidth;
          return `<g class="chart-grid"><line x1="${x}" y1="${padding.top}" x2="${x}" y2="${padding.top + chartHeight}"/><text x="${x}" y="${height - 10}">${hour}</text></g>`;
        }).join("")}
        ${[0, 6, 12, 18, 24].map((value) => {
          const y = timelineChartY(value, 24, padding.top, chartHeight);
          return `<g class="chart-grid horizontal"><line x1="${padding.left}" y1="${y}" x2="${padding.left + chartWidth}" y2="${y}"/><text x="10" y="${y + 4}">${value}</text></g>`;
        }).join("")}
        <path class="chart-line total" d="${totalPath}"/>
        ${visibility.cumulative ? cumulativeSeries.map((series) => `<path class="chart-line cumulative ${series.key}" d="${series.path}"/>`).join("") : ""}
        ${visibility.morale ? `<path class="chart-line morale" d="${moralePath}"/>` : ""}
        ${visibility.parameters ? parameterSeries.map((series) => `<path class="chart-line parameter ${series.key}" d="${series.path}"/>`).join("") : ""}
        ${visibility.morale ? operatorSeries.map((series, index) => `<path class="chart-line operator op-${index}" d="${series.path}"/>`).join("") : ""}
      </svg>
      <div class="timeline-legend">
        <span><i class="total"></i>総合価値/h</span>
        ${visibility.cumulative ? cumulativeSeries.map((series) => `<span><i class="cumulative ${series.key}"></i>${series.label}</span>`).join("") : ""}
        ${visibility.morale ? `<span><i class="morale"></i>最低体力</span>` : ""}
        ${visibility.parameters ? parameterSeries.map((series) => `<span><i class="parameter ${series.key}"></i>${series.label}</span>`).join("") : ""}
        ${visibility.morale ? operatorSeries.map((series, index) => `<span><i class="operator op-${index}"></i>${series.operator.name}</span>`).join("") : ""}
      </div>
    </div>
  `;
}

function renderTimelineSeriesControls(visibility) {
  const controls = [
    { key: "cumulative", label: "累積生産" },
    { key: "morale", label: "体力" },
    { key: "parameters", label: "中間パラメータ" },
  ];
  return `
    <div class="timeline-series-controls" aria-label="折れ線表示">
      ${controls.map((control) => `
        <label class="timeline-series-toggle">
          <input type="checkbox" data-timeline-series="${control.key}" ${visibility[control.key] ? "checked" : ""} />
          <span>${control.label}</span>
        </label>
      `).join("")}
    </div>
  `;
}

function renderTimelineCumulativeSummary(points) {
  const last = points.at(-1)?.cumulativeTotals || {};
  return `
    <div class="timeline-cumulative-summary">
      <span>龍門幣 <strong>${formatNumber(Math.round(Number(last.lmd || 0)))}</strong></span>
      <span>純金換算 <strong>${formatNumber(Math.round(Number(last.goldEquivalentLmd || 0)))}</strong></span>
      <span>作戦記録価値 <strong>${formatNumber(Math.round(Number(last.expValue || 0)))}</strong></span>
      <span>総合価値 <strong>${formatNumber(Math.round(Number(last.totalValue || 0)))}</strong></span>
      <span>純金 <strong>${formatCompactNumber(last.goldUnits || 0)}</strong></span>
    </div>
  `;
}

function timelineChartX(index, count, left, width) {
  return round(left + (count <= 1 ? 0 : (index / (count - 1)) * width), 2);
}

function timelineChartY(value, max, top, height) {
  const ratio = max > 0 ? Math.max(0, Math.min(1, Number(value || 0) / max)) : 0;
  return round(top + height - ratio * height, 2);
}

function linePath(points) {
  return points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x},${point.y}`).join(" ");
}

function buildTimelineParameterSeries(points, padding, chartWidth, chartHeight) {
  const definitions = [
    { key: "worldlyWorry", label: "俗世之憂" },
    { key: "perceptualInfo", label: "知覚情報" },
    { key: "passion", label: "パッション" },
    { key: "catnip", label: "マタタビ" },
    { key: "dungeonMeal", label: "魔物料理" },
  ];
  return definitions
    .map((definition) => {
      const values = points.map((point) => Number(point.intermediateParameters?.[definition.key] || 0));
      const max = Math.max(1, ...values);
      return {
        ...definition,
        path: linePath(values.map((value, index) => ({
          x: timelineChartX(index, points.length, padding.left, chartWidth),
          y: timelineChartY(value, max, padding.top, chartHeight),
        }))),
      };
    })
    .filter((series) => points.some((point) => Number(point.intermediateParameters?.[series.key] || 0) > 0));
}

function buildTimelineCumulativeSeries(points, padding, chartWidth, chartHeight) {
  const definitions = [
    { key: "totalValue", label: "累積総合価値" },
    { key: "lmd", label: "累積龍門幣" },
    { key: "expValue", label: "累積作戦記録価値" },
    { key: "goldEquivalentLmd", label: "累積純金換算" },
  ];
  const globalMax = Math.max(1, ...points.flatMap((point) => definitions.map((definition) => Number(point.cumulativeTotals?.[definition.key] || 0))));
  return definitions
    .map((definition) => ({
      ...definition,
      path: linePath(points.map((point, index) => ({
        x: timelineChartX(index, points.length, padding.left, chartWidth),
        y: timelineChartY(Number(point.cumulativeTotals?.[definition.key] || 0), globalMax, padding.top, chartHeight),
      }))),
    }))
    .filter((series) => points.some((point) => Number(point.cumulativeTotals?.[series.key] || 0) > 0));
}

function buildTimelineShiftBands(points, padding, chartWidth, chartHeight) {
  const bands = [];
  let start = 0;
  for (let index = 1; index <= points.length; index += 1) {
    if (index < points.length && points[index].shiftId === points[start].shiftId) continue;
    const x = timelineChartX(start, points.length, padding.left, chartWidth);
    const nextX = index >= points.length
      ? padding.left + chartWidth
      : timelineChartX(index, points.length, padding.left, chartWidth);
    bands.push(`<rect class="chart-shift-band ${bands.length % 2 ? "even" : "odd"}" x="${x}" y="${padding.top}" width="${Math.max(0, nextX - x)}" height="${chartHeight}"/>`);
    start = index;
  }
  return bands.join("");
}

function renderTimelineHour(point) {
  const valuePerHour = Number(point.totals?.totalValuePerHour || 0);
  return `
    <article class="timeline-hour">
      <strong>${point.hour}</strong>
      <span>${point.shiftLabel}</span>
      <small>${formatCompactNumber(valuePerHour)}/h</small>
    </article>
  `;
}

function renderTimelineParameterRows(timeline) {
  const params = [
    { key: "worldlyWorry", label: "俗世之憂" },
    { key: "perceptualInfo", label: "知覚情報" },
    { key: "thoughtChain", label: "思念連鎖" },
    { key: "silentResonance", label: "静かなる共鳴" },
    { key: "passion", label: "パッション" },
    { key: "catnip", label: "マタタビ" },
    { key: "dungeonMeal", label: "魔物料理" },
  ];
  return params.map((param) => {
    const max = Math.max(1, ...timeline.points.map((point) => Number(point.intermediateParameters?.[param.key] || 0)));
    return `
      <div class="timeline-lane parameter-lane">
        <div class="timeline-lane-label">${param.label}</div>
        <div class="timeline-lane-cells">
          ${timeline.points.map((point) => {
            const value = Number(point.intermediateParameters?.[param.key] || 0);
            const ratio = Math.max(0.04, Math.min(1, value / max));
            return `<span class="timeline-cell ${value > 0 ? "active" : ""}" style="--cell-ratio: ${ratio}" title="${point.hour}:00 ${param.label} ${formatIntermediateValue(value)}">${value > 0 ? formatIntermediateValue(value) : ""}</span>`;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function collectTimelineOperators(timeline) {
  const operators = new Map();
  for (const point of timeline.points || []) {
    for (const entry of Object.values(point.moraleByOperator || {})) {
      if (!operators.has(entry.operatorId)) operators.set(entry.operatorId, { id: entry.operatorId, name: entry.operatorName });
    }
  }
  return [...operators.values()];
}

function renderTimelineOperatorRow(operator, points) {
  return `
    <div class="timeline-lane morale-lane">
      <div class="timeline-lane-label">${operator.name}</div>
      <div class="timeline-lane-cells">
        ${points.map((point) => renderTimelineMoraleCell(point, operator.id)).join("")}
      </div>
    </div>
  `;
}

function renderTimelineMoraleCell(point, operatorId) {
  const entry = point.moraleByOperator?.[operatorId];
  if (!entry) return `<span class="timeline-cell empty"></span>`;
  const morale = Number(entry.morale || 0);
  const ratio = Math.max(0.04, Math.min(1, morale / 24));
  const stateClass = entry.state === "working" ? "working" : "resting";
  const lowClass = morale <= 12 ? "low" : "";
  return `<span class="timeline-cell morale-cell ${stateClass} ${lowClass}" style="--cell-ratio: ${ratio}" title="${point.hour}:00 ${entry.operatorName} ${formatCompactNumber(morale)} / ${entry.state}">${formatCompactNumber(morale)}</span>`;
}
