import { checkRUN, formatRUN } from '../../src/utils';

describe('RUN checker', () => {
  const validRUN = '172844499';
  const validFormattedRUN = '17.284.449-9';

  const validRUN_WithK = '15269816K';
  const validFormattedRUN_WithK = '15.269.816-K';

  const validRUN_WithZero = '74468780';
  const validFormattedRUN_WithZero = '7.446.878-0';

  const invalidRUN = '123456789';
  const invalidFormattedRUN = '12.345.678-9';

  it('checks if entered RUN is valid (no formatted)', () => {
    expect(checkRUN(validRUN)).toBe(true);
  });

  it('checks if entered RUN is valid (formatted)', () => {
    expect(checkRUN(validFormattedRUN)).toBe(true);
  });

  it('checks if entered RUN with K is valid (no formatted)', () => {
    expect(checkRUN(validRUN_WithK)).toBe(true);
  });

  it('checks if entered RUN with K is valid (formatted)', () => {
    expect(checkRUN(validFormattedRUN_WithK)).toBe(true);
  });

  it('checks if entered RUN with 0 is valid (no formatted)', () => {
    expect(checkRUN(validRUN_WithZero)).toBe(true);
  });

  it('checks if entered RUN with 0 is valid (formatted)', () => {
    expect(checkRUN(validFormattedRUN_WithZero)).toBe(true);
  });

  it('checks if entered RUN is not valid (no formatted)', () => {
    expect(checkRUN(invalidRUN)).toBe(false);
  });

  it('checks if entered RUN is not valid (formatted)', () => {
    expect(checkRUN(invalidFormattedRUN)).toBe(false);
  });

  it('checks the empty RUN that is invalid', () => {
    const emptyRUN = '';

    expect(checkRUN(emptyRUN)).toBe(false);
  });
});

describe('RUN formatter', () => {
  const validRUN = '195175101';
  const validFormattedRUN = '19.517.510-1';

  it('formats the entered RUN', () => {
    expect(formatRUN(validRUN)).toBe(validFormattedRUN);
  });

  it('formats the entering RUN with only 1 digit', () => {
    const enteringRUN = '1';

    expect(formatRUN(enteringRUN)).toBe('1');
  });
});
