import { isControlKey, isCtrlOrCmdKey, isEditKey } from '../../src/utils';

describe('Method isControlKey', () => {
  it('Hits the Backspace key', () => {
    const event = {
      keyCode: 8
    };

    expect(isControlKey(event)).toBe(true);
  });
});

describe('Method isCtrlOrCmdKey', () => {
  it('Hits the Control key', () => {
    const event = {
      keyCode: 17
    };

    expect(isCtrlOrCmdKey(event)).toBe(true);
  });
});

describe('Method isEditKey', () => {
  it('Hits the Copy keystroke (C key)', () => {
    const event = {
      keyCode: 67
    };

    expect(isEditKey(event)).toBe(true);
  });

  it('Hits the Paste keystroke (V key)', () => {
    const event = {
      keyCode: 86
    };

    expect(isEditKey(event)).toBe(true);
  });

  it('Hits the Cut keystroke (X key)', () => {
    const event = {
      keyCode: 88
    };

    expect(isEditKey(event)).toBe(true);
  });

  it('Hits any key (H key for example)', () => {
    const event = {
      keyCode: 72
    };

    expect(isEditKey(event)).toBe(false);
  });
});
