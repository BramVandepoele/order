import {Address} from "./address";
import {Email} from "./email";
import {Phone} from "./phone";

export class Customer {
    email:Email
    address: Address;
    firstname: string;
    id: string;
    lastname: string;
    phoneNumber: Phone;


    constructor(address:Address, email:Email, domain: string, localPart: string, firstname: string, id: string, lastname: string, phoneNumber:Phone) {
        this.address = address;
        this.email = email;
        this.firstname = firstname;
        this.id = id;
        this.lastname = lastname;
        this.phoneNumber = phoneNumber;
    }


}
