import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list-element',
  standalone: false,
  templateUrl: './customer-list-element.component.html',
  styleUrl: './customer-list-element.component.scss'
})
export class CustomerListElementComponent {

  @Input()
  customer: Customer = new Customer();

  @Output()
  deletedCustomerEvent = new EventEmitter<Customer>();

  onDeletedCustomer(customer: Customer){
    this.deletedCustomerEvent.emit(customer);
  }
}
