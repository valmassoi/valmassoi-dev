import React from 'react';

import Layout from '../components/Layout/Layout';
import Box from '../components/Box/Box';
import MailBox from '../components/svgs/mailBox.svg'

import styles from './contact.module.scss';

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
            <h2 className={styles.email}>Email me</h2>
            <p>valmassoi@pm.me</p>
          </Box>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
