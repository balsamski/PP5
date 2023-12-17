import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit{

    customersList: Customer[] = [];


    constructor(
      private router: Router,
      private customerService: CustomerService
    ) { }

    ngOnInit(){
      this.customersList = this.customerService.getCustomers();
    }
}
