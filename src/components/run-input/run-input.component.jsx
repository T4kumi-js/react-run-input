import React, { forwardRef, useEffect, useState } from 'react';
import {
  cleanRUN,
  formatRUN,
  isControlKey,
  isCtrlOrCmdKey,
  isEditKey
} from '../../utils';

export const RUNInput = forwardRef(
  /**
   * @param {{
   *   value?: string;
   *   onChange?: (value: string) => void;
   * } & Omit<React.InputHTMLAttributes<never>, "onChange" | "value">} props
   * @param {React.ForwardedRef<HTMLInputElement>} ref
   * @returns {React.JSX.Element}
   */
  ({ value: externalValue, onChange, ...DOMProps }, ref) => {
    const [ctrlDown, setCtrlDown] = useState(false);
    const [localValue, setLocalValue] = useState('');

    useEffect(() => {
      if (externalValue) {
        const run = cleanRUN(externalValue);
        setLocalValue(run);
      }
    }, [externalValue]);

    /**
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
    const handleChange = (event) => {
      const run = cleanRUN(event.target.value);

      setLocalValue(run);

      if (onChange) {
        onChange(run);
      }
    };

    /**
     * @param {React.KeyboardEvent<HTMLInputElement>} event
     */
    const handleKeyDown = (event) => {
      const keyFilter = /[\dK]/;

      if (isCtrlOrCmdKey(event)) {
        setCtrlDown(true);
      }

      if (!(
        keyFilter.test(event.key.toUpperCase()) ||
        isControlKey(event) ||
        (ctrlDown && isEditKey(event))
      )) {
        event.preventDefault();
      }
    };

    /**
     * @param {React.KeyboardEvent<HTMLInputElement>} event
     */
    const handleKeyUp = (event) => {
      if (isCtrlOrCmdKey(event)) {
        setCtrlDown(false);
      }
    };

    return (
      <input
        {...DOMProps}
        ref={ref}
        type="text"
        maxLength={12}
        value={formatRUN(localValue)}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    );
  }
);

RUNInput.displayName = 'RUNInput';
