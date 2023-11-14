import { foundationModal } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationModal
);

export const alphaModal = () => foundationModal();

export { Modal } from '@genesislcap/foundation-ui';

export const defaultModalConfig = defaultConfig;
export const alphaModalTemplate = template;
export const alphaModalStyles = styles;
export const alphaModalShadowOptions = shadowOptions;
