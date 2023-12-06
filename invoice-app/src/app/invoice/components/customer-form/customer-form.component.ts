import { Component } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {

  customer: Customer = new Customer();

  onSubmitForm(){
    console.log(this.customer);
  }
}
