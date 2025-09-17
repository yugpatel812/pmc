import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product as ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Product {
  private products: ProductModel[] = [];
  private subj = new BehaviorSubject<ProductModel[]>(this.products);
  products$ = this.subj.asObservable();

  add(product: ProductModel) {
    this.products.push(product);
    // emit a copy
    this.subj.next([...this.products]);
  }

  getAll(): Observable<ProductModel[]> {
    return this.products$;
  }
}
