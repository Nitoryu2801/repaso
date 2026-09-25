import {Injectable, inject} from '@angular/core';
import {HttpClient, HttpStatusCode} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {ProductSearchResponseResource} from './product-resource';
import {ProductAssembler} from './product-assembler';
import {Product} from '../domain/model/product.entity';

@Injectable({providedIn: 'root'})
export class ProductsApiService {
  private http = inject(HttpClient);
  searchProducts(query: string): Observable<Product[]> {
    const url = `${environment.apiUrl}/products/search?q=${query}&limit=12`;

    return this.http.get<ProductSearchResponseResource>(url).pipe(map(response => ProductAssembler.toEntities(response.products)));
  }
}
