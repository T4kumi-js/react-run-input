import type React from 'react';
import {
  forwardRef,
  useEffect,
  useState
} from 'react';
import {
  cleanRUN,
  formatRUN,
  isControlKey,
  isCtrlOrCmdKey,
  isEditKey
} from '../../utils';

type RUNInputProps = {
  value?: string;
  onChange?: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

export const RUNInput = forwardRef<HTMLInputElement, RUNInputProps>(
  ({ value: externalValue, onChange, ...DOMProps }, ref) => {
    const [ctrlDown, setCtrlDown] = useState<boolean>(false);
    const [localValue, setLocalValue] = useState<string>('');

    useEffect(() => {
      if (externalValue) {
        const run = cleanRUN(externalValue);
        setLocalValue(run);
      }
    }, [externalValue]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      const run = cleanRUN(event.target.value);

      setLocalValue(run);

      if (onChange) {
        onChange(run);
      }
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
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

    const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
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
