import React from 'react';
import PropTypes from 'prop-types';

import colors from 'app-styles/colors.module.scss';

const H2 = ({
  children,
  ...rest
}) => (
  <h2 {...rest}>
    {children}
    <style jsx>
      {`
        h2 {
          color: ${colors.accentColor};
          font-size: 24px;
          margin: 0;
        }
      `}
    </style>
  </h2>
);

H2.propTypes = {
  children: PropTypes.node,
};

H2.defaultProps = {
  children: null,
};

export default H2;
