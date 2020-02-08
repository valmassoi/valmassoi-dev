import React from 'react';
import { FaGithub } from 'react-icons/fa';

import styles from './layout.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerLinks}>
      <a href="https://github.com/valmassoi" target="_blank" rel="noopener noreferrer" title="GitHub">
        <FaGithub size="30px" />
      </a>
    </div>
  </div>
);

export default Footer;
