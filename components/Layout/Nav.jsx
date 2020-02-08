import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress'

const links = [
  { href: '/contact', label: 'Contact' },
  { href: '/resume', label: 'Resume' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Valmassoi</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
