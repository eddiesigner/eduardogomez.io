import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import Footer from '../common/Footer'

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

    @media (prefers-color-scheme: dark) {
      --color-foreground: #ffffff;
      --color-background: #1f1f20;
      --color-secondary: #8c94a2;
      --color-text: #d6d6d6;
      --color-accent: #2188ff;
      --color-border: #2a2a2a;
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
const DefaultLayout = ({ data, children, bodyClass }) => {
  const site = data.allGhostSettings.edges[0].node
  return (
    <>
      <Helmet>
        <html lang={site.lang} />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body className={bodyClass} />
      </Helmet>

      <GlobalStyle />

      <div>
        {/* All the main content gets inserted here, index.js, post.js */}
        {children}
      </div>

      <Footer />
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    file: PropTypes.object,
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
