import { fastSearch } from '@microsoft/fast-components';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  fastSearch
);

export const alphaSearch = () => fastSearch();

export { Search } from '@microsoft/fast-components';

export const defaultSearchConfig = defaultConfig;
export const alphaSearchTemplate = template;
export const alphaSearchStyles = styles;
export const alphaSearchShadowOptions = shadowOptions;
