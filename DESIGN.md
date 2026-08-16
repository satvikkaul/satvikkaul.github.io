---
name: Satvik Kaul Portfolio
description: A portfolio read as a VU meter bridge — identical instruments in a row, and only a measured result leans past zero.
colors:
  meter-ivory: "#f4ecd6"
  meter-ivory-lit: "#fbf6e8"
  meter-ivory-deep: "#e7dcc0"
  ink: "#0e0e0e"
  steel-charcoal: "#2b2b2b"
  brushed-steel: "#7a7f84"
  brushed-steel-lit: "#a8adb1"
  walnut: "#5b3a22"
  walnut-lit: "#7a4f2e"
  peak-red: "#d23b2d"
  rule: "rgba(14, 14, 14, 0.22)"
  rule-soft: "rgba(14, 14, 14, 0.1)"
  rule-lit: "rgba(244, 236, 214, 0.16)"
  seam-hairline: "rgba(255, 255, 255, 0.09)"
  seam-soft: "rgba(255, 255, 255, 0.08)"
  seam-faint: "rgba(255, 255, 255, 0.06)"
  seam-machined: "rgba(255, 255, 255, 0.1)"
  seam-control: "rgba(255, 255, 255, 0.22)"
  glass-sheen: "rgba(255, 255, 255, 0.42)"
  bezel-shadow: "rgba(0, 0, 0, 0.6)"
typography:
  display:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "clamp(3.4rem, 7.4vw, 5.9rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.1rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.005em"
  headline-contact:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.005em"
  headline-doc:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.16em"
  readout:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  micro:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.58rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.1em"
  control:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.14em"
  body-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body-lg:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  mark:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
  subtitle:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.005em"
  numeral:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "2.4rem"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "normal"
rounded:
  panel: "2px"
  chassis: "3px"
  frame: "4px"
spacing:
  section: "4.5rem"
  row: "1.9rem"
  column-gap: "3rem"
  cell: "1.6rem"
components:
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.meter-ivory-lit}"
    rounded: "{rounded.panel}"
    padding: "0.65rem 1.5rem"
    height: "2.9rem"
  button-solid-hover:
    backgroundColor: "{colors.peak-red}"
    textColor: "{colors.meter-ivory-lit}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "0.65rem 1.5rem"
    height: "2.9rem"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.steel-charcoal}"
    rounded: "{rounded.panel}"
    padding: "0.2rem 0.5rem"
  tag-hot:
    textColor: "{colors.peak-red}"
  jack:
    backgroundColor: "transparent"
    textColor: "{colors.meter-ivory}"
    rounded: "{rounded.panel}"
    padding: "0.24rem 0.55rem"
  meter-strip:
    backgroundColor: "{colors.steel-charcoal}"
    textColor: "{colors.brushed-steel-lit}"
    padding: "0.34rem 0.5rem"
  meter-read:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.meter-ivory-lit}"
    padding: "0.4rem 0.5rem 0.5rem"
  chassis:
    backgroundColor: "{colors.walnut}"
    rounded: "{rounded.frame}"
    padding: "0.9rem 0.9rem 0.75rem"
---

# Design System: Satvik Kaul Portfolio

## Overview

**Creative North Star: "The VU-Meter Bridge"**

This is a portfolio built as the meter bridge across a recording desk. Twenty
needles lie asleep against their left pins until the signal arrives, and then the
whole row leans together — that is the organizing idea. Identical instruments
stand shoulder to shoulder, and you read the room by sweeping the row, never by
opening any one meter. Applied here, every claim that has a number becomes a
channel: same face, same scale, same arc, so the eye compares them without being
told how.

The material world is a real instrument. Meter ivory faces sit behind a glass
sheen inside a black well, the well is set into a walnut frame, and brushed steel
carries every small label. Type is a heavy condensed gothic for anything that
speaks and a workhorse grotesque for anything that measures. Hairline rules divide
the page into ruled regions the way a panel is divided into sections; nothing
rounds past 4px, because instruments are not soft.

