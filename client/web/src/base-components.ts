import { baseComponents as allZeroComponents } from '@genesislcap/foundation-zero'
import type { Container } from '@microsoft/fast-foundation';
export const baseComponents = {
    ...allZeroComponents,
    register(container?: Container, ...rest: any[]) {
        if (!container) {
            // preserve backward compatibility with code that loops through
            // the values of this object and calls them as funcs with no args
            return;
        }

        for (const key in this) {
            if (key === 'register') {
                continue;
            }

            this[key]().register(container, ...rest);
        }
    },
}