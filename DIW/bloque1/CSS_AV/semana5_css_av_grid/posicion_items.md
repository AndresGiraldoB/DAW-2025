<h1>Posición items</h1>

<h2>filas y columnas</h2>
los elementos por dfecto se alinean de izquierda a derecha y se alinean sobre las lineas,
un contenedor con grid-template-columns: 1fr 1fr no tiene dos espacios si no 3 lineas verticales.
-linea 1 borde izquierdo de la primera columna
-linea 2 borde que esta entre la primera y segunda
-linea 3 borde derecho de la segunda columna

se pueden usar valores negativos -1 seria la ultima -2 la antepenultima, etc.

<h2>Propiedades largas</h2>
gird-column-start linea vertical donde empieza el item
grid-column-end linea vertical donde finaliza el item
grid-row-start linea horizontal donde empieza
grid-row-end linea horizontal donde finaliza

se puedde resumir aun mas con el atajo

grid-column: start/end;
grid-row: start/end;

y si el elemento entre start y end solo tienen 1 linea de diferencia lo omitimos, ejemplo:

grid-column: 3/4;
grid-row: 1/6;

es igual a 
grid-column: 3;

con un número precedido de la palabra span podemos indicar cuantas lineas debemos alargar cada celda.

grid-row: 2/2 span; empieza en la linea 2 y se expande hasta la linea 4
grid-row: span 2; se alarga 2 lineas

<h2>grid-auto-columns grid-auto-rows</h2>
estos metodos nos ayudan para que los elementos que no quepan en nuestra rejilla expliciita se ajusten y puedan entrar en el diseño.
en caso de que se añada un elemento adicional y no existe espacio predefinido, se crea de forma automatica.
nos brindan control sobre los elementos que no caben en la rejilla principal

<h2>grid-auto-flow</h2>
controla como se colocan los elementos que no tienen una posicion definida.
deside en que posicion fluyen y se incluyen nuevos elementos a la rejilla.

sus valores podrian ser:

row: los elementos fluyen llenando cada fila.
column: los elementos fluyen llenando cada columna.

si añadimos posteriormente la palabra dense, le ordenamos que el diseño sea mas compacto y eficiente.