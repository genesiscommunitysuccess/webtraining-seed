import { foundationProgress } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationProgress
);

export const alphaProgress = () => foundationProgress();

export { Progress } from '@genesislcap/foundation-ui';

export const defaultProgressConfig = defaultConfig;
export const alphaProgressTemplate = template;
export const alphaProgressStyles = styles;
export const alphaProgressShadowOptions = shadowOptions;
