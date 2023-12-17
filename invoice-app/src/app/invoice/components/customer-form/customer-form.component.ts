import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {

  customer: Customer = new Customer();

  constructor(
    private customerService: CustomerService
  ) { }

  onSubmitForm(){
    console.log(this.customer);
    let result  = this.customerService.addCustomer(this.customer);
    console.log(result);
  }
}
