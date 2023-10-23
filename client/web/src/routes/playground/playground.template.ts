import {html, repeat, ref} from '@microsoft/fast-element';
import {Playground} from './playground';
import {playgroundStyles} from './playground.styles';
import {sync} from '@genesislcap/foundation-utils'


export const myTemplate = html<Playground>`
    <h2>This is my first component</h2>

    <!--Create tabs-->
    <zero-text-field readonly :value=${sync((x) => x.tabId)}>Active Tab</zero-text-field>

    <zero-tabs ${ref('localTabs')} @change=${(x) => x.changeValues()} activeid="Tab3">
        <zero-tab id="Tab1">Tab 1</zero-tab>
        <zero-tab id="Tab2">Tab 2</zero-tab>
        <zero-tab id="Tab3">Tab 3</zero-tab>

        <zero-tab-panel id="Tab1">
            This is the Tab 1
        </zero-tab-panel>
        <zero-tab-panel id="Tab2">
            This is the Tab 2
        </zero-tab-panel>
        <zero-tab-panel id="Tab3">
            This is the Tab 3
        </zero-tab-panel>
    </zero-tabs>
`;