# React RUN Input

A React RUN input component for Chilean people

## Install

Install this package using: `npm install @t4kumi_js/react-run-input`

## Usage

```jsx
import React, { useState } from 'react';

// To import the input component
import { RUNInput } from '@t4kumi_js/react-run-input';

// To import a validator and data treatment functions
import { checkRUN, cleanRUN, formatRUN } from '@t4kumi_js/react-run-input';

export default () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <RUNInput
        value={value}
        onChange={setValue}
        /* some DOM properties (e.g. className, disabled, required, etc.) */
      />
    </div>
  );
};
```
