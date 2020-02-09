import React from 'react';
import { string, node } from 'prop-types';
import cn from 'classnames';

import styles from './box.module.scss';

const Box = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn(styles.box, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

Box.propTypes = {
  children: node.isRequired,
  className: string,
};

Box.defaultProps = {
  className: '',
};

export default Box;
