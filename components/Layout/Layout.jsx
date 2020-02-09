import React from 'react';
import PropTypes from 'prop-types';

import Head from './Head';
import Nav from './Nav';
import Footer from './Footer';

import styles from './layout.module.scss';

const Layout = ({
  children,
  title,
}) => (
  <div className={styles.layout}>
    <Head title={title} />
    <div className={styles.contentWrapper}>
      <Nav />
      <div className={styles.content}>
        {children}
      </div>
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
