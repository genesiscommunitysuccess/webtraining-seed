import { allComponents, provideFASTDesignSystem } from '@microsoft/fast-components';
import { EntityManagement } from '@genesislcap/foundation-entity-management';
import { FASTRouter } from '@microsoft/fast-router';
import { zeroGridComponents } from '@genesislcap/foundation-zero-grid-pro';
import { provideDesignSystem as provideBCDesignSystem } from '../provide-design-system';
import { baseComponents  as allBcComponents } from '../base-components';
import { logger } from '../utils';
import { zeroCard, zeroDesignSystemProvider, provideDesignSystem as provideZERODesignSystem, baseComponents as allZeroComponents } from '@genesislcap/foundation-zero';

EntityManagement;

provideFASTDesignSystem().register(allComponents);
provideBCDesignSystem().register(
  allBcComponents
);
provideZERODesignSystem().register(
  zeroDesignSystemProvider(),
  allZeroComponents
);

enum ResourceType {
  LOCAL = 'LOCAL',
  REMOTE = 'REMOTE',
}

/**
 * TODO: Think about sharing import functions across micro frontends.
 */
function loadZeroFallback() {
  return import(
    /* webpackMode: "lazy" */
    '@genesislcap/foundation-zero'
  );
}

/**
 * Granular
 */
async function loadZeroDesignSystem() {
  let type = ResourceType.REMOTE;
  try {
    // @ts-ignore
    return await import('foundationZero/ZeroDesignSystem');
  } catch (e) {
    type = ResourceType.LOCAL;
    return await loadZeroFallback();
  } finally {
    logger.debug(`Using '${type}' version of foundationZero/ZeroDesignSystem`);
  }
}

export type LoadRemotesOptions = {};

export async function loadRemotes() {
  const { provideDesignSystem, baseComponents } = await loadZeroDesignSystem();
  return {
    ZeroDesignSystem: provideDesignSystem().register(baseComponents, zeroGridComponents),
  };
}

FASTRouter;