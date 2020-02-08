import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';

import styles from './index.module.scss';

const Home = () => {
  return (
    <div>
      <Head title="Home" />
      <Nav />
      <h1>Welcome</h1>
    </div>
  );
};

export default Home;
