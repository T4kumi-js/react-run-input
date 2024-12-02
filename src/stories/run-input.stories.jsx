import React, { useState } from 'react';
import { RUNInput } from '../components';

export default {
  title: 'RUN Input/Input',
  component: RUNInput
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <RUNInput
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Ingrese su RUN'
};
