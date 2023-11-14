import { foundationUrlInput } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationUrlInput
);

export const alphaUrlInput = () => foundationUrlInput();

export { UrlInput } from '@genesislcap/foundation-ui';

export const defaultUrlInputConfig = defaultConfig;
export const alphaUrlInputTemplate = template;
export const alphaUrlInputStyles = styles;
export const alphaUrlInputShadowOptions = shadowOptions;
