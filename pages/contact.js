import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';
import cn from 'classnames';

import Layout from '../components/Layout/Layout';
import Box from '../components/Box/Box';
import MailBox from '../components/svgs/mailBox.svg'

import styles from './contact.module.scss';
import { H2 } from '../components/htmlElements';

const EMAIL_ADDRESS = 'valmassoi@pm.me';

const Contact = () => { 
  const [copied, setCopied] = useState(false);
  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }
  return (
    <Layout title="Contact">
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.mailboxWrapper}>
            <MailBox />
          </div>
        </div>
        <div className={styles.rightSide}>
          <CopyToClipboard text={EMAIL_ADDRESS} onCopy={handleCopyClick}>
            <Box
              title="Copy Email Address"
              className={cn(styles.emailBox, { [styles.copied]: copied })}
            >
              <FaCopy size="20px" className={styles.copyIcon} />
              <H2 className={styles.emailMe}>{copied ? 'Copied!' : 'Email me'}</H2>
              <p className={styles.emailAddress}>{EMAIL_ADDRESS}</p>
            </Box>
          </CopyToClipboard>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
