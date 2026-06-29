import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useEffect, useState } from 'react';
import { RUNInput } from '../components';

type Args = {
  value?: string;
  placeholder?: string;
};

const meta: Meta<typeof RUNInput> = {
  title: 'RUN Input/Input',
  component: RUNInput,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' }
  }
};

const Template = (args: Args) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setValue(args.value ?? '');
  }, [args.value]);

  return (
    <RUNInput
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

export default meta;

export const Default: StoryObj<Args> = {
  render: Template,
  args: {
    value: '',
    placeholder: 'Enter RUN...'
  }
};
