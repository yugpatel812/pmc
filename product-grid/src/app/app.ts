import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductForm as ProductFormComponent } from './components/product-form/product-form';
import { GenericGrid as GenericGridComponent, GridColumn } from './components/generic-grid/generic-grid';
import { Product as ProductService} from './services/product';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductFormComponent, GenericGridComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products$: Observable<any[]>;
  columns: GridColumn[] = [
    { key: 'sku', label: 'SKU' },
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description' },
    { key: 'colour', label: 'Colour' },
    { key: 'price', label: 'Price' },
    { key: 'type', label: 'Type' }
  ];

  constructor(private ps: ProductService) {
    this.products$ = this.ps.getAll();
  }

  onRow(row: any) {
    // simple click handler: show in console
    console.log('row clicked', row);
  }
}
