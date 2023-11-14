import { foundationTooltip } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationTooltip
);

export const alphaTooltip = () => foundationTooltip();

export { Tooltip } from '@genesislcap/foundation-ui';

export const defaultTooltipConfig = defaultConfig;
export const alphaTooltipTemplate = template;
export const alphaTooltipStyles = styles;
export const alphaTooltipShadowOptions = shadowOptions;
