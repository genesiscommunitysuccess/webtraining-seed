import { foundationDataGridCell } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationDataGridCell
);

export const alphaDataGridCell = () => foundationDataGridCell();

export { DataGridCell } from '@genesislcap/foundation-ui';

export const defaultDataGridCellConfig = defaultConfig;
export const alphaDataGridCellTemplate = template;
export const alphaDataGridCellStyles = styles;
export const alphaDataGridCellShadowOptions = shadowOptions;
