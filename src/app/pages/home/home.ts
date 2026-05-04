import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  productos: Product[] = [];
  constructor(private productsService: Products) {
    this.productos = this.productsService.getProducts();
  }
}
