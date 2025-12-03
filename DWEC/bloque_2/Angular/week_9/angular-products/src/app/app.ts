import {Component, signal } from '@angular/core';


import { ProductsPage } from "./products-page/products-page";


@Component({
  
  selector: 'app-root',
  //insertamos los componentes que se crean en el body 
  imports: [ProductsPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-products');
}
