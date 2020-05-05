/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { GlobalStyles } from '../../globalStyle';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link href="//db.onlinewebfonts.com/c/055f56b15a528d600fdf4c3f6882dba4?family=Publico+Banner+Web+Black" rel="stylesheet" type="text/css" />
    </Helmet>

    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
