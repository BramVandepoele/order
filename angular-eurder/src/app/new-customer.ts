import {Address} from "./address";
import {Email} from "./email";
import {Phone} from "./phone";

export class NewCustomer {
    email:Email
    address: Address;
    firstname: string;
    lastname: string;
    phoneNumber: Phone;


    constructor(address:Address, email:Email, domain: string, localPart: string, firstname: string, lastname: string, phoneNumber:Phone) {
        this.address = address;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phoneNumber = phoneNumber;
    }


}
