import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Email} from "../email";
import {Address} from "../address";
import {Phone} from "../phone";
import {NewCustomer} from "../new-customer";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(
      private location: Location,
      private customerService:CustomerService
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  createCustomer(firstName: string, lastName: string, email: string, emailDomain: string, countryCode: string, phoneNumber: string, street: string, housenumber: string, postalcode: string, country: string) {
    let emailAddress:Email = new Email(emailDomain, email);
    let address: Address = new Address(country, housenumber, postalcode, street);
    let phone: Phone = new Phone(countryCode, phoneNumber);
    let newCustomer:NewCustomer = new NewCustomer(address, emailAddress, emailAddress.domain, emailAddress.localPart, firstName, lastName, phone);
    console.log(newCustomer);
    this.customerService.addCustomer(newCustomer).subscribe();
    // @ts-ignore
    document.getElementById("success").style.visibility="visible";

    this.resetForm();
  }

  private resetForm() {
    // @ts-ignore
    document.getElementById("firstName").value='';
    // @ts-ignore
    document.getElementById("lastName").value='';
    // @ts-ignore
    document.getElementById("email").value='';
    // @ts-ignore
    document.getElementById("emailDomain").value='';
    // @ts-ignore
    document.getElementById("phone").value='';
    // @ts-ignore
    document.getElementById("street").value='';
    // @ts-ignore
    document.getElementById("houseNumber").value='';
    // @ts-ignore
    document.getElementById("country").value='';
    // @ts-ignore
    document.getElementById("phoneNumber").value='';
    // @ts-ignore
    document.getElementById("postalcode").value='';

  }
}
