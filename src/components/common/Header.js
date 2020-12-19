import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Wrapper } from '.'
import { mediaQueries } from '../../utils/mediaQueries'

const Header = ({ location, navigation, logo, title }) => (
  <Container>
    <Wrapper>
      <Content>
        <LogoLink href="/">
          <LogoImage src={logo} alt={title} />
        </LogoLink>
        <NavigationContainer>
          <NavigationShadow aria-hidden="true" />
          <NavigationWrapper>
            <MainNavigation aria-label="Main navigation">
              <NavigationList>
                {navigation.map((navItem, i) => {
                  const isCurrent =
                    location.pathname === new URL(navItem.url).pathname

                  return (
                    <NavItem key={i} current={isCurrent}>
                      <NavLink href={navItem.url} key={i}>
                        {navItem.label}
                      </NavLink>
                    </NavItem>
                  )
                })}
              </NavigationList>
            </MainNavigation>
          </NavigationWrapper>
        </NavigationContainer>
      </Content>
    </Wrapper>
  </Container>
)

const Container = styled.header`
  padding: 1.875rem 0;
  margin-bottom: 3.75rem;

  @media ${mediaQueries.medium} {
    padding: 3.125rem 0;
    margin-bottom: 4.6875rem;
  }
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoLink = styled.a`
  display: block;
  flex-shrink: 0;
  width: 3.125rem;
  height: 3.125rem;
  margin-right: 1.875rem;
  border-radius: 50%;
  overflow: hidden;
  transition: box-shadow 0.1s ease;

  @media ${mediaQueries.medium} {
    width: 4.6875rem;
    height: 4.6875rem;
    margin-right: 2.5rem;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.1875rem var(--color-focus), 0 0 0 transparent;
  }
`

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const NavigationContainer = styled.div`
  position: relative;
  flex: 1;
  min-width: 0.0625rem;
`

const NavigationShadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.25rem;
  height: 100%;
  z-index: 2;
  background: -moz-linear-gradient(
    left,
    var(--color-nav-gradient-left) 0%,
    var(--color-nav-gradient-right) 100%
  );
  background: -webkit-linear-gradient(
    left,
    var(--color-nav-gradient-left) 0%,
    var(--color-nav-gradient-right) 100%
  );
  background: linear-gradient(
    to right,
    var(--color-nav-gradient-left) 0%,
    var(--color-nav-gradient-right) 100%
  );

  @media ${mediaQueries.medium} {
    display: none;
  }
`

const NavigationWrapper = styled.div`
  margin-right: -1.25rem;
  overflow-y: hidden;

  @media ${mediaQueries.medium} {
    margin-right: 0;
    overflow-y: visible;
  }
`

const MainNavigation = styled.nav`
  position: relative;
  padding-bottom: 2.5rem;
  margin-bottom: -2.5rem;
  overflow-x: auto;
  overflow-y: hidden;

  @media ${mediaQueries.medium} {
    padding-bottom: 0;
    margin-bottom: 0;
    overflow: visible;
  }
`

const NavigationList = styled.ul`
  display: flex;
  white-space: nowrap;
  padding: 0;
  margin: 0;

  @media ${mediaQueries.medium} {
    justify-content: flex-end;
  }
`

const NavItem = styled.li`
  position: relative;
  padding: 0.5rem 0 0;
  margin-left: 1.875rem;

  @media ${mediaQueries.medium} {
    margin-left: 2.5rem;
  }

  &:first-of-type {
    margin-left: 1.25rem;

    @media ${mediaQueries.medium} {
      margin-left: 0;
    }
  }

  &:last-of-type {
    padding-right: 1.875rem;

    @media ${mediaQueries.medium} {
      padding-right: 0;
    }
  }

  &:before {
    content: '';
    display: ${props => (props.current ? `block` : `none`)};
    position: absolute;
    left: 50%;
    top: 0;
    width: 0.25rem;
    height: 0.25rem;
    margin-left: -0.125rem;
    border-radius: 50%;
    background-color: var(--color-accent);
  }
`

const NavLink = styled.a`
  color: var(--color-foreground);
  line-height: 1.3;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.8;
`

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Header
