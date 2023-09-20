import {customElement, FASTElement} from '@microsoft/fast-element'
import {myTemplate as template} from './playground.template'
import {playgroundStyles as styles} from './playground.styles'

const name = 'playground-route'

@customElement({
    name,
    template,
    styles
})

export class playground extends FASTElement { }