Red is the instrument's only opinion. On a VU meter the arc past 0 is the sole
red the device allows, and that discipline transfers exactly: peak red appears on
the scale past zero, on the one headline word that carries the thesis, and on a
result that beat its baseline. Everywhere else the page is ivory, ink, and steel.

**Key Characteristics:**

- Meter ivory ground with ink and charcoal chassis panels set into walnut
- Heavy condensed gothic display against a grotesque that carries all measurement
- Identical repeated instruments; the row is the comparison
- Peak red reserved for past-zero, nothing else
- Hairline rules as the structural grammar; corners never exceed 4px
- One authored motion: the needles sweep from the left pin with overshoot, once

## Colors

A studio-equipment palette: an ivory meter face, a black chassis, a walnut frame,
brushed steel for labels, and a single red that only appears past zero.

### Primary

- **Peak Red** (`#d23b2d`): The instrument's only opinion. It marks the scale arc
  past 0 VU, the accented headline word, a readout that beat its baseline, and the
  hover state of every control. It is never a background for prose and never
  decorates a surface that is not making a claim.

### Secondary

- **Walnut** (`#5b3a22`) and **Walnut Lit** (`#7a4f2e`): The desk frame. Used only
  as the gradient chassis holding the meter well — the one warm structural element,
  never a text or fill color.

### Neutral

- **Meter Ivory** (`#f4ecd6`): The page ground and the base of every meter face.
- **Meter Ivory Lit** (`#fbf6e8`): The top of the meter-face gradient and all text
  on ink surfaces.
- **Meter Ivory Deep** (`#e7dcc0`): The bottom of the face gradient, the scrollbar
  track, and the unfilled channel numeral.
- **Ink** (`#0e0e0e`): Body text, the needle, solid buttons, readout panels, and
  the meter well. A true near-black, because this world has real chassis.
- **Steel Charcoal** (`#2b2b2b`): Secondary prose, the patch panel ground, and the
  meter's channel strip.
- **Brushed Steel** (`#7a7f84`) and **Steel Lit** (`#a8adb1`): Every engraved
  label — spec lines, readout keys, meter names, footer.
- **Rules** (`rgba(14,14,14,0.22)` / `0.1`, and `rgba(244,236,214,0.16)` on dark):
  All structural division. Ink at low opacity on ivory, ivory at low opacity on ink.

### Named Rules

**The Past-Zero Rule.** Red means a measured result crossed its baseline. It marks
the scale past 0 VU, a readout that beat a published baseline, and the hover state
of a control. A red that decorates something unmeasured breaks the instrument.

**The Two-Ground Rule.** There are exactly two grounds: meter ivory for the page,
ink for the chassis. A third ground — a tinted card, a gray section — is out of
world. Regions separate by rule, not by fill.

## Typography

**Display Font:** Anton (with `Arial Narrow`, `sans-serif`)
**Body Font:** Archivo (with `system-ui`, `sans-serif`)

**Character:** A single-weight condensed gothic set enormous and tight against an
open grotesque that carries every number. The gothic is the panel silkscreen; the
grotesque is the engraved scale. There is no serif and no monospace anywhere —
measurement is carried by Archivo's tabular figures, which are enabled globally on
`body`, not by a mono costume.

### Hierarchy

- **Display** (400, `clamp(3.4rem, 7.4vw, 5.9rem)`, 0.88, -0.02em): The hero
  headline only, always uppercase, always two lines, with the second line in red.
- **Headline** (400, `clamp(2rem, 4vw, 3.1rem)`, 0.88): Section headings, sitting
  on a 2px ink rule that separates them from their content.
- **Title** (400, 1.5rem, 0.88): Channel names. 1.2rem for session roles.
- **Readout** (400, 1.5rem in the bridge, 1rem in a channel readout): Anton used
  numerically — the large value under each meter and in every readout row.
- **Body** (400, 1rem, 1.6): Prose, capped at 68ch. Channel and session copy runs
  0.9–0.92rem at the same line-height.
