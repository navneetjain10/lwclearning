import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Audi","BMW","Jaguar"]

    ceoList = [
        {
            id:1,
            company:"HCL",
            name:"Roshni"
        },
        {
            id:2,
            company:"Facebook",
            name:"Mark"
        },
        {
            id:3,
            company:"Google",
            name:"Sundar"
        }
    ]
}