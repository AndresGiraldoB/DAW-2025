import {  ChangeDetectionStrategy, Component, computed,inject,linkedSignal,signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';//formsModule para uso de ngSubmit y ngModel
import { ProductItem } from "../product-item/product-item";
import { ProductForm } from "../product-form/product-form";
import { ProductsService } from '../services/products-service';




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
  //campo fileName de imagen nuevo Product
  fileName="";
  //variable para inputSearch
  search=signal("");
  showImage=signal(true);// WritableSignal<boolean>
  //los  productos los obtenemos desde el service ahora readonly
  readonly #productService=inject(ProductsService);
  readonly productsResource=this.#productService.productsResource;
  //ahora products: es un linkedSignal se vincula al valor de resource
  products= linkedSignal(()=>this.productsResource.value().products);

  


  //un constructor para dar valor a el contenedor de products
  constructor(){
    /* ya no se cargan los productos en el contructor
    this.#productService
        .getProducts()//llamamos a getProducts del servicio
        //lamamos a metodo pipe con takeUntilDestroyed para cancelar suscripcion detecta automaticamente cuando el componente se destruye
        //y cancela la suscripcion a este en ese momento
        .pipe(takeUntilDestroyed())
        //suscribe metodod para llamar o obtener el resultado del metodo getProducts del servicio
        //.subscribe((products)=>this.products.set(products));//asignamos valor a array de products signal 
        //para dar manejo a errores -> bloques next ok error not ok
        .subscribe({
          //pasamos objeto con atributos next y error
          next: (products)=> this.products.set(products),
          error: (error)=> console.error(error),
        })
        //despues de suscribe podriamos llamar a metodo add de rxjs para ejecutar codigo posterior a carga de datos sea ok o error*/
  } 




  toggleImage(){
    this.showImage.set(!this.showImage());
  }


    //addProduct ahora recibe el formulario como parametro
  addProduct(product:Product){
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
