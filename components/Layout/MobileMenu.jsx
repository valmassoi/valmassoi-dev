import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import cn from 'classnames';

import styles from './nav.module.scss';

const MobileMenu = ({
  links,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    window.scrollTo(0, 0);
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <FaBars size="30px" className={styles.barsIcon} onClick={handleClick} />
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks}>
            {links.map(({
              key,
              href,
              label,
              active,
            }) => (
              <li key={key} className={cn({ [styles.activeLink]: active })}>
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

MobileMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MobileMenu;
