import { foundationBreadcrumb } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationBreadcrumb
);

export const alphaBreadcrumb = () => foundationBreadcrumb();

export { Breadcrumb } from '@genesislcap/foundation-ui';

export const defaultBreadcrumbConfig = defaultConfig;
export const alphaBreadcrumbTemplate = template;
export const alphaBreadcrumbStyles = styles;
export const alphaBreadcrumbShadowOptions = shadowOptions;
