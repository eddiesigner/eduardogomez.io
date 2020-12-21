import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import { Header, Footer } from '.'

/**
 * Global styles
 */
import '../../styles/global.css'

/**
 * Color variables
 */
const GlobalStyle = createGlobalStyle`
  html {
    --color-foreground: #1f1f20;
    --color-background: #ffffff;
    --color-secondary: #627597;
    --color-text: #505050;
    --color-accent: #2188ff;
    --color-border: #efefef;
    --color-focus: #90cdf4;
    --color-second-gradient: #804eda;
    --color-button-shadow: rgba(0, 0, 0, 0.2);
    --color-nav-gradient-left: rgba(255, 255, 255, 1);
    --color-nav-gradient-right: rgba(255, 255, 255, 0);
    --opacity-dots: 0.2;

    @media (prefers-color-scheme: dark) {
      --color-foreground: #ffffff;
      --color-background: #1f1f20;
      --color-secondary: #8c94a2;
      --color-text: #d6d6d6;
      --color-accent: #2188ff;
      --color-border: #2a2a2a;
      --color-focus: #90cdf4;
      --color-second-gradient: #804eda;
      --color-button-shadow: rgba(0, 0, 0, 0.6);
      --color-nav-gradient-left: rgba(31, 31, 31, 1);
      --color-nav-gradient-right: rgba(31, 31, 31, 0);
      --opacity-dots: 1;
    }
  }

  body {
    background-color: var(--color-background);
  }
`

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, location }) => {
  const site = data.allGhostSettings.edges[0].node

  return (
    <>
      <Helmet>
        <html lang={site.lang} />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body />
      </Helmet>

      <GlobalStyle />

      <Header
        location={location}
        navigation={site.navigation}
        logo={site.logo}
        title={site.title}
      />

      <main>
        {/* All the main content gets inserted here, index.js, post.js */}
        {children}
      </main>

      <Footer secondaryNavigation={site.secondary_navigation} />
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
  <StaticQuery
    query={graphql`
      query GhostSettings {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
      }
    `}
    render={data => <DefaultLayout data={data} {...props} />}
  />
)

export default DefaultLayoutSettingsQuery
