import type React from 'react';

/**
 * @param event The triggered keyboard event object
 * @returns Returns true if it's pressing a control key.
 */
export function isControlKey(event: React.KeyboardEvent<HTMLInputElement>): boolean {
  const KEYS = [
    8,  // Backspace
    9,  // Tab
    17, // Control
    35, // End
    36, // Home
    37, // ArrowLeft
    38, // ArrowUp
    39, // ArrowRight
    40, // ArrowDown
    46, // Delete
    91  // Command (for macOS)
  ];

  return KEYS.includes(event.keyCode);
}

/**
 * @param event The triggered keyboard event object
 * @returns Returns true if it's pressing the CTRL or COMMAND key.
 */
export function isCtrlOrCmdKey(event: React.KeyboardEvent<HTMLInputElement>): boolean {
  const KEYS = [
    17, // Control
    91  // Command (for macOS)
  ];

  return KEYS.includes(event.keyCode);
}

/**
 * @param event The triggered keyboard event object
 * @returns Returns true if it's pressing the C, V, or X key (for copy, paste, and cut respectively).
 */
export function isEditKey(event: React.KeyboardEvent<HTMLInputElement>): boolean {
  const KEYS = [
    67, // C
    86, // V
    88  // X
  ];

  return KEYS.includes(event.keyCode);
}