- **Label** (600, 0.58–0.7rem, 0.1–0.16em tracking, uppercase): Every engraved
  element — nav, meter names, readout keys, spec keys, stack lines, footer.

### Named Rules

**The Silkscreen Rule.** Anton never sets prose and never runs below ~1rem. It
sets headlines, channel titles, and numbers. Everything a person reads in
sentences is Archivo.

**The Engraved-Label Rule.** Any label under 0.75rem is uppercase, 600 weight, and
tracked at least 0.1em. Small type in this world is stamped on metal, not whispered.

## Layout

A single centered shell of `min(100% - 2.5rem, 1240px)`, tightening to
`100% - 1.6rem` below 720px. Nothing is full-bleed except the ruled band beneath
the hero, which spans the viewport with hairlines top and bottom.

The hero is an asymmetric two-column split (`0.92fr / 1.08fr`) — copy left,
instrument right — deliberately weighted toward the bridge, because the bridge is
the thesis. The band below is a 4-up ruled grid with hairline dividers and no
fills. Channels are a 3-column row (`4.5rem / 1fr / 15rem`): numeral, content,
readout panel. Sessions are `13rem / 1fr`. Specs are a 2-column list of ruled rows.

Vertical rhythm is `4.5rem` per section, `3rem` below 720px. Channels sit `1.9rem`
apart with a hairline between. Every section heading takes more space above than
below it.

Two breakpoints: **1040px**, where the hero stacks, the band goes 2-up, and the
channel readout drops under its content; and **720px**, where the rail stacks with
a horizontally scrolling nav, the bridge goes 2-up, the band goes 1-up, and hero
padding tightens so the first row of meters reaches the fold on a phone.

### Named Rules

**The Fold Rule.** On a phone, the first viewport must contain at least one row of
meters. The instrument is the thesis; a first screen that is only type has not
delivered it. Hero padding and lede length are both budgeted to protect this.

## Elevation & Depth

Depth is **chassis, not shadow**. Surfaces are either flush on the ivory ground —
separated by hairline rules only — or they are physical equipment: a dark panel
inset into a frame, with a real cast shadow beneath it. There is no middle tier and
no elevated card.

Exactly one ambient shadow does the structural work: a wide, dark cast beneath
every chassis element. The meter well adds an *inset* shadow, which is the only
inset in the system — it is what makes the well read as recessed into the walnut
rather than printed on it. The meter face carries a glass sheen: a single 150°
white gradient falling off by 46%, non-interactive, sitting above the scale.

### Shadow Vocabulary

- **Chassis** (`box-shadow: 0 18px 40px rgba(14, 14, 14, 0.28)`): Every dark
  panel — the bridge, channel readouts, the patch panel, the contact block, the
  case-study flow.
- **Well inset** (`box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.55)`): The meter
  well only. The system's single inset.
- **Floating control** (`box-shadow: 0 8px 20px rgba(14, 14, 14, 0.3)`): The
  back-to-top button, the one element that floats over the page.

### Named Rules

**The No-Floating-Card Rule.** An ivory surface never gets a shadow. If something
needs to lift off the page it becomes chassis — dark panel, walnut frame, cast
shadow. Ivory-on-ivory separates by rule alone.

## Shapes

Hard-edged and nearly square. The radius ladder has three steps and stops early:
2px on every control, tag, jack, and panel; 3px on chassis blocks; 4px on the
walnut frame. Nothing is a pill, nothing is a circle, and no corner exceeds 4px —
in this world a rounded corner is a manufacturing tolerance, not a style.

Borders are 1px hairlines throughout: ink at 22% on ivory, ink at 10% for softer
internal divisions, ivory at 16% on dark ground. Section headings sit on a 2px
solid ink rule — the only rule in the system heavier than a hairline, and the one
that says a new region begins.

The meter face is drawn as inline SVG on a `8 6 244 104` viewBox with the needle
pivot at `(130, 138)`, deliberately below the visible frame so the needle emerges
from the bezel rather than from a visible hub. Twenty-seven ticks span ±46°, the
last of them red; numerals ride outside the tick arc at radius 120.

