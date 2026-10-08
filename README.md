# 霧嶺守望 · Emberpass Defense

Original Traditional Chinese browser tower defense. Twelve finite waves, three upgradeable towers, armor and speed variants, final boss, three-choice blessings, targeted meteor skill, achievements and validated local saves.

## Play

Serve this directory with `python3 -m http.server 8080`, then open http://localhost:8080 . No build, packages, network assets, ads or payment systems.

Click/tap a glowing pad, choose a tower, then start a wave. Arrow towers provide single-target damage; cannons have splash and reduced armor penalty; frost slows enemies. Select a built tower to upgrade to level 3 or sell for 65% of investment. Every third completed wave offers a blessing. The meteor skill has a 24-second cooldown. Survive all 12 waves to win; zero gate durability loses. Progress is saved on the same browser. Hidden tabs pause automatically.

Keyboard: Space pause, arrows select pad, 1/2/3 build, Escape deselect/cancel skill. Desktop and touch layouts supported.

## Development and verification

`node --test *.test.mjs` runs 14 tests covering deterministic rules, legal victory, no-defense loss, costs, range, upgrade/sell, reward deduplication, skill cooldowns, final boss and save restoration. `node --check app.mjs` checks frontend syntax. Browser QA results are recorded in QA.md. Simulation tests are not substitutes for real UI playthroughs.

## Art and rights

All visual artwork is original code-drawn polygon geometry in app.mjs: trees, rocks, roads, towers, units, castle and watch captain. No third-party GLB, texture, logo, fonts or audio samples are included. Optional sounds use Web Audio oscillators. The provided reference was used only for broad route-defense mechanics and low-poly atmosphere. No Kingshot assets, branding or characters are used.

Source and original procedural artwork are provided under the MIT license in LICENSE.
