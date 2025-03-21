import React, { forwardRef, useState } from 'react';
import {
  isControlKey,
  isCtrlOrCmdKey,
  isEditKey,
  cleanRUN,
  formatRUN
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
  (props, ref) => {
    const { value: externalValue, onChange, ...DOMProps } = props;
    const [ctrlDown, setCtrlDown] = useState(false);
    const [localValue, setLocalValue] = useState(externalValue ?? '');

    /**
     * @param {React.FormEvent<HTMLInputElement>} event
     */
    const handleInput = (event) => {
      /** @type {HTMLInputElement} */
      const input = event.target;

      const run = cleanRUN(input.value);

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
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    );
  }
);
