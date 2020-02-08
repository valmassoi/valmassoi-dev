import React from 'react';

import Layout from '../components/Layout/Layout';
import Box from '../components/Box/Box';
import MailBox from '../components/svgs/mailBox.svg'

import styles from './contact.module.scss';
import { H2 } from '../components/htmlElements';

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.mailboxWrapper}>
            <MailBox />
          </div>
        </div>
        <div className={styles.rightSide}>
          <Box className={styles.emailBox}>
            <H2>Email me</H2>
            <p className={styles.emailAddress}>valmassoi@pm.me</p>
          </Box>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
