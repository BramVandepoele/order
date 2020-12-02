import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsComponent} from "./items/items.component";
import {CreateItemComponent} from "./create-item/create-item.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {CustomersComponent} from "./customers/customers.component";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";
import {CustomerEditComponent} from "./customer-detail-edit/customer-edit.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";

const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'items', component: ItemsComponent },
  {path: 'create-item', component: CreateItemComponent},
  {path: 'item-detail/:id', component: ItemDetailComponent},
  {path: 'customer-detail/:id', component: CustomerDetailComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'customers', component: CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
