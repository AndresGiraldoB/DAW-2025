<h1>Css Grid</h1>
Grid es un sistema de maquetación que nos permite organizar los elementos en una reilla
bidimensional (horizontal, vertical)

<h1>Rejilla grid</h1>
sus elementos basicos son 
-el contenedor principal
-items 

tiene las siguientes referencias 
-grid lines (líneas de la rejilla ) las líneas horizontales y verticales que dividen la reijlla
-grid tracks (pistas) espacio entre dos líneas de la rejilla columnas y filas
-grid cells (celdas) espacio donde se cruzan una fila y una columna
-grid área (área) espacio rectangular que puede ocupar una o varias celdas

<h2>inline-grid</h2>
hace que los elementos se comporten como elmentos en línea ademas solo ocupan el espacio que necesitan
y permiten que otros elementos se posicionen a su lado, se puede asignar un ancho y alto.

<h2>inline-grid - grid</h2>
-grid lo usaremos para secciones grandes, como layout principal, galeria de imagenes, lista de articulos.
-inline-grid se suele usar en componentes mas pequeños que necesiten alínearse con otros lementos en la misma 
línea. grupo de botones, iconos, widgets.

<h2>Fracción unidad fr</h2>
la unidad <strong>fr</strong> es usada para hacer referencia a una fracción del espacio disponible en el contenedor.
Ejemplo: si usamos 1fr 1fr 1fr -> 3 contenedores del mismo tamaño, 2fr 1fr -> 2 contenedores 1 de 1 fr y otro que 
ocupara dos veces el tamaño del primero.

<h2>repeat()</h2>
es una función que nos permite definir columnas o filas de forma más eficiente, en lugar de especificar
valores repetidos, usaremos  <strong>repeat()</strong>.

la funcón recibe dos argumentos principales  <strong>repeat</strong>(nVeces, tamaño de la repetición)
<pre>
css
<code>
.container{
    display: grid; 
    grid-template-columns: repeat(6, 1fr);/*crea 6 columnas de 1 fr cada una*/
}
</code>
</pre>
los valores aceptados en el tamaña de la repeticion puede ser:
-px unidades fijas
-% relativo al contenedor
-fr fracciones del espacio disponible
-min-content tamaño mínimo del contenido de la celda
-max-content tamaño máximo del contenido de la celda
-* minmax() función que permite asignar un tamaño mínimo y máximo

<h2>número repeticiones auto-fill</h2>
en vez de generar un número fijo de pistas, podemos rellenar el contenedor con pistas incluso vacias, si el contenedor
se ensancha se agregan más pistas, aunque no haya contenido para ellas.
<pre>
css
<code>
.container{
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(120px,1fr));/*crea tantas columnas de mínimo 120px como quepan*/
}
</code>
</pre>

<h2>número repeticiones auto-fit</h2>
auto-fit es similar a auto-fill, solo que en este caso si despues de distribuir los elementos quedan pistas vacias,
estas se vacian a 0. con esto los elementos existentes se estiren para ocupar el espacio disponible.
es ideal para que los elementos se expandan para rellenar el contenedor. si el contenedor se redduce las columnas que 
no quepan pasaran a la siguiente fila row
<pre>
css
<code>
.container{
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(120px,1fr));/*crea las columnas necesarias para el contenido y espacio restante es ocupado por los elementos*/
}
</code>
</pre>

<h2>minmax()</h2>

nos sirve para crear componentes flexibles, se pueden usar como medidas px % fr auto