import { foundationSwitch } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationSwitch
);

export const alphaSwitch = () => foundationSwitch();

export { Switch } from '@genesislcap/foundation-ui';

export const defaultSwitchConfig = defaultConfig;
export const alphaSwitchTemplate = template;
export const alphaSwitchStyles = styles;
export const alphaSwitchShadowOptions = shadowOptions;
