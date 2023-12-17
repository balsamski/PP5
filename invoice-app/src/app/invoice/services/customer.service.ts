import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customersList: Customer[] = [];

  constructor() { }

  addCustomer(customer: Customer):Customer[]{
    this.customersList.push(customer);
    return this.customersList;
  }
}
