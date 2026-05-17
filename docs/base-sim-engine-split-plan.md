# Base Sim Engine Split Plan

`base-sim-engine.js` is currently a 2,000+ line monolith. The next refactor should split it by domain while preserving `simulateBase()` as the public API. The local page runs through `npm run dev` and imports the engine as an ES module, so no browser-specific engine bundle is needed.

## Goals

- Keep UI-independent logic testable from Node.
- Keep `simulateBase({ catalog, roster, baseLayout, objective, settings })` stable.
- Move domain rules into small modules so future skill additions do not grow one file indefinitely.
- Avoid behavioral changes during the split. Move code first, then improve internals in later tasks.

## Proposed Structure

```text
base-sim-engine/
  index.js
  constants.js
  roster.js
  context.js
  layout.js
  planning.js
  room-selection.js
  scoring.js
  totals.js
  effects/
    static-effects.js
    dynamic-effects.js
    dynamic-capacity-effects.js
    dynamic-order-effects.js
    dynamic-tag-effects.js
    capacity-effects.js
    order-model-effects.js
    intermediate-effects.js
    morale-effects.js
    global-effects.js
  facilities/
    manufacture.js
    trading.js
    control.js
    capacity.js
  shifts/
    shift-plan.js
    second-shift.js
    morale.js
    timeline.js
  tags.js
  unsupported.js
  alternatives.js
  numbers.js
```

## Module Ownership

### `index.js`

Public entrypoint. Exports only:

- `BASE_LAYOUTS`
- `OBJECTIVES`
- `normalizeLayout()`
- `createDefaultRoster()`
- `activeBaseSkills()`
- `simulateBase()`

`simulateBase()` should remain the orchestration layer: normalize input, build context, plan rooms, build shift/timeline output, collect alternatives and warnings.

### `constants.js`

Shared constants:

- phase ranks
- room capacities
- default facility level
- storage/order limit tables
- product weights
- default order value

### `roster.js`

Roster and unlock logic:

- `createDefaultRoster()`
- `activeBaseSkills()`
- `selectTopSkillPerSlot()`
- `conditionMet()`
- skill/condition ranking helpers

### `context.js`

Simulation context construction:

- operator maps
- owned sets
- support assignments
- support operator sets
- intermediate parameter initialization
- global effects initialization

This module must also declare an explicit `context` schema/shape definition as
the inter-module contract. `context` is a mutable object threaded by parameter
(there are no `import`s today); `effects/*` and `facilities/*` both read and
write it (intermediate params, global effects, `registerAssignedOperators()`).
Without a documented shape, the split scatters shared-blob mutations across
~25 files and reduces readability instead of improving it.

Initial contract:

```js
{
  catalog,
  roster,
  objective,
  layout,
  operatorById,
  ownedOperatorIds,
  ownedOperatorNames,
  assignedOperatorIds,
  assignedOperatorNames,
  supportAssignments,
  supportOperatorIds,
  supportOperatorNames,
  dormOperators,
  collectionIntervalHours,
  meetingRoomLevel,
  globalEffects,
  intermediateParameters,
}
```

Mutation rules:

- `planning.js`, `room-selection.js`, and `facilities/*` may add assigned operators through the
  assigned operator sets.
- `effects/intermediate-effects.js` may replace `intermediateParameters` after
  each evaluation pass.
- `effects/global-effects.js` may rebuild `globalEffects` when support
  assignments are optimized or cloned for shift planning.
- Other modules should treat context fields as read-only unless the contract is
  amended in this document first.

### `layout.js`

Layout helpers:

- `BASE_LAYOUTS`
- `OBJECTIVES`
- `normalizeLayout()`
- `chooseManufactureProducts()`

### `planning.js`

Small planning helpers:

- `registerAssignedOperators()`

The earlier room-planning responsibilities have been moved into domain modules.

### `room-selection.js`

Room candidate selection and room-state evaluation:

