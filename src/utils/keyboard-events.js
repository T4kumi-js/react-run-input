/**
 * @param {KeyboardEvent} event
 * @returns {boolean}
 */
export function isControlKey(event) {
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
 * @param {KeyboardEvent} event
 * @returns {boolean}
 */
export function isCtrlOrCmdKey(event) {
    const KEYS = [
        17, // Control
        91  // Command (for macOS)
    ];

    return KEYS.includes(event.keyCode);
}

/**
 * @param {KeyboardEvent} event
 * @returns {boolean}
 */
export function isEditKey(event) {
    const KEYS = [
        67, // C
        86, // V
        88  // X
    ];

    return KEYS.includes(event.keyCode);
}
