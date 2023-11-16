import {html, ref, repeat, when} from '@microsoft/fast-element';
import {Playground} from './playground';
import {playgroundStyles} from './playground.styles';
import {sync} from '@genesislcap/foundation-utils'


export const myTemplate = html<Playground>`
    <h2>This is my first component</h2>

    <zero-text-field></zero-text-field>

    <ui-training-design-system-provider>
        <ui-training-text-field></ui-training-text-field>
    </ui-training-design-system-provider>
`;