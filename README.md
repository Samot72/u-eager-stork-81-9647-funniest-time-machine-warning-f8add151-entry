# Funniest Time Machine Warning Label

[![Competition](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/Samot72/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151-entry/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/Samot72/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151-entry/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

Entry for [Funniest Time Machine Warning Label](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
— a single warning label for a time machine, aiming for the biggest laugh.

## The entry

> WARNING: Meeting your past self voids the warranty. So does your future self. So does this trip.

**96 characters** (code points; gate is 1–120, single line).

## How it works

`main.ts` (dependency-free, Node stdlib only) holds the line as a constant,
validates the gate — one line, 1–120 code points, not only whitespace — writes
it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), then reads the file
back and fails if the round trip does not match the entry exactly.

## Verify locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Expected output: `wrote 96-character entry to /tmp/out/entry.txt`, and
`entry.txt` contains exactly the line quoted above.

## License

MIT — see [LICENSE](LICENSE).
