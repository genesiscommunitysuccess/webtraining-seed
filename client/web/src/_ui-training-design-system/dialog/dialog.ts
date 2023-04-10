import { foundationDialog } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationDialog
);

export const alphaDialog = () => foundationDialog();

export { Dialog } from '@genesislcap/foundation-ui';

export const defaultDialogConfig = defaultConfig;
export const alphaDialogTemplate = template;
export const alphaDialogStyles = styles;
export const alphaDialogShadowOptions = shadowOptions;
