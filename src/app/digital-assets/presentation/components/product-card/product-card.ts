import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { Product } from '../../../domain/model/product.entity';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TranslatePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  private dialog = inject(MatDialog);

  openDetailDialog(): void {
    this.dialog.open(ProductDetailDialogComponent, {
      data: { product: this.product },
      width: '400px'
    });
  }
}
