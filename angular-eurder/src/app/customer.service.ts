import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Customer} from "./customer";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {NewCustomer} from "./new-customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerURL = 'http://localhost:9000/customers';

  constructor(private customerHttp: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.customerHttp.get<Customer[]>(this.customerURL);
  }

  getCustomerById(id: string): Observable<Customer> {
    const url = `${this.customerURL}/${id}`;
    return this.customerHttp.get<Customer>(url).pipe(
        tap(_=> this.log(`fetched customer id=${id}`)),
        catchError(this.handleError<Customer>(`getCustomer id=${id}`))
    )
  }

  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    updateCustomer(updatedCustomer: Customer): Observable<Customer> {
        return this.customerHttp.put<Customer>(this.customerURL+"/"+updatedCustomer.id, updatedCustomer);
    }

  addCustomer(newCustomer: NewCustomer): Observable<NewCustomer> {
    return this.customerHttp.post<NewCustomer>(this.customerURL, newCustomer);
  }
}
