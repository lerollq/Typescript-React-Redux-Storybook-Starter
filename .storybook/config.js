import { configure } from '@storybook/react';
import "../src/assets/styles/index.scss";

configure(require.context('../stories', true, /\.stories\.tsx?$/), module)