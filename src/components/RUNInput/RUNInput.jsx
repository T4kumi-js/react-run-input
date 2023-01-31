import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  isControlKey,
  isCtrlOrCmdKey,
  isEditKey,
  cleanRUN,
  formatRUN
} from '../../utils';

function RUNInput(props) {
  const { value: externalValue, handleChangeValue, ...DOMProps } = props;
  const [ctrlDown, setCtrlDown] = useState(false);
  const [localValue, setLocalValue] = useState('' || externalValue);

  const handleInput = (event) => {
    const run = cleanRUN(event.target.value);

    setLocalValue(run);

    if (handleChangeValue) {
      handleChangeValue(run);
    }
  };

  const handleKeyDown = (event) => {
    const keyFilter = /[\dK]/;

    if (isCtrlOrCmdKey(event)) {
      setCtrlDown(true);
    }

    if (!(
      keyFilter.test(event.key.toUpperCase()) ||
      isControlKey(event) ||
      ctrlDown && isEditKey(event)
    )) {
      event.preventDefault();
    }
  };

  const handleKeyUp = (event) => {
    if (isCtrlOrCmdKey(event)) {
      setCtrlDown(false);
    }
  };

  return (
    <input {...DOMProps}
      type="text"
      maxLength="12"
      value={formatRUN(localValue)}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    />
  );
}

RUNInput.propTypes = {
  value: PropTypes.string,
  handleChangeValue: PropTypes.func
};

export default RUNInput;
