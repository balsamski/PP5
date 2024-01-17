import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = 'http://pp5.balsamski.pl/index.php/api/123/';
  customersList: Customer[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  addCustomer(customer: Customer): Observable<Customer[]> {
    return this.httpClient.post<Customer[]>(
      this.url + 'customers',
      customer
    );
  }

  getCustomers():  Observable<Customer[]>	 {
    return this.httpClient.get<Customer[]>(
      this.url + 'customers'
    ).pipe(
      map(
        (customers: Customer[]) => customers.map(customer => new Customer().deserialize(customer))
      )
    )
  }
  
  removeCustomer(removedCustomer: Customer) {
    this.customersList = this.customersList.filter(function (customer: Customer) {
      return customer.nip !== removedCustomer.nip;
    });
  }
}