### Named Rules

**The 4px Ceiling Rule.** No corner in this system exceeds 4px. A pill or a circle
is out of world.

## Components

### Buttons

- **Shape:** 2px radius, 2.9rem minimum height, `0.65rem 1.5rem` padding, 1px
  border always present so solid and ghost swap without reflow.
- **Solid:** Ink fill, ivory-lit text. Hover and focus flip the fill to peak red.
- **Ghost:** Transparent with an ink hairline. Hover and focus invert to ink fill.
- **Transitions:** 140ms linear on background and color only. Controls in this
  world switch; they do not glide or lift.

### The Meter (signature)

The system's defining component, and the only place the world is fully expressed.

- **Face:** Ivory gradient (lit → deep) behind a glass sheen, carrying an SVG VU
  scale — ±46° arc, twenty-seven ticks, numerals outside the tick arc, and a 3.2px
  red arc from 0 VU to maximum.
- **Needle:** A 2.4px ink line pivoting from `(130, 138)`, resting at −46°.
- **Strip:** Charcoal bar with the channel number in Anton and the metric name in
  tracked steel caps, right-aligned.
- **Readout:** Ink panel with the value in Anton — red when the metric beat a
  published baseline — over a steel note naming what it was measured against.

### Channel Row

- **Numeral:** Anton at 2.4rem, ivory-deep fill with a 1px charcoal stroke, turning
  solid red on row hover. The outlined numeral is how a channel reads inactive.
- **Row hover:** Ink at 3.5% wash across the full row. No lift, no shadow.
- **Readout panel:** Ink chassis listing key/value rows split by ivory hairlines,
  or an honest note when the project has no published metrics.

### Tags

Hairline-bordered, 2px radius, tracked uppercase at 0.58rem. `tag-hot` swaps
border and text to peak red and is reserved for a project whose readout contains a
result that beat its baseline.

### Patch Panel

Charcoal block containing a 1px-gapped grid of cells, the gaps showing ivory at 10%
so the grid reads as machined seams. Each cell holds a heading and a set of
**jacks**: hairline-bordered steel-bordered chips at 0.64rem.

### Rail

Sticky ivory bar on a hairline. Name in Anton beside a red tracked role label.
Nav items are tracked steel caps with a 2px transparent bottom border that turns
red on hover and focus. Below 720px the rail stacks and the nav scrolls
horizontally with its scrollbar hidden.

### Back-to-Top

Ink square, 2px radius, fixed bottom-right, hidden until the visitor has scrolled
past 90% of one viewport — it does not exist until there is a top to return to.

## Do's and Don'ts

### Do:

- **Do** reserve peak red (`#d23b2d`) for past-zero: the scale beyond 0 VU, a
  readout that beat a published baseline, the accented headline word, and control
  hover states.
- **Do** separate ivory regions with hairline rules (`rgba(14,14,14,0.22)`) and
  give dark chassis the one ambient shadow (`0 18px 40px rgba(14,14,14,0.28)`).
- **Do** set every label under 0.75rem in uppercase Archivo 600 with ≥0.1em
  tracking.
- **Do** keep tabular figures on. Every number in this design is a measurement.
- **Do** put at least one row of meters in the first viewport at 390px.
- **Do** state honestly in the readout when a project has no published metrics,
  and badge it to match. The badge may never claim more than the readout shows.
- **Do** extend the `prefers-reduced-motion` block whenever motion is added; the
  needle sweep and the section lean are both already disabled there.

### Don't:

- **Don't** exceed a 4px corner radius, or introduce a pill or a circle.
- **Don't** put a shadow on an ivory surface, or nest a card inside a card.
- **Don't** use Anton for prose, or introduce a serif or a monospace face.
- **Don't** add a third ground color. There is meter ivory and there is ink.
- **Don't** use walnut for anything but the chassis frame — never for text, never
  as a section background.
- **Don't** scatter hover effects. The needle sweep is the one authored motion;
  everything else is a 140ms color switch.
- **Don't** animate a needle to a value that has no real measurement behind it.
