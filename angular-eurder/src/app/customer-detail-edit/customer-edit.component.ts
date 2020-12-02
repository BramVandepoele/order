import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";
import {Item} from "../item";
import {ActivatedRoute} from "@angular/router";
import {Email} from "../email";
import {Address} from "../address";
import {Phone} from "../phone";

@Component({
    selector: 'app-customer-detail',
    templateUrl: './customer-edit.component.html',
    styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

    @Input() customer: Customer | undefined;

    constructor(private location: Location,
                private route: ActivatedRoute,
                private customerService: CustomerService
    ) {
    }

    ngOnInit(): void {
        this.getCustomer();
    }

    goBack(): void {
        this.location.back();
    }

    private getCustomer() {
        const id = this.route.snapshot.paramMap.get('id')!;
        this.customerService.getCustomerById(id).subscribe(customer => this.customer = customer);
    }

    updateCustomer(id: string, firstName: string, lastName: string, email: string, emailDomain: string, countryCode: string, phoneNumber: string, street: string, housenumber: string, postalcode: string, country: string) {
        let emailAddress: Email = new Email(emailDomain, email);
        let address: Address = new Address(country, housenumber, postalcode, street);
        let phone: Phone = new Phone(countryCode, phoneNumber);
        let updatedCustomer: Customer = new Customer(address, emailAddress, emailAddress.domain, emailAddress.localPart, firstName, id, lastName, phone);
        this.customerService.updateCustomer(updatedCustomer).subscribe();
        // @ts-ignore
        document.getElementById("success").style.visibility = "visible";
    }
}
