import {  ChangeDetectionStrategy, Component, computed,signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';//formsModule para uso de ngSubmit y ngModel
import { ProductItem } from "../product-item/product-item";
import { ProductForm } from "../product-form/product-form";



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'products-page',
  //importamos modulos Pipes para dar formato en la vista 
  imports: [FormsModule, ProductItem, ProductForm],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {

  title="Mi lista de productos";
  //ahora products: Products[] sera una signal
  products= signal<Product[]>([
    {
      id: 1,
      description: 'SSD hard drive',
      available: '2016-10-03',
      price: 75,
      imageUrl: '/ssd.jpg',
      rating: 5
    },
    {
      id: 2,
      description: 'LGA1151 Motherboard',
      available: '2016-09-15',
      price: 96.95,
      imageUrl: '/motherboard.jpg',
      rating: 4
    }
  ]);

  //propiedades nuevo producto
  newProduct: Product = {
    id: 0,
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0,
  };
  //campo fileName de imagen nuevo Product
  fileName="";
  //variable para inputSearch
  search=signal("");

  showImage=signal(true);// WritableSignal<boolean>

  toggleImage(){
    this.showImage.set(!this.showImage());
  }


    //addProduct ahora recibe el formulario como parametro
  addProduct(product:Product){

    product.id=Math.max(...this.products().map((p)=>p.id!)) + 1;
    this.products.update((mismoProducts)=>[...mismoProducts,product]); //se encarga de incluir en el array el documento
  }

  deleteProduct(product: Product){
    this.products.update((mismoProducts)=> mismoProducts.filter((p)=> p !== product));
  }
  //para el filtro de productos es mejor usar una signal computed 
  filteredProducts=computed(()=>{
    //regresamos los productos filtrados en caso de haber texto en el campo search o regresamos el array tal cual si no lo hay
    return this.search ?
      this.products().filter((p)=> p.description.toLocaleLowerCase().includes(this.search().toLocaleLowerCase()))
      : this.products();
  });

}
