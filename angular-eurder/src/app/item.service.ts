import { Injectable } from '@angular/core';
import { Item} from "./item";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemURL = 'http://localhost:9000/items';

  constructor(
      private itemHttp: HttpClient
  ) {
  }

  getAllItems(): Observable<Item[]> {
    return this.itemHttp.get<Item[]>(this.itemURL);
  }

  getItemById(id: string): Observable<Item> {
    const url = `${this.itemURL}/${id}`;
    return this.itemHttp.get<Item>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Item>(`getHero id=${id}`))
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
}


