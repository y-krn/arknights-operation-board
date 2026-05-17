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
