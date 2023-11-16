import {html} from '@microsoft/fast-element';
import {Users} from '@genesislcap/foundation-entity-management';
import {User} from './user';

Users;

export const userTemplate = html<User>`
    <user-management></user-management>
`;
