import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <Nav role="navigation" aria-label="Pagination">
      {previousPagePath && (
        <NavLink to={previousPagePath} rel="prev">
          Previous
        </NavLink>
      )}
      {nextPagePath && (
        <NavLink to={nextPagePath} rel="next">
          Next
        </NavLink>
      )}
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4.6875rem;

  @media ${mediaQueries.medium} {
    padding-top: 6.25rem;
  }
`

const NavLink = styled(Link)`
  display: inline-block;
  color: var(--color-foreground);
  line-height: 1.3;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0 1.25rem;
  opacity: 0.7;
  transition: opacity 0.2s linear;

  @media ${mediaQueries.medium} {
    font-size: 1rem;
  }

  &:hover {
    opacity: 0.5;
  }
`

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Pagination