- candidate selection
- room candidate finalization
- selection comparison
- fullness/morale selection metric

This module calls into `scoring.js`, `facilities/capacity.js`, and dynamic
effect dispatch. It should not contain skill-specific parsing.

### `totals.js`

Production aggregation:

- `calculateTotals()` (called by `simulateBase()` and second-shift)

### `scoring.js`

Operator scoring core:

- `scoreOperator()`
- `formatMatchedSkill()`
- `compareCandidates()`
- `totalCandidateScore()` (scoring helper used by planning, second-shift, and `roomSelectionMetric()`; do NOT place in `effects/morale-effects.js` despite code-order proximity)
- total room score helpers

Skill-specific matching should be delegated to `effects/*` modules.

## Effects Modules

### `effects/static-effects.js`

Direct fixed effects from generated catalog:

- fixed manufacture speed
- fixed trading speed
- room-level trading speed
- power-plant scaled manufacture
- Rosmontis/Ebenholz converted values

### `effects/dynamic-effects.js`

Shared dynamic-effect dispatch only. Category-specific evaluators live in:

- `effects/dynamic-capacity-effects.js`
- `effects/dynamic-order-effects.js`
- `effects/dynamic-tag-effects.js`

### `effects/capacity-effects.js`

Capacity-to-efficiency rules:

- Vermeil reuse
- Bubble storage conversion
- Swire order limit conversion
- Degenbrecher order limit step conversion
- Jaye current order/order gap conversion

### `effects/order-model-effects.js`

Order-type/value rules:

- Proviso breach-order approximation
- Pepe special exclusive order approximation
- future: high-value orders, metal-order distributions, order composition assumptions

This should expose the assumptions explicitly, because these are not simple speed percentages.

### `effects/intermediate-effects.js`

Intermediate parameter production and conversion:

- worldly worry
- perceptual information
- thought chain
- silent resonance
- passion
- catnip
- future intermediate tags such as `$cc.bd_ash`, `$cc.bd_tachanka`, `$cc.bd_dungeon`, `$cc.bd_C`

### `effects/morale-effects.js`

Skill parsing for morale cost/recovery:

- self morale effects
- room-wide morale effects
- intermediate-parameter morale effects
- Wind Chimes/Chongyue-style rules

### `effects/global-effects.js`

Control-center/global effects:

- tag-based manufacture/trading speed
- control-origin order limit
- MH/felyne control effects
- passion effects

## Facilities Modules

### `facilities/manufacture.js`

Manufacture room construction and production calculations.

### `facilities/trading.js`

Trading room construction and LMD/order calculations.

### `facilities/control.js`

Control center planning and control-impact reporting.

### `facilities/capacity.js`

Facility capacity model:

- storage/order capacity
- fixed capacity parsing
- global capacity bonuses
- fill hours
- fullness efficiency

## Shift Modules

### `shifts/shift-plan.js`

Public shift output shape and daily average aggregation.

### `shifts/second-shift.js`

Second-shift candidate selection and balancing.

### `shifts/morale.js`

Morale timeline and shift feasibility.

### `shifts/timeline.js`

Hourly timeline output:

- cumulative production
- morale by operator
- intermediate parameters by hour
- facility snapshots

## Support Modules

### `tags.js`

Tag and skill-family lookup:

- faction/operator tag matching
- skill-family matching/conversion
- display labels

### `unsupported.js`

Unsupported skill classification:

- category/reason/priority
- supported-by-manual-evaluator checks

### `alternatives.js`

Alternative candidate output.

### `numbers.js`

Small numeric helpers:

- `round()`
- `clampInteger()`

## Dependency Direction

The current split has no ES module import cycles. Keep it that way where
reasonable:

- `index.js` orchestrates.
- `facilities/*` builds room plans and calls `room-selection.js`.
- `room-selection.js` finalizes candidates and calls `scoring.js` plus dynamic effects.
- `scoring.js` builds static score and effect descriptors.
- `effects/*` contains skill-specific matching/evaluation.

