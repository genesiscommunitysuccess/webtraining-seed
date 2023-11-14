import { foundationToast } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationToast
);

export const alphaToast = () => foundationToast();

export { Toast } from '@genesislcap/foundation-ui';

export const defaultToastConfig = defaultConfig;
export const alphaToastTemplate = template;
export const alphaToastStyles = styles;
export const alphaToastShadowOptions = shadowOptions;
