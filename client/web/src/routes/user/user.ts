import {customElement, FASTElement} from '@microsoft/fast-element';
import {userTemplate as template} from './user.template';
import {userStyles as styles} from './user.styles';


const name = 'user-route'


@customElement({
    name,
    template,
    styles
})

export class User extends FASTElement {

}