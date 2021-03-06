import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemsComponent} from './items/items.component';
import {HttpClientModule} from "@angular/common/http";
import {SearchItemComponent} from './search-item/search-item.component';
import {CreateItemComponent} from './create-item/create-item.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {FormsModule} from "@angular/forms";
import {CustomersComponent} from './customers/customers.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {CustomerEditComponent} from "./customer-detail-edit/customer-edit.component";
import { CreateCustomerComponent } from './create-customer/create-customer.component';

@NgModule({
    declarations: [
        AppComponent,
        ItemsComponent,
        SearchItemComponent,
        CreateItemComponent,
        ItemDetailComponent,
        CustomersComponent,
        CustomerDetailComponent,
        CustomerEditComponent,
        CreateCustomerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
