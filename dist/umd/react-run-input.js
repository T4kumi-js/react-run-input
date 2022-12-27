(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactRUNInput = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  /**
   * @param {KeyboardEvent} event
   * @returns {boolean}
   */
  function isControlKey(event) {
    const KEYS = [8,
    // Backspace
    9,
    // Tab
    17,
    // Control
    35,
    // End
    36,
    // Home
    37,
    // ArrowLeft
    38,
    // ArrowUp
    39,
    // ArrowRight
    40,
    // ArrowDown
    46,
    // Delete
    91 // Command (for macOS)
    ];

    return KEYS.includes(event.keyCode);
  }

  /**
   * @param {KeyboardEvent} event
   * @returns {boolean}
   */
  function isCtrlOrCmdKey(event) {
    const KEYS = [17,
    // Control
    91 // Command (for macOS)
    ];

    return KEYS.includes(event.keyCode);
  }

  /**
   * @param {KeyboardEvent} event
   * @returns {boolean}
   */
  function isEditKey(event) {
    const KEYS = [67,
    // C
    86,
    // V
    88 // X
    ];

    return KEYS.includes(event.keyCode);
  }

  /**
   * @param {string} run
   * @returns {{dv: string, numRUN: string}}
   */
  function cleanAndSplitRUN(run) {
    let cleanRUN = run?.replace(/[\.\-]/g, ''),
      numRUN = '',
      dv = '';
    if (cleanRUN?.length === 1) {
      numRUN = cleanRUN;
    } else if (cleanRUN?.length > 1) {
      numRUN = cleanRUN.slice(0, -1);
      dv = cleanRUN.slice(-1).toUpperCase();
    }
    return {
      numRUN,
      dv
    };
  }

  /**
   * @param {string} run
   * @returns {string}
   */
  function cleanRUN(run) {
    const {
      numRUN,
      dv
    } = cleanAndSplitRUN(run);
    return numRUN + dv;
  }

  /**
   * @param {string} run
   * @returns {boolean}
   */
  function checkRUN(run) {
    const isNumber = /^\d+$/;
    const {
      numRUN,
      dv
    } = cleanAndSplitRUN(run);
    if (!(numRUN && dv && isNumber.test(numRUN))) return false;
    let calculation = 0,
      series = 2,
      validDV;
    for (let i = numRUN.length - 1; i >= 0; i--) {
      if (series > 7) series = 2;
      calculation += series * numRUN.charAt(i);
      series++;
    }
    calculation = 11 - calculation % 11;
    if (calculation === 10) {
      validDV = 'K';
    } else if (calculation === 11) {
      validDV = '0';
    } else {
      validDV = calculation.toString();
    }
    return dv === validDV;
  }

  /**
   * @param {string} run
   * @returns {string}
   */
  function formatRUN(run) {
    let {
      numRUN,
      dv
    } = cleanAndSplitRUN(run);
    let formattedRUN = '';
    while (numRUN.length > 3) {
      formattedRUN = '.' + numRUN.slice(numRUN.length - 3) + formattedRUN;
      numRUN = numRUN.slice(0, numRUN.length - 3);
    }
    formattedRUN = numRUN + formattedRUN;
    return dv ? `${formattedRUN}-${dv}` : formattedRUN;
  }

  function RUNInput(props) {
    const {
      value: externalValue,
      handleChangeValue,
      ...DOMProps
    } = props;
    const [ctrlDown, setCtrlDown] = React.useState(false);
    const [localValue, setLocalValue] = React.useState(externalValue);
    const handleInput = event => {
      const run = cleanRUN(event.target.value);
      setLocalValue(run);
      if (handleChangeValue) {
        handleChangeValue(run);
      }
    };
    const handleKeyDown = event => {
      const keyFilter = /[\dK]/;
      if (isCtrlOrCmdKey(event)) {
        setCtrlDown(true);
      }
      if (!(keyFilter.test(event.key.toUpperCase()) || isControlKey(event) || ctrlDown && isEditKey(event))) {
        event.preventDefault();
      }
    };
    const handleKeyUp = event => {
      if (isCtrlOrCmdKey(event)) {
        setCtrlDown(false);
      }
    };
    return /*#__PURE__*/React.createElement("input", _extends({}, DOMProps, {
      type: "text",
      maxLength: "12",
      value: formatRUN(localValue),
      onInput: handleInput,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp
    }));
  }

  exports.RUNInput = RUNInput;
  exports.checkRUN = checkRUN;
  exports.cleanRUN = cleanRUN;
  exports.formatRUN = formatRUN;

}));
//# sourceMappingURL=react-run-input.js.map
