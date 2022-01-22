import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName="Zero to Hero"
    title="lwc application"

    changeHandler(event){
        this.title = event.target.value
    }

    address={
        city:"London",
        postCode:"TW3 3AA",
        country:"United Kingdom"
    }

    trackHandler(event){
        this.address={...this.address,"city":event.target.value}
    }
}