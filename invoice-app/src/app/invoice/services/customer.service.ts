import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = 'http://pp5.balsamski.pl/index.php/api/123/customers/';
  customersList: Customer[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  addCustomer(customer: Customer): Observable<Customer[]> {
    return this.httpClient.post<Customer[]>(
      this.url,
      customer
    );
  }

  getCustomers():  Observable<Customer[]>	 {
    return this.httpClient.get<Customer[]>(
      this.url
    ).pipe(
      map(
        (customers: Customer[]) => customers.map(customer => new Customer().deserialize(customer))
      )
    )
  }
  
  removeCustomer(removedCustomer: Customer) {
    const headers = new HttpHeaders({
      'Authorization': 'haslo_haslo'
    });

    return this.httpClient.delete<Customer[]>(
      this.url + removedCustomer.nip, { headers }
    );
  }
}
