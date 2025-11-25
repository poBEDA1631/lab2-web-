# SCSS Architecture Project

This project demonstrates a robust SCSS architecture following the 7-1 pattern and BEM methodology.

## Features

### Architecture (7-1 Pattern)
The SCSS is organized into the following folders:
- `abstracts/`: Variables, mixins, functions.
- `base/`: Reset, typography, utilities, animations.
- `components/`: BEM components (buttons, cards, nav, images).
- `layout/`: Grid system, header, footer.
- `pages/`: Page-specific styles.

### Key Functionality

1.  **Variables & Maps**: Defined in `abstracts/_variables.scss` for colors, fonts, breakpoints, and spacing.
2.  **Mixins**:
    - `respond-to($breakpoint)`: Media query manager for mobile, tablet, and desktop.
    - `container`, `flex-center`, `heading-style`.
3.  **Functions**:
    - `to-rem($px)`: Converts pixels to rem units.
    - `color-mix($color1, $color2)`: Mixes two colors.
4.  **Custom Grid System**:
    - Implemented in `layout/_grid.scss`.
    - Supports `.container`, `.row`, `.col-*` (1-12).
    - Responsive classes: `.col-md-*`, `.col-sm-*`.
5.  **BEM Methodology**: All components follow Block Element Modifier naming convention.
6.  **Responsive Images**: Utility classes in `components/_images.scss`.
7.  **Animations**: Fade and slide animations in `base/_animations.scss`.
8.  **Print Styles**: Included in `base/_utilities.scss`.

## Usage

To compile the SCSS:

```bash
npm run scss
```

To watch for changes:

```bash
npm run watch:scss
```
