import { foundationSegmentedControl } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationSegmentedControl
);

export const alphaSegmentedControl = () => foundationSegmentedControl();

export { SegmentedControl } from '@genesislcap/foundation-ui';

export const defaultSegmentedControlConfig = defaultConfig;
export const alphaSegmentedControlTemplate = template;
export const alphaSegmentedControlStyles = styles;
export const alphaSegmentedControlShadowOptions = shadowOptions;
