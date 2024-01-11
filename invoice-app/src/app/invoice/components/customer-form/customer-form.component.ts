import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {

  customer: Customer = new Customer();

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) { }

  onSubmitForm(form: NgForm){
    console.log(form.form.valid)
    console.log(this.customer);
    let result  = this.customerService.addCustomer(this.customer);
    console.log(result);
    // this.router.navigate(['/invoice/customer/list']);
  }
}
