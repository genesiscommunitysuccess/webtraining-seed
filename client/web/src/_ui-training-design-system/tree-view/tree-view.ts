import { foundationTreeView } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationTreeView
);

export const alphaTreeView = () => foundationTreeView();

export { TreeView } from '@genesislcap/foundation-ui';

export const defaultTreeViewConfig = defaultConfig;
export const alphaTreeViewTemplate = template;
export const alphaTreeViewStyles = styles;
export const alphaTreeViewShadowOptions = shadowOptions;
