import { fastHorizontalScroll } from '@microsoft/fast-components';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  fastHorizontalScroll
);

export const alphaHorizontalScroll = () => fastHorizontalScroll();

export { HorizontalScroll } from '@microsoft/fast-components';

export const defaultHorizontalScrollConfig = defaultConfig;
export const alphaHorizontalScrollTemplate = template;
export const alphaHorizontalScrollStyles = styles;
export const alphaHorizontalScrollShadowOptions = shadowOptions;
