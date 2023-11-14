import { foundationDataGridRow } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationDataGridRow
);

export const alphaDataGridRow = () => foundationDataGridRow();

export { DataGridRow } from '@genesislcap/foundation-ui';

export const defaultDataGridRowConfig = defaultConfig;
export const alphaDataGridRowTemplate = template;
export const alphaDataGridRowStyles = styles;
export const alphaDataGridRowShadowOptions = shadowOptions;
