import { foundationFilter } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationFilter
);

export const alphaFilter = () => foundationFilter();

export { Filter } from '@genesislcap/foundation-ui';

export const defaultFilterConfig = defaultConfig;
export const alphaFilterTemplate = template;
export const alphaFilterStyles = styles;
export const alphaFilterShadowOptions = shadowOptions;
