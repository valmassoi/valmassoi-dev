import React from 'react';
import { string, node } from 'prop-types';
import cn from 'classnames';

import styles from './terminal.module.scss';

const Circle = ({ color, radius = 7 }) => (
  <svg viewBox={`0 0 ${radius * 2} ${radius * 2}`} width={radius * 2} xmlns="http://www.w3.org/2000/svg">
    <circle cx={radius} cy={radius} r={radius} fill={color} />
  </svg>
);

const Terminal = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn(styles.terminal, className)}
      {...rest}
    >
      <div className={styles.topBar}>
        <Circle color="#ed645a" />
        <Circle color="#e1c14c" />
        <Circle color="#70bd3c" />
      </div>
      <div className={styles.terminalBody}>
        {children}
      </div>
    </div>
  );
};

Terminal.propTypes = {
  children: node.isRequired,
  className: string,
};

Terminal.defaultProps = {
  className: '',
};

export default Terminal;
