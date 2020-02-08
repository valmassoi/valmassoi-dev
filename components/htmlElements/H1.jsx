import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../styles/colors.module.scss';

const H1 = ({
  children,
  ...rest
}) => (
    <h1 {...rest}>
      {children}
      <style jsx>{`
        h1 {
          // color: ${colors.accentColor};
          // font-size: 24px;
          margin: 0;
        }
      `}
      </style>
    </h1>
  );

H1.propTypes = {
  children: PropTypes.node,
};

H1.defaultProps = {
  children: null,
};

export default H1;
