import {html, ref, repeat, when} from '@microsoft/fast-element';
import {Playground} from './playground';
import {playgroundStyles} from './playground.styles';
import {sync} from '@genesislcap/foundation-utils'


export const myTemplate = html<Playground>`
    <h2>This is my first component</h2>
    <zero-button @click=${(x) => x.resetLayout()}>Reset</zero-button>
    <zero-layout ${ref('layout')} auto-save-key="training-layout-key">
        <zero-layout-region>
            <zero-layout-region type="horizontal">
                <zero-layout-region type="vertical">
                    <zero-layout-item title="Region 1">
                    </zero-layout-item>
                    <zero-layout-item title="Region 2">
                    </zero-layout-item>
                    <zero-layout-item title="Region 3">
                    </zero-layout-item>
                    <zero-layout-item title="Region 4">
                    </zero-layout-item>
                    <zero-layout-item title="Region 5">
                    </zero-layout-item>
                </zero-layout-region>
                <zero-layout-region type="vertical">
                    <zero-layout-item title="Region 6">
                    </zero-layout-item>
                </zero-layout-region>
                <zero-layout-region type="vertical">
                    <zero-layout-item title="Region 7">
                    </zero-layout-item>
                </zero-layout-region>
            </zero-layout-region>
        </zero-layout-region>
    </zero-layout>

`;