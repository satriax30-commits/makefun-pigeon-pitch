# Pigeon Pitch, One Line

[![Pigeon Pitch, One Line](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf.svg)](https://make.fun/c/u-donrulezz-pigeon-pitch-one-line-af06c6cf)
[![Rank](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/satriax30-commits/makefun-pigeon-pitch/rank.svg)](https://make.fun/c/u-donrulezz-pigeon-pitch-one-line-af06c6cf)
[![Reward](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/satriax30-commits/makefun-pigeon-pitch/reward.svg)](https://make.fun/c/u-donrulezz-pigeon-pitch-one-line-af06c6cf)

A deterministic Node 22 program (standard library only) that writes one
elevator pitch — a city pigeon pitching investors its startup — to
`/output/entry.txt`.

## The pitch

> We're Coo-ber: 9,400 pigeons deliver crumbs in 12 parks by 7 a.m. and take 3% of every beakful. Seeking a $2 million seed round, mostly to afford the good crumbs off your boardroom table.

187 characters, one line, no trailing newline. Startup-name pun (Coo-ber),
traction numbers (9,400 pigeons / 12 parks / 7 a.m.), business model
(3% of every beakful), and the twist in the last clause: the "seed round"
is literally about affording better crumbs.

## Run

```sh
node main.ts
```

Writes `entry.txt` to `$MAKEFUN_OUTPUT_DIR` (default `/output`).
`node main.ts --self-check` validates the entry against the gate
(1–200 characters, single line, no trailing newline) and prints its
character count, byte count, and sha256 without writing a file.

## License

MIT — see [LICENSE](LICENSE).
