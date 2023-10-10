import {html} from '@microsoft/fast-element';
import {Playground} from './playground';
import {playgroundStyles} from './playground.styles';
import {sync} from '@genesislcap/foundation-utils';


export const myTemplate = html<Playground>`
    <h2>This is my first component</h2>

    <!-- text-field / text-area / number-field -->

    <zero-text-field>Text_field</zero-text-field>
    <zero-text-area>Text_Area</zero-text-area>
    <zero-number-field>Number_field</zero-number-field>


    <!-- Read only component -->

    <zero-text-field readonly>Read Only</zero-text-field>

    <!-- Placeholder component -->

    <zero-text-field placeholder="This is a placeholder">Read Only</zero-text-field>


    <!-- @change event -->

    <zero-text-field :value=${(sync(x => x.text_value))} @change=${(x) => console.log(x.text_value)}>Insert your name</zero-text-field>

`;