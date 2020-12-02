import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";
import {Item} from "../item";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer: Customer | undefined;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private customerService: CustomerService
  ) { }

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
}
