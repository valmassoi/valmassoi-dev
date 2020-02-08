import React from 'react';
import { FaGithub, FaHackerrank } from 'react-icons/fa';

import styles from './layout.module.scss';

// TODO hover color of company
const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerLinks}>
      <a href="https://github.com/valmassoi" target="_blank" rel="noopener noreferrer" title="GitHub">
        <FaGithub size="30px" />
      </a>
      <a href="https://hackerrank.com/valmassoi" target="_blank" rel="noopener noreferrer" title="HackerRank">
        <FaHackerrank size="30px" />
      </a>
    </div>
  </div>
);

export default Footer;
