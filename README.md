# eduardogomez.io

The source code for my personal website built with [Gatsby](https://www.gatsbyjs.com/) and [Ghost](https://ghost.org/) as a headless CMS.

&nbsp;

# Installing

Install Gatsby and clone the repository

```bash
# Install the Gatsby CLI
npm install -g gatsby-cli
```

```bash
# Clone the repository
git clone https://github.com/eddiesigner/eduardogomez.io.git
```

Then install dependencies

```bash
npm install
```

&nbsp;

# Running

Create the file `.env.development` in the root directory and paste the following variables:

```bash
NODE_ENV=development
SITEURL=http://localhost:8000
GHOST_API_URL=https://gatsby.ghost.io
GHOST_CONTENT_API_KEY=9cc5c67c358edfdd81455149d0
GTM_ID=GTM-XXXXXXX
```

The API URL is the URL of your Ghost site. For Ghost(Pro) customers, this is the Ghost URL ending in `.ghost.io`, and for people using the self-hosted version of Ghost, it's the same URL used to access your site.

A Content API Key can be provided by creating an integration within Ghost Admin. Navigate to Integrations and click "Add new integration". Name the integration appropriately and click create.

Start the development server. You now have a Gatsby site pulling content from headless Ghost.

```bash
gatsby develop
```

Finally, configure your desired URL in `siteConfig.js`, so links (e. g. canonical links) are generated correctly. You can also update other default values, such as `postsPerPage` in this file.

&nbsp;

# Production Build

Create the file `.env.production` in the root directory, paste the same development variables and change the values accordingly.

```bash
# Run a production build, locally
gatsby build

# Serve a production build, locally
gatsby serve
```

Gatsby `develop` uses the `development` variables in `.env.development` - while Gatsby `build` uses the `production` variables in `.env.production`.

&nbsp;

# Deploying with Netlify

The project contains three config files specifically for deploying with Netlify. A `netlify.toml` file for build settings, a `/static/_headers` file with default security headers set for all routes, and `/static/_redirects` to set Netlify custom domain redirects.

To deploy to your Netlify account, hit the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eddiesigner/eduardogomez.io)

Content API Keys must be set as [Netlify ENV variables](https://docs.netlify.com/configure-builds/environment-variables/) for production builds.

Once deployed, you can set up a [Ghost + Netlify Integration](https://ghost.org/integrations/netlify/) to use deploy hooks from Ghost to trigger Netlify rebuilds. That way, any time data changes in Ghost, your site will rebuild on Netlify.

&nbsp;

# Optimising

You can disable the default Ghost Handlebars Theme front-end by enabling the `Make this site private` flag within your Ghost settings. This enables password protection in front of the Ghost install and sets `<meta name="robots" content="noindex" />` so your Gatsby front-end becomes the source of truth for SEO.

&nbsp;