Do not reintroduce cycles just to move a small helper; prefer tiny local helper
duplication over making `context.js`, `scoring.js`, and `effects/*` mutually
dependent.

## Migration Order

0. **Safety net (do this first).** Commit the current untracked base-sim files
   so every later step is diffable/revertible. Add a golden-output snapshot
   test of `simulateBase()` over a representative roster/objective set. Update
   `npm run check` so it covers the forthcoming `base-sim-engine/**/*.js`
   files.
   - The current implementation already has the baseline snapshot test:
     `keeps representative simulateBase output stable for engine split` in
     `tests/base-sim-engine.test.js`.
   - The current `npm run check` delegates syntax checks to
     `scripts/check-js.js`, which includes `base-sim-engine/**/*.js` when that
     directory exists.
1. Create `base-sim-engine/` modules and move constants, numeric helpers, layout, roster logic.
2. Move shift/timeline code. These functions are mostly isolated and low-risk.
3. Move capacity calculations and capacity effect parsing.
4. Move morale and intermediate parameter code.
5. Move global/control-center effects.
6. Move manufacture/trading/control planning.
7. Move scoring and dynamic effect dispatch last, after its dependencies are stable.
8. Replace root `base-sim-engine.js` with a thin re-export/import wrapper.
9. Keep `base-sim.js` importing from the root wrapper or switch it to `base-sim-engine/index.js` once the split is complete.

Current status: steps 1-9 are implemented. Follow-up work should be behavior
improvements or UI refactors, not mechanical engine splitting.

## Browser Runtime Note

`base-sim.html` should be opened through the local dev server, not `file://`:

```text
npm run dev
http://localhost:3000/base-sim.html
```

The browser loads `base-sim.js` as a module, and `base-sim.js` imports the
engine directly. Keep this path module-native during the split. Do not
reintroduce a generated browser engine file unless a later packaging target
explicitly needs a single-file bundle.

If a production build system is later introduced, it should consume the ES
module graph directly:

```text
base-sim.js -> base-sim-engine.js -> base-sim-engine/index.js
```

## Test Strategy

Step 0 establishes the baseline: the `simulateBase()` golden snapshot and an
extended `npm run check` syntax-check script covering every new
`base-sim-engine/**/*.js` so submodule syntax errors surface immediately.

Current baseline artifacts:

- `scripts/check-js.js`
- `tests/base-sim-engine.test.js` / `keeps representative simulateBase output stable for engine split`

After each migration step:

- `npm run check`
- `node --test tests/base-sim-engine.test.js` + the golden snapshot test
- `npm run test:browser`

No behavior should change during the split: the `simulateBase()` snapshot must
not change between steps. Add new tests only when a moved module reveals
missing coverage.

## Non-Goals For The Split

- Do not change optimizer behavior while moving files.
- Do not redesign the UI.
- Do not alter generated catalog shape unless a later task explicitly targets catalog metadata.
- Do not reintroduce `base-sim-engine.browser.js`; local browser execution should stay dev-server based.


## Follow-Up: `base-sim.js` UI Split Plan

`base-sim.js` is currently a 1,000+ line UI module. Engine splitting is complete, so the next mechanical refactor target is the UI layer. The goal is the same as the engine split: preserve behavior first, then make future UI changes smaller and safer.

### Goals

- Keep `base-sim.html` as the page entrypoint and keep the current UI behavior unchanged during the split.
- Separate state, rendering, event binding, and formatting so feature work does not keep expanding one file.
- Keep all engine interaction behind a small adapter so UI modules do not know the full `simulateBase()` response shape.
- Make each render function testable with small DOM fixtures where practical.

### Proposed Structure

