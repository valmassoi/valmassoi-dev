import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDimensions } from 'react-recipes';
import cn from 'classnames';

import MobileMenu from './MobileMenu';
import breakpoints from '../../styles/breakpoints.module.scss';
import styles from './nav.module.scss';

const Nav = () => {
  const [wrapperRef, dimensions] = useDimensions(true, 100);
  const isMobile = dimensions.width < parseFloat(breakpoints.largeMobile);
  console.log({ isMobile });

  const links = [
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ].map((link) => {
    const router = useRouter();
    link.key = `nav-link-${link.href}-${link.label}`;
    link.active = router.pathname === link.href;
    return link;
  });

  return (
    <nav className={styles.navbar} ref={wrapperRef}>
      <Link href="/">
        <a className={styles.homeLink}>Valmassoi</a>
      </Link>
      {isMobile ? <MobileMenu links={links} /> : (
        <ul className={styles.navLinks}>
          {links.map(({
            key, href, label, active,
          }) => (
            <li key={key} className={cn({ [styles.activeLink]: active })}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
