import { fastPicker } from '@microsoft/fast-components';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  fastPicker
);

export const alphaPicker = () => fastPicker();

export { Picker } from '@microsoft/fast-components';

export const defaultPickerConfig = defaultConfig;
export const alphaPickerTemplate = template;
export const alphaPickerStyles = styles;
export const alphaPickerShadowOptions = shadowOptions;
