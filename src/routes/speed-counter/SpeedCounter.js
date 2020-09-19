import React from 'react';
import PropTypes from 'prop-types';
/**
 * Styles
 */
import useStyles from 'isomorphic-style-loader/useStyles';
import styleSheet from './SpeedCounter.css';
/**
 * Components
 */
import Counter from '../../components/Counter';

export default function SpeedCounter({ title }) {
  useStyles(styleSheet);

  return (
    <div className={styleSheet.root}>
      <div className={styleSheet.container}>
        <h1>{title}</h1>

        <Counter />
      </div>
    </div>
  );
}

SpeedCounter.propTypes = {
  title: PropTypes.string.isRequired,
};
