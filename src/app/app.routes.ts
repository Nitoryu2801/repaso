import { Routes } from '@angular/router';
import { ProductListComponent } from './digital-assets/presentation/components/product-list/product-list';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: '**', redirectTo: 'products' }
];
