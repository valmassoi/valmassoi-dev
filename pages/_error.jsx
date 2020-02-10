import React from 'react';

import Layout from 'app-components/Layout/Layout';
import NotFound from 'app-components/svgs/notFound.svg';

import styles from './error.module.scss';

const Error = () => {
  return (
    <Layout>
      <div className={styles.notFoundWrapper}>
        <NotFound />
      </div>
    </Layout>
  );
};

// Error.getInitialProps = ({ res, err }) => {
//   const statusCode = (res && res.statusCode) || (err && err.statusCode) || 404;
//   return { statusCode };
// };

// Error.propTypes = {
//   statusCode: PropTypes.number.isRequired,
// };

export default Error;