```text
base-sim-ui/
  index.js
  state.js
  storage.js
  engine-adapter.js
  dom.js
  formatters.js
  render/
    summary.js
    layout-editor.js
    roster.js
    facilities.js
    operators.js
    timeline.js
    warnings.js
    alternatives.js
  events/
    controls.js
    roster-events.js
    layout-events.js
    timeline-events.js
```

Root `base-sim.js` should become a thin bootstrap file:

```js
import { initBaseSimPage } from "./base-sim-ui/index.js";

initBaseSimPage();
```

### Module Ownership

#### `base-sim-ui/index.js`

Page bootstrap and orchestration:

- load catalog
- initialize state
- bind events
- run first simulation
- coordinate `renderAll()`

This module may call every UI module, but other modules should not import from it.

#### `state.js`

In-memory page state:

- selected layout/objective
- custom facility levels/products
- roster filters
- chart display toggles
- collection interval and support room settings

State mutation should go through named update helpers instead of ad hoc object edits.

#### `storage.js`

`localStorage` boundary:

- roster ownership/promotion persistence
- UI preference persistence
- migration/defaulting for older saved shapes

No render functions should call `localStorage` directly.

#### `engine-adapter.js`

Engine input/output boundary:

- build `simulateBase()` inputs from UI state
- normalize the result into view models
- expose stable view-model fields for render modules

This is the compatibility layer when `simulateBase()` evolves.

#### `dom.js`

Small DOM helpers:

- selectors
- element creation
- class toggles
- safe text assignment
- reusable segmented-control helpers

Keep this generic; no base-skill business logic here.

#### `formatters.js`

Display-only formatting:

- percent, hours, morale, capacity
- product labels
- condition labels
- metric labels

No DOM writes and no engine calls.

### Render Modules

- `render/summary.js`: top metric summary and objective-sensitive values.
- `render/layout-editor.js`: layout preset/custom controls, facility level/product controls.
- `render/roster.js`: owned checklist, search, promotion controls.
- `render/facilities.js`: optimal plan cards, shift 1/2 tabs inside each facility, capacity/fullness notes.
- `render/operators.js`: assigned operator row/card snippets, skill descriptions, unlock condition chips.
- `render/timeline.js`: timeline chart, series toggles, hourly cards.
- `render/warnings.js`: unsupported/approximation warnings.
- `render/alternatives.js`: next-best candidates.

Render modules should receive view models and return/update DOM. They should not read raw global state.

### Event Modules

- `events/controls.js`: objective, layout preset, collection interval, chart toggles.
- `events/roster-events.js`: ownership and promotion changes.
- `events/layout-events.js`: custom facility/product edits.
- `events/timeline-events.js`: chart series visibility and timeline focus.

Event handlers should update state, persist through `storage.js` when needed, then call a shared rerender function.

### Migration Order

1. Add `base-sim-ui/formatters.js` and move pure formatting helpers first.
2. Add `base-sim-ui/dom.js` and move repeated DOM helpers.
3. Add `state.js` and `storage.js`; keep behavior identical and preserve existing localStorage keys.
4. Add `engine-adapter.js`; keep `base-sim.js` calling through it.
5. Move independent render blocks in this order: summary, warnings, alternatives, timeline.
6. Move facility/operator rendering after the smaller render modules are stable.
7. Move roster and layout editor last because they have the most event/state coupling.
8. Replace root `base-sim.js` with the thin bootstrap once all modules are moved.

### Test Strategy

After each migration step:

- `npm run check`
- `npm run test:browser`

Add focused browser assertions only when behavior is easy to regress:

- roster persistence still works
- layout/objective switching still changes output
- facility cards still show shift 1/2, skill description, unlock condition, and capacity notes
- timeline toggles still show/hide the expected lines

### Non-Goals For The UI Split

- Do not redesign the UI during the mechanical split.
- Do not change optimizer behavior or engine output shape.
- Do not rename existing localStorage keys unless a migration is included.
- Do not introduce a framework yet; this split should keep the current module-native browser setup.
