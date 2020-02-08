import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';

import styles from './contact.module.scss';

const Contact = () => {
  return (
    <div>
      <Head title="Contact" />
      <Nav />
      <p className={styles.email}>Email me: valmassoi@pm.me</p>
    </div>
  );
};

export default Contact;
