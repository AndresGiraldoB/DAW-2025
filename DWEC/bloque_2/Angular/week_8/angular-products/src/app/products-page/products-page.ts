import {  Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { FormsModule, NgForm } from '@angular/forms';//formsModule para uso de ngSubmit y ngModel


@Component({
  selector: 'products-page',
  imports: [FormsModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {

  title="Mi lista de productos";
  products:Product[]=[
    {
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
  }
  ];

  //propiedades nuevo producto
  newProducto!:Product;
  //campo fileName de imagen nuevo Product
  fileName="";
  //constructor
  constructor(){
    //inicializamos a "" o 0 las propiedades del nuevo Producto
    this.resetProduct();
  }
  //----fin nuevo Product
  //--changeDetector pendiente
  //#changeDetector=inject(ChangeDetectorRef);
  //--change detector fin

  //boolean que vinculamos con mostrar imagen
  showImage=true;
  //addEventListener para cuando se haga click en boton se oculten o enseñen imagenes
  toggleImage(){
    this.showImage = !this.showImage;
  }

  //evento changeImagen para realizar y actualizar cambios en la imagen seleccionada para el Product
  /*changeImage(event:Event){
    const fileinput=event.target as HTMLInputElement;
    if(!fileinput.files?.length) return;//validamos si se ha seleccionado una imagen
    const reader = new FileReader();
    reader.readAsDataURL(fileinput.files[0]);//pasamos el file
    reader.addEventListener("loadend",()=>{
      this.newProducto.imageUrl=reader.result as string;//imagen url le psasamos el reader.result como string
      //marcamos el elemento del componente para que sea revisado cuando cambie
      this.#changeDetector.markForCheck();//necesario en las app zoneless
    })
  }*/
  //recibimos referencia directa al input value
  changeImage(fileinput:HTMLInputElement){
   
    if(!fileinput.files?.length) return;//validamos si se ha seleccionado una imagen
    const reader = new FileReader();
    reader.readAsDataURL(fileinput.files[0]);//pasamos el file
    reader.addEventListener("loadend",()=>{
      this.newProducto.imageUrl=reader.result as string;//imagen url le psasamos el reader.result como string
    })
  }
  
  

  //evento al realizar submmit para añadir nuevo Product a la lista de products
  /*
  addProduct(){
    this.newProducto.id=Math.max(...this.products.map(p => p.id!)) + 1;//ide aleatorio por ahora
    //añadimos el nuevo producto al array de Products antes de limpiar campos del formulario
    this.products.push(this.newProducto);
    //borramos el campo fileName
    this.resetProduct();
  }*/

    //addProduct ahora recibe el formulario como parametro
  addProduct(productForm:NgForm){
    this.newProducto.id=Math.max(...this.products.map(p => p.id!)) + 1;//ide aleatorio por ahora
    //ahora clonamos el producto antes de hacer push
    this.products.push({...this.newProducto});//clonamos antes de añadir
    //limpiamos formulario
    productForm.reset();
    //limpiamos imageUrl
    this.newProducto.imageUrl="";
  }
  //metodo para limpiar campos del formulario
  private resetProduct(){
    this.newProducto={
      id:0,
        description: '',
      available: '',
      imageUrl: '',
      rating: 1,
      price: 0
    }
    this.fileName="";
  }



}
