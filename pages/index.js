import React from 'react';

import Layout from '../components/Layout/Layout';
import { H1 } from '../components/htmlElements';

import styles from './index.module.scss';

const Home = () => {
  return (
    <Layout title="Home">
      <H1>Welcome</H1>
    </Layout>
  );
};

export default Home;
