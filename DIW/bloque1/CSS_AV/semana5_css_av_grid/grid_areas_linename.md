<h1>grid area</h1>
esta propeidad la podemos usar en un elemento contenedor,y se usa con
grid-template-areas como argumento le pasaremos una cadena de texto donde cada cadena representa una fila
y los nombre representan las celdas de la fila
<pre>
<code>
.container{
    text-align: center;
    color: white;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: 100px 1fr 100px;
    gap: 20px;
    /*grid-template-areas nos permite con las cadenas de texto y los nombres maquetar el layout*/
    grid-template-areas: "header header header header"
                          "aside main main main"
                          "aside tarjeta-2 tarjeta-1 tarjeta-1"
                          "footer footer footer footer"  ;
    height: 100vh;

    .item{
        box-shadow: 2px 2px 5px #d2d2d2;
        /*se aplica grid area a los items y se pone el nombre dado en grid-area padre*/
        &.header{
            background-color: #636c9c;
            grid-area: header;
        }
        &.main{
            background-color: #c4a98d;
            grid-area: main;
        }
        &.aside{
            background-color: #639c6f;
            grid-area: aside;
        }
        &.tarjeta-1{
            background-color: #9c6371;
            grid-area: tarjeta-1;
        }
        &.tarjeta-2{
            background-color: #63959c;
            grid-area: tarjeta-2;
        }
        &.footer{
            background-color: #636c9c;
            grid-area: footer;
        }
    }
}
</code>
</pre>


<h1>grid linename</h1>

en un contenedor padre despues de definir que el contenedor es grid, en grid-template-columns o grid-template-rows
especificar los nombres de los items entre llaves y seguido tamaño

grid-template-columns: [aside-start] 1fr [aside-end]

y desde el elmento item en los atributos grid-row y grid-column usamos los nombres para posicionar los elementos
item{ 
    grid-column: aside-start/ main-end 
}


<pre>
<code>
.miGrip{
    display: grid;
    grid-template-columns:[baner-start]1fr [baner-end]1fr [principal-start]1fr [principal-end]1fr [tarjeta-1-start]1fr [tarjeta-1-end]1fr [tarjeta-2-start]1fr [tarjeta-2-end]1fr;
    grid-template-rows: [cabecera]100px [principal]1fr [piepagina]100px;
    width: 100%;
    height: 100vh;
    background-color: aliceblue;

    .item{
        box-shadow: 2px 2px 4px #555;
        
        &.cabecera{
            grid-row:cabecera;
            grid-column: baner-start/tarjeta-2-end;/*aqui se asigna posicion con los nombres de las clases*/
            background-color: aquamarine;
        }
    }

}
</code>
</pre>