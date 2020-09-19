import React from 'react';
import PropTypes from 'prop-types';
/**
 * Styles
 */
import useStyles from 'isomorphic-style-loader/useStyles';
import styleSheet from './Tooltip.css';

export default function Tooltip({ text, children }) {
  useStyles(styleSheet);

  return (
    <div className={styleSheet.root}>
      {children}

      <span className={styleSheet.tooltipText}>{text}</span>
    </div>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
