import { foundationButton } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

const { defaultConfig, shadowOptions, styles, template } = getExports(foundationButton);

export const alphaButton = () => foundationButton();

export { Button } from '@genesislcap/foundation-ui';

export const defaultButtonConfig = defaultConfig;
export const alphaButtonTemplate = template;
export const alphaButtonStyles = styles;
export const alphaButtonShadowOptions = shadowOptions;
