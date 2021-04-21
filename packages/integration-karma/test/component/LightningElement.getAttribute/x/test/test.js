import { LightningElement, api } from 'lwc';

export default class Test extends LightningElement {
    @api
    getComponentAttribute(...args) {
        return this.getAttribute(...args);
    }
}
