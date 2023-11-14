import { foundationToolbar } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationToolbar
);

export const alphaToolbar = () => foundationToolbar();

export { Toolbar } from '@genesislcap/foundation-ui';

export const defaultToolbarConfig = defaultConfig;
export const alphaToolbarTemplate = template;
export const alphaToolbarStyles = styles;
export const alphaToolbarShadowOptions = shadowOptions;
