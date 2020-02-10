import React, { useState } from 'react';
import {
  string,
  node,
  number,
  func,
} from 'prop-types';
import cn from 'classnames';
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';

import styles from './terminal.module.scss';

const Circle = ({
  color,
  radius,
  className,
  onClick,
  icon,
}) => (
  <div className={styles.trafficLight} onClick={onClick} role="button">
    <svg className={className} viewBox={`0 0 ${radius * 2} ${radius * 2}`} width={radius * 2} xmlns="http://www.w3.org/2000/svg">
      <circle cx={radius} cy={radius} r={radius} fill={color} />
    </svg>
    {icon && <span className={styles.circleIcon}>{icon}</span>}
  </div>
);

Circle.propTypes = {
  color: string.isRequired,
  className: string,
  onClick: func,
  radius: number,
};

Circle.defaultProps = {
  radius: 7,
  className: '',
  onClick: null,
};

const Terminal = ({ children, className, ...rest }) => {
  const [closed, setClosed] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const handleCloseClick = () => {
    setClosed(true);
  };
  const handleMinimizeClick = () => {
    // https://codepen.io/balapa/pen/obpLeJ/
    setMinimized(!minimized);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
    setMinimized(false);
  };
  const handleTrafficLightsMouseEnter = () => {
    setShowIcons(true);
  };
  const handleTrafficLightsMouseLeave = () => {
    setShowIcons(false);
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
        <div className={styles.trafficLights} onMouseEnter={handleTrafficLightsMouseEnter} onMouseLeave={handleTrafficLightsMouseLeave}>
          <Circle color="#ed645a" onClick={handleCloseClick} className={styles.closeCircle} icon={showIcons ? <FaTimes color="#951f16" size="12px" /> : null} />
          <Circle color="#e1c14c" onClick={handleMinimizeClick} className={styles.minimizeCircle} icon={showIcons ? <FaMinus color="#ae8d34" size="12px" /> : null} />
          <Circle color="#70bd3c" onClick={handleExpandClick} className={styles.expandCircle} icon={showIcons ? <FaPlus color="#265a15" size="12px" /> : null} />
        </div>
      </div>
      <div className={cn(styles.terminalBody, { [styles.minimized]: minimized })}>
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
