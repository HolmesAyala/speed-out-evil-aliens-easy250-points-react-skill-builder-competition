import React, { useState } from 'react';
import PropTypes from 'prop-types';
/**
 * Styles
 */
import useStyles from 'isomorphic-style-loader/useStyles';
import styleSheet from './Counter.css';

export default function Counter({ delta, maxValue, minValue, fixedDecimals }) {
  useStyles(styleSheet);

  const [value, setValue] = useState(0);

  const [labelClassList, setLabelClassList] = useState([styleSheet.value]);

  const performLimitAnimation = () => {
    setLabelClassList([styleSheet.value]);

    setTimeout(() => {
      setLabelClassList([styleSheet.value, styleSheet.valueInLimit]);
    }, 1);
  };

  const onClickInPlusButtom = () => {
    let newValue = Number((value + delta).toFixed(fixedDecimals));

    if (newValue > maxValue) {
      newValue = maxValue;
      performLimitAnimation();
    }

    setValue(newValue);
  };

  const onClickInLessButtom = () => {
    let newValue = Number((value - delta).toFixed(fixedDecimals));

    if (newValue < minValue) {
      newValue = minValue;
      performLimitAnimation();
    }

    setValue(newValue);
  };

  return (
    <div className={styleSheet.root}>
      <button
        className={styleSheet.button}
        onClick={onClickInPlusButtom}
        type="button"
      >
        +
      </button>

      <span className={labelClassList.join(' ')}>{value}</span>

      <button
        className={styleSheet.button}
        onClick={onClickInLessButtom}
        type="button"
      >
        -
      </button>
    </div>
  );
}

Counter.propTypes = {
  /**
   * Step value
   */
  delta: PropTypes.number,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  /**
   * Decimals to fix value when value add or less delta
   */
  fixedDecimals: PropTypes.number,
};

Counter.defaultProps = {
  delta: 0.1, // 1 * (10 / 100);
  maxValue: 2,
  minValue: 0,
  fixedDecimals: 1,
};
