import { Routes } from '@angular/router';
import { CustomerFormComponent } from './invoice/components/customer-form/customer-form.component';
import { ProductFormComponent } from './product/components/product-form/product-form.component';

export const routes: Routes = [
    { path: 'customer-form', component: CustomerFormComponent },
    { path: 'product-form', component: ProductFormComponent },
  ];
