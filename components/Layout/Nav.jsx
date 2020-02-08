import React from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import cn from 'classnames';

import styles from './layout.module.scss';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Nav = () => {
  const links = [
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ].map(link => {
    const router = useRouter();
    link.key = `nav-link-${link.href}-${link.label}`;
    link.active = router.pathname === link.href;
    return link;
  });

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.homeLink}>Valmassoi</a>
      </Link>
      <ul className={styles.navLinks}>
        {links.map(({ key, href, label, active }) => (
          <li key={key} className={cn({[`${styles.activeLink}`]: active})}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
