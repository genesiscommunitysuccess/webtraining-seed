import { foundationListboxOption } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationListboxOption
);

export const alphaListboxOption = () => foundationListboxOption();

export { ListboxOption } from '@genesislcap/foundation-ui';

export const defaultListboxOptionConfig = defaultConfig;
export const alphaListboxOptionTemplate = template;
export const alphaListboxOptionStyles = styles;
export const alphaListboxOptionShadowOptions = shadowOptions;
