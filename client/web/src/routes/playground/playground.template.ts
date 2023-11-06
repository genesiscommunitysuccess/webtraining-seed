import {html, ref, repeat, when} from '@microsoft/fast-element';
import {Playground} from './playground';
import {playgroundStyles} from './playground.styles';
import {sync} from '@genesislcap/foundation-utils'
import {DEFAULT_LAYOUT} from './pre-defined-layout';


export const myTemplate = html<Playground>`
    <h2>This is my first component</h2>

`;