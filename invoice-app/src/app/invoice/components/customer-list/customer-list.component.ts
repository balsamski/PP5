import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit, OnDestroy{

    customersList: Customer[] = [];

    constructor(
      private customerService: CustomerService
    ) { }

    ngOnInit(){
      this.loadCustomers();
    }
    ngOnDestroy(){
      console.log('zamykam komponent')
    }

    deletedCustomer(customer: Customer) {
      alert('kasujemy klienta o NIPie' + customer.nip);
      this.customerService.removeCustomer(customer).subscribe(() => {
        this.loadCustomers();
      })
    }

    loadCustomers(){
      this.customerService.getCustomers()
        .subscribe((data: Customer[]) =>{
          this.customersList = data as Customer[];
          console.log(data);
      })
    }
}
