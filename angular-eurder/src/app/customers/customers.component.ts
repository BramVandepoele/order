import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Customer} from "../customer";
import { CustomerService} from "../customer.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] | undefined;

  constructor(private location: Location, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  goBack(): void {
    this.location.back();
  }

  private getCustomers() {
    this.customerService.getAllCustomers().subscribe(customers => this.customers = customers);
  }
}
