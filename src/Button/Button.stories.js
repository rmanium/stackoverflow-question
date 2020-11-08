import React from 'react';
import Button from './Button';

export default {
  title: 'Elements/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  text: 'This is a button!',
};
