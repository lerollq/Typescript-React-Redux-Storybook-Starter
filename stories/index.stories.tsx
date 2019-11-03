import React from 'react';
import  Button from "../src/components/Button"

export default { title: 'Button' }

export const withText = () => <Button>Helloo Button</Button>;

export const withEmoji = () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);