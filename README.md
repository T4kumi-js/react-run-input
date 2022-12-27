# React RUN Input

A React RUN input component for Chilean people

## Install

Install this package using: `npm install t4kumi.js/react-run-input`

## Usage

```jsx
import { RUNInput } from '@t4kumi.js/react-run-input';
import { checkRUN, cleanRUN, formatRUN } from '@t4kumi.js/react-run-input';
import React, { useState } from 'react';

export default () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <RUNInput {/* some DOM properties */}
                value={value}
                handleChangeValue={setValue}
            />
        </div>
    );
};
```
