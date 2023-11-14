import { foundationDisclosure } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationDisclosure
);

export const alphaDisclosure = () => foundationDisclosure();

export { Disclosure } from '@genesislcap/foundation-ui';

export const defaultDisclosureConfig = defaultConfig;
export const alphaDisclosureTemplate = template;
export const alphaDisclosureStyles = styles;
export const alphaDisclosureShadowOptions = shadowOptions;
