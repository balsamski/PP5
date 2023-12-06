import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomersRoutingModule } from './invoice-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponent
  ],
  exports:[
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class InvoiceModule { }
