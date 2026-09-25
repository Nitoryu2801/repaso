import {Injectable,inject,signal} from "@angular/core";
import{ProductsApiService} from "../infrastructure/products-api";
import {Product} from "../domain/model/product.entity"
@Injectable({
  providedIn: 'root'
})
export class ProductCatalogueStore {
  private apiService = inject(ProductsApiService);
  products = signal<Product[]>([]);
  loading= signal<boolean>(false);
  selectedTerm = signal<string>("phone");

  setSearchTerm(term:string):void{
    this.selectedTerm.set(term);
    this.loadProducts();
  }
  loadProducts():void{
    this.loading.set(true);
    this.apiService.searchProducts(this.selectedTerm()).subscribe({
      next:(data)  =>{
        this.products.set(data);
        this.loading.set(false);

      },
      error:(err)=>{
        console.error("Error al cargar productos:",err);
        this.loading.set(false);
      }
    })
  }

}
