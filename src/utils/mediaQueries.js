const sizes = {
  breakSmall: `35.5em`,
  breakMedium: `48em`,
  breakLarge: `64em`,
  breakExtraLarge: `80em`,
  breakLargest: `90em`,
}

export const queries = {
  small: `only screen and (min-width: ${sizes.breakSmall})`,
  medium: `only screen and (min-width: ${sizes.breakMedium})`,
  large: `only screen and (min-width: ${sizes.breakLarge})`,
  extraLarge: `only screen and (min-width: ${sizes.breakExtraLarge})`,
  largest: `only screen and (min-width: ${sizes.breakLargest})`,
}
