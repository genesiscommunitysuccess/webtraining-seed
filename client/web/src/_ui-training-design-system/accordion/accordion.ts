import { fastAccordion } from '@microsoft/fast-components';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  fastAccordion
);

export const alphaAccordion = () => fastAccordion();

export { Accordion } from '@microsoft/fast-components';

export const defaultAccordionConfig = defaultConfig;
export const alphaAccordionTemplate = template;
export const alphaAccordionStyles = styles;
export const alphaAccordionShadowOptions = shadowOptions;
