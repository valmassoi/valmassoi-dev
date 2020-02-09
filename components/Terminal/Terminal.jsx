import React, { useState } from 'react';
import { string, node } from 'prop-types';
import cn from 'classnames';

import styles from './terminal.module.scss';

const Circle = ({
  color,
  radius = 7,
  className,
  onClick,
}) => (
  <svg className={className} onClick={onClick} viewBox={`0 0 ${radius * 2} ${radius * 2}`} width={radius * 2} xmlns="http://www.w3.org/2000/svg">
    <circle cx={radius} cy={radius} r={radius} fill={color} />
  </svg>
);

const Terminal = ({ children, className, ...rest }) => {
  const [closed, setClosed] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleCloseClick = () => {
    setClosed(true);
  };
  const handleMinimizeClick = () => {
    // https://codepen.io/balapa/pen/obpLeJ/
    setMinimized(true);
    // eslint-disable-next-line
    alert('Minimize Coming Soon.');
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const trafficLightStates = {
    [styles.closed]: closed,
    [styles.minimized]: minimized,
    [styles.expanded]: expanded,
  };
  return (
    <div
      className={cn(styles.terminal, className, trafficLightStates)}
      {...rest}
    >
      <div className={styles.topBar}>
        <Circle color="#ed645a" onClick={handleCloseClick} className={styles.closeCircle} />
        <Circle color="#e1c14c" onClick={handleMinimizeClick} className={styles.minimizeCircle} />
        <Circle color="#70bd3c" onClick={handleExpandClick} className={styles.expandCircle} />
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
