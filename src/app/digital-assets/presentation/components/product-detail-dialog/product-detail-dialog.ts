import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { Product } from '../../../domain/model/product.entity';

@Component({
  selector: 'app-product-detail-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslatePipe],
  templateUrl: './product-detail-dialog.html',
  styleUrl: './product-detail-dialog.css'
})
export class ProductDetailDialogComponent {
  data = inject<{ product: Product }>(MAT_DIALOG_DATA);
}
