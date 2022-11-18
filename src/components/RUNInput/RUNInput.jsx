import React, { useState } from 'react';
import {
    isControlKey,
    isCtrlOrCmdKey,
    isEditKey,
    cleanRUN,
    formatRUN
} from '../../utils';

function RUNInput(props) {
    const { value: extValue, handleChangeValue, ...DOMProps } = props;
    const [ctrlDown, setCtrlDown] = useState(false);
    const [localValue, setLocalValue] = useState('' || extValue);

    const handleInput = (event) => {
        const run = cleanRUN(event.target.value);

        if (handleChangeValue) {
            handleChangeValue(run);
        } else {
            setLocalValue(run);
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
            value={formatRUN(localValue || extValue)}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
        />
    );
}

export default RUNInput;
