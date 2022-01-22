import { LightningElement } from 'lwc';

export default class HelloConditionalRenderning extends LightningElement {
    isVisible = false

    handleClick(){
        this.isVisible=true
    }
}