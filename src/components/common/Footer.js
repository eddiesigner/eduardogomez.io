import React from 'react'
import styled from 'styled-components'
import Wrapper from '../common/Wrapper'
import { mediaQueries } from '../../utils/mediaQueries'

const Footer = () => (
  <Container>
    <Wrapper>
      <Content>
        <NavigationList>
          <NavItem>
            <NavLink href="https://github.com/eddiesigner">Github</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://twitter.com/eddiesigner">Twitter</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/eddiesigner">
              Linkedin
            </NavLink>
          </NavItem>
        </NavigationList>
        <SourceCodeLink href="https://github.com/eddiesigner/eduardogomez.io">
          Source code of this website
        </SourceCodeLink>
      </Content>
    </Wrapper>
  </Container>
)

const Container = styled.footer`
  padding: 2.1875rem 0;

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

  @media ${mediaQueries.medium} {
    font-size: 1rem;
  }
`

const SourceCodeLink = styled.a`
  color: var(--color-foreground);
  line-height: 1.3;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  opacity: 0.5;

  @media ${mediaQueries.medium} {
    font-size: 0.9375rem;
  }
`

export default Footer
