import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslatePipe } from '@ngx-translate/core';
import { ProductCatalogueStore } from '../../../application/product-catalogue-store';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    TranslatePipe,
    ProductCardComponent
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {
  store = inject(ProductCatalogueStore);

  ngOnInit(): void {
    this.store.loadProducts();
  }

  onFilterChange(value: string): void {
    this.store.setSearchTerm(value);
  }
}
