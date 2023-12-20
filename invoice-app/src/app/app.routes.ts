import { Routes } from '@angular/router';
import { ProductFormComponent } from './product/components/product-form/product-form.component';

export const routes: Routes = [
    {
      path: 'invoice',
      loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
    },  
    { path: 'product-form', component: ProductFormComponent },
  ];
