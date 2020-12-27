import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Wrapper } from '.'
import { mediaQueries } from '../../utils/mediaQueries'

const Footer = ({ secondaryNavigation }) => (
  <Container>
    <Wrapper>
      <Content>
        <nav aria-label="Footer navigation">
          <NavigationList>
            {secondaryNavigation.map((navItem, i) => (
              <NavItem key={i}>
                <NavLink href={navItem.url} key={i}>
                  {navItem.label}
                </NavLink>
              </NavItem>
            ))}
          </NavigationList>
        </nav>
        <SourceCodeLink href="https://github.com/eddiesigner/eduardogomez.io">
          &lt;/&gt; Source Code
        </SourceCodeLink>
      </Content>
    </Wrapper>
  </Container>
)

const Container = styled.footer`
  padding: 2.1875rem 0;
  border-top: 0.0625rem solid var(--color-border);

  @media ${mediaQueries.medium} {
    padding: 1.5625rem 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mediaQueries.medium} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0 0 1.5625rem;

  @media ${mediaQueries.medium} {
    margin: 0;
  }
`

const NavItem = styled.li`
  margin: 0 1.25rem;

  @media ${mediaQueries.medium} {
    margin: 0 2.5rem 0 0;
  }
`

const NavLink = styled.a`
  color: var(--color-foreground);
  line-height: 1.3;
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s linear;

  @media ${mediaQueries.medium} {
    font-size: 1rem;
  }

  &:hover {
    opacity: 0.6;
  }
`

const SourceCodeLink = styled.a`
  color: var(--color-foreground);
  line-height: 1.3;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  opacity: 0.5;
  transition: opacity 0.2s linear;

  @media ${mediaQueries.medium} {
    font-size: 0.9375rem;
  }

  &:hover {
    opacity: 0.3;
  }
`

Footer.propTypes = {
  secondaryNavigation: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default Footer
