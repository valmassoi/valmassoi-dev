import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';
import cn from 'classnames';

import { H2 } from 'app-components/htmlElements';
import Layout from 'app-components/Layout/Layout';
import Box from 'app-components/Box/Box';
import MailBox from 'app-components/svgs/mailBox.svg';

import styles from './contact.module.scss';

const EMAIL_ADDRESS = 'orient_00agility@icloud.com';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
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
