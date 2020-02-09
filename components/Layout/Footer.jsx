import React from 'react';
import { FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa';

import styles from './footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerLinks}>
      <a className={styles.gitHub} href="https://github.com/valmassoi" target="_blank" rel="noopener noreferrer" title="GitHub">
        <FaGithub size="30px" />
      </a>
      <a className={styles.linkedIn} href="https://www.linkedin.com/in/robertvalmassoi" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <FaLinkedin size="30px" />
      </a>
      <a className={styles.hackerRank} href="https://hackerrank.com/valmassoi" target="_blank" rel="noopener noreferrer" title="HackerRank">
        <FaHackerrank size="30px" />
      </a>
    </div>
  </div>
);

export default Footer;
