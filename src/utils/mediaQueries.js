const sizes = {
  breakSmall: `35.5rem`,
  breakMedium: `48rem`,
  breakLarge: `64rem`,
  breakExtraLarge: `80rem`,
  breakLargest: `90rem`,
}

export const mediaQueries = {
  small: `only screen and (min-width: ${sizes.breakSmall})`,
  medium: `only screen and (min-width: ${sizes.breakMedium})`,
  large: `only screen and (min-width: ${sizes.breakLarge})`,
  extraLarge: `only screen and (min-width: ${sizes.breakExtraLarge})`,
  largest: `only screen and (min-width: ${sizes.breakLargest})`,
}
