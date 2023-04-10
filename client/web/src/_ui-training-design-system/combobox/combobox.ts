import { foundationCombobox } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationCombobox
);

export const alphaCombobox = () => foundationCombobox();

export { Combobox } from '@genesislcap/foundation-ui';

export const defaultComboboxConfig = defaultConfig;
export const alphaComboboxTemplate = template;
export const alphaComboboxStyles = styles;
export const alphaComboboxShadowOptions = shadowOptions;
