# Verification report — 2026-10-08 UTC

## Automated checks

`node --test *.test.mjs`: **14 passed, 0 failed**. `node --check app.mjs`: passed.

Thirteen engine tests cover route geometry, tower stats/range, invalid-action atomicity, overspend prevention, upgrade cap, sell refunds/repeated sell, finite waves, a legal no-skill 12-wave full-durability victory, undefended loss, final boss, skill radius/cooldown, duplicate reward prevention, immutable snapshots, deterministic mid-combat restore, malformed saves, valid phase round-trips, invalid time values, and event discriminants.

One DOM-stub frontend smoke test covers initialization, start, pointer-pad selection, wave start, pause, help, restart cancel/confirm, speed and rendering. It is explicitly not browser QA.

## Actual public browser gameplay

Tested the public GitHub Pages game in dot's cloud Chromium through normal UI controls, without injecting game state or running game functions.

- Completed all **12 waves**, including the visibly rendered boss, with **20/20 durability** and **276 enemies defeated**.
- Victory screen, full-durability achievement and one victory recorded correctly.
- Replayed from the victory screen: wave, gold and towers reset; achievements persisted.
- Played a separate run with **no towers and no skill**: durability fell to 11 after wave 1, then 0 during wave 2; loss screen showed 0 defeated enemies. Victory count remained 1.
- Tested tower purchase, upgrades, max-level disabled control, sale and exact finances: 315 → 225 after arrow purchase, 225 → 148 after upgrade, 148 → 256 after sale.
- Used all three tower types, combat building, three blessing selections, aimed skill/cooldown, pause/resume, 2× speed, help open/close, repeated restart cancellation and confirmed restart.
- Reloaded and continued the saved game with wave 1 completed, all three towers and 132 gold intact.
- Sound controls toggled successfully; audible output was not assessed.

## Responsive/visual checks

Desktop layout inspected at approximately 1165 CSS pixels wide. Resized the same cloud browser window and used native browser zoom to inspect **388 CSS pixels**: document scrollWidth equaled clientWidth (388), no horizontal overflow. At this width, successfully used tower selection/purchase, upgrade, blessing, skill targeting, pause, help and wave controls. Dialogs scroll within the battlefield so lower choices remain reachable. This is actual narrow-browser interaction, not a physical phone/touch-device test.

Original polygon landscape, three distinct tower silhouettes, enemy variants, boss, watch captain and combat effects were visually inspected. All art is procedural and local; no external artwork/font/model/CDN dependencies.

## Publication and matching

Repository created through dot's cloud browser. Gameplay-fix commit `0c2e947002970d1912fdffb24586a7f30b783dd7` deployed successfully in GitHub Pages run `37713570545`. All nine files in that remote tree matched local Git blob hashes exactly. The final documentation-only commit adds this report and updates README; gameplay files are unchanged.

Initial public QA exposed detached controls caused by redundant DOM replacement. The published fix caches updates and preserves unchanged controls. A hard refresh was needed to replace the browser's cached previous script; stable clicks then passed the complete campaign.

## Limits

No physical mobile device, Safari/Firefox, screen-reader audit or audio-output assessment. Browser logs contained extension metadata errors, with no captured game-script errors. Direct browser navigation to the JavaScript asset was blocked by the browser client; it was not bypassed. Remote/local file hashes, successful Pages deployment and extensive public interactions establish the verified delivery evidence without claiming a separate public asset byte download.
