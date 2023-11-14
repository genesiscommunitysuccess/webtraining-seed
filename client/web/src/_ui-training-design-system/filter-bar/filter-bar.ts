import { foundationFilterBar } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationFilterBar
);

export const alphaFilterBar = () => foundationFilterBar();

export { FilterBar } from '@genesislcap/foundation-ui';

export const defaultFilterBarConfig = defaultConfig;
export const alphaFilterBarTemplate = template;
export const alphaFilterBarStyles = styles;
export const alphaFilterBarShadowOptions = shadowOptions;
