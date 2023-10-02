import {html, ref} from '@microsoft/fast-element';
import {Playground} from './playground';
import {playgroundStyles} from './playground.styles';
import {sync} from "@genesislcap/foundation-utils"


export const myTemplate = html<Playground>`
    <h2>This is my first component</h2>
    <fieldset>
      <legend>Fruits</legend>
      <zero-checkbox @change=${(x) => (x.change(x.apple))}
                     :checked="${sync((x) => x.apple, 'boolean')}">Apple</zero-checkbox>
    </fieldset>

    <zero-combobox autocomplete="both" placeholder="This s a combobox" value=${sync((x) => x.comboValue)} @change=${(x) => x.display1(x.comboValue)} >
      <zero-option>Christopher Eccleston</zero-option>
      <zero-option>David Tennant</zero-option>
      <zero-option>Matt Smith</zero-option>
      <zero-option>Peter Capaldi</zero-option>
      <zero-option>Jodie Whittaker</zero-option>
    </zero-combobox>


    <zero-button @click=${(x) => x.display()}>button</zero-button>
`;