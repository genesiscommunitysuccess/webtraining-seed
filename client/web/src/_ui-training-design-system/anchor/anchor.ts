import { foundationAnchor } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationAnchor
);

export const alphaAnchor = () => foundationAnchor();

export { Anchor } from '@genesislcap/foundation-ui';

export const defaultAnchorConfig = defaultConfig;
export const alphaAnchorTemplate = template;
export const alphaAnchorStyles = styles;
export const alphaAnchorShadowOptions = shadowOptions;
