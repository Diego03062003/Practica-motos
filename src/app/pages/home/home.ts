import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';

@Component({
  selector: 'app-home',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  productos: Product[] = [];
  constructor(private productsService: Products) {
    this.productos = this.productsService.getProducts();
  }
}
