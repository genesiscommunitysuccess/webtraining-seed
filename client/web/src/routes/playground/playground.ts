import {customElement, FASTElement} from '@microsoft/fast-element'
import {myTemplate as template} from './playground.template'
import {playgroundStyles as styles} from './playground.styles'

@customElement({
    name: 'playground-route',
    template,
    styles
})

export class Playground extends FASTElement { }