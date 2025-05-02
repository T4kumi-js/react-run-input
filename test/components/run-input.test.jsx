import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RUNInput } from '../../src/components/run-input';

describe('RUNInput', () => {
  it('renders the input', () => {
    const { getByRole } = render(<RUNInput />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('formats and cleans input on change', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<RUNInput onChange={handleChange} />);
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: '12.345.678-K' } });

    expect(input.value).toBe('12.345.678-K');
    expect(handleChange).toHaveBeenCalledWith('12345678K');
  });

  it('prevents invalid key input', () => {
    const { getByRole } = render(<RUNInput />);
    const input = getByRole('textbox');

    const event = {
      key: 'A',
      preventDefault: jest.fn(),
      ctrlKey: false,
      metaKey: false
    };

    const isAllowed = fireEvent.keyDown(input, event);
    expect(isAllowed).toBe(false);
  });

  it('allows numeric and K keys', () => {
    const { getByRole } = render(<RUNInput />);
    const input = getByRole('textbox');

    const keys = ['1', '2', 'K', 'k'];

    keys.forEach((key) => {
      const event = {
        key,
        preventDefault: jest.fn(),
        ctrlKey: false,
        metaKey: false
      };

      const isAllowed = fireEvent.keyDown(input, event);
      expect(isAllowed).toBe(true);
    });
  });

  it('syncs external value with local state', () => {
    const { getByRole, rerender } = render(<RUNInput value="12.345.678-K" />);
    const input = getByRole('textbox');
    expect(input.value).toBe('12.345.678-K');

    rerender(<RUNInput value="9.876.543-2" />);
    expect(input.value).toBe('9.876.543-2');
  });
});
