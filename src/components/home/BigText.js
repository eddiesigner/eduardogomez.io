import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const BigText = ({ gradient, children }) => (
  <Text gradient={gradient}>{children}</Text>
)

const Text = styled.span`
  display: block;
  color: var(--color-foreground);
  line-height: 1.3;
  font-size: 3rem;
  font-weight: 700;

  @media ${mediaQueries.medium} {
    line-height: 1.2;
    font-size: 4.5rem;
  }

  ${props => props.gradient &&
    css`
      color: var(--color-accent);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: -moz-linear-gradient(
        -45deg,
        var(--color-accent) 0%,
        var(--color-second-gradient) 100%
      );
      background-image: -webkit-linear-gradient(
        -45deg,
        var(--color-accent) 0%,
        var(--color-second-gradient) 100%
      );
      background-image: linear-gradient(
        135deg,
        var(--color-accent) 0%,
        var(--color-second-gradient) 100%
      );
    `}
`

BigText.propTypes = {
  gradient: PropTypes.bool,
}

export default BigText
