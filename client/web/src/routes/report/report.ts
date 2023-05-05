import {customElement, FASTElement } from '@microsoft/fast-element';
import {ReportTemplate as template} from './report.template';
import {ReportStyles as styles} from './report.styles';

const name = 'report-route';

@customElement({
  name,
  template,
  styles,
})

export class Report extends FASTElement {
    constructor() {
        super();
    }
}