const path = require('path');

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
);

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      exclude: [
        'node_modules',
        '.cache',
        'public',
      ],
      options: {
        extensions: [
          'js',
          'jsx',
          'ts',
          'tsx',
        ],
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
      },
      resolve: 'gatsby-plugin-eslint',
    },
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        alias: {
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@containers': 'src/containers',
          '@pages': 'src/pages',
          '@src': 'src',
          '@theme': 'src/theme',
          '@utils': 'src/utils',
        },
        extensions: ['js'],
      },
      resolve: 'gatsby-plugin-alias-imports',
    },
    {
      options: {
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
        name: 'Untitled Gatsby project',
        short_name: 'foo',
        start_url: '/',
        theme_color: '#663399', // TODO: set these up
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-styled-components',
  ],
  siteMetadata: {
    author: '@kjhank',
    description: 'Gatsby starter using Styled Components',
    title: 'Gatsby Starter with Styled Components',
  },
};
