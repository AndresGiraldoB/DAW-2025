import { Component } from '@angular/core';
import {Product} from "./../interfaces/product";

@Component({
  selector: 'products-page',
  imports: [],
  templateUrl: './products-page.html',
  styles: ``,
})
export class ProductsPage {
  title="Mi lista de Productos";
  //crear array vacio
  products:Product[] = [{
    id: 1,
    description: 'SSD hard drive',
    available: '2016-10-03',
    price: 75,
    imageUrl: '/ssd.jpg',
    rating: 5
  },{
    id: 2,
    description: 'LGA1151 Motherboard',
    available: '2016-09-15',
    price: 96.95,
    imageUrl: '/motherboard.jpg',
    rating: 4
  }];
}
