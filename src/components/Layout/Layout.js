import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';
import { Helmet } from 'react-helmet';

import { GlobalStyle, Theme } from '@theme';
import { Container } from '@components';
import { htmlAttributes } from './static';

const Layout = ({
  children, path,
}) => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <Theme>
      <Helmet htmlAttributes={htmlAttributes} />
      <GlobalStyle />
      <header>
        <Container>I&apos;m a header</Container>
      </header>
      {children}
      <footer>
        <Container>
          I&apos;m a footer
        </Container>
      </footer>
    </Theme>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  path: PropTypes.string.isRequired,
};
