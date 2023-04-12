import { foundationCard } from '@genesislcap/foundation-ui';
import { getExports } from '../utils';

// eslint-disable-next-line prettier/prettier
const { defaultConfig, shadowOptions, styles, template } = getExports(
  foundationCard
);

export const alphaCard = () => foundationCard();

export { Card } from '@genesislcap/foundation-ui';

export const defaultCardConfig = defaultConfig;
export const alphaCardTemplate = template;
export const alphaCardStyles = styles;
export const alphaCardShadowOptions = shadowOptions;
