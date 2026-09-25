import{ Product} from '../domain/model/product.entity';
import {ProductResource} from './product-resource';

export class ProductAssembler {
  static toEntity(resource: ProductResource): Product {
    return new Product(
      resource.id ?? 0,
      resource.title ?? "",
      resource.description ?? "",
      resource.category ?? "",
      resource.price ?? 0,
      resource.rating ?? 0,
      resource.thumbnail ?? "",
      resource.brand ?? "Sin Marca",
      resource.stock ?? 0,
    );
  }
  static  toEntities(resources: ProductResource[ ]): Product[ ]{
    if (!resources) return [];
    return resources.map(res=> this.toEntity(res));
  }
}
