Tecnica flexBox
Esta pensada para trabajar en una sola dimensión.
los elementos basicos de la extructura es:

contenedorPrincipal [[intem1],[item2],[item3],[item4],[item5]]
-contenedor elemento padre que contiene los demas elementos, las propiedades se establecen en el padre
-eje principal por defecto horizontal 
-eje secundario por defecto vertical
-item es cada elemento contenido en el comtenedor padre

ejemplo:
-html
<header>
<nav>
<a href="#">enlace 1</a>
<a href="#">enlace 2</a>
<a href="#">enlace 3</a>
</nav>
</header>
-css
nav{
    display:flex;
    a{
        text-decoration:none;
    }
}

se puede estableccer el valor flex ->contenedor en bloque ocupa ancho del padre, inline-flex similar a usar inline-block usa 
solo el espacio del contenido

-las siguientes caracteristicas solo se deben aplicar al contenedor padre.

-flex-direction hace referencia al eje principal y se le puede dar los valores:
--row defecto : los elemntos se apilan de forma horizontal
--row-reverse igual pero orden invertido
--column: los elemntos se apilan de forma vertical
--column-reverse: igual pero invierte el orden de los elmentos

-justify-content
alinea los items en el eje principal para distribuir espacio sobrante
--flex-start(por-defecto): agrupa al incio del contenedor
--flex-end agrupa al final
--space-between: distribuye el espacio uniforme pero el primer y ultimo elemento estan pegados al borde
--space-around: igual pero los espacios laterales entre elementos son la mitad de los de arriba abajo
--space-evenly: igual la separacion entre todos los elementos es igual

-flex-wrap
cambia la estructura y uso de flex, por defecto si un elemento no cabe , se reajusta el conjunto para darle cabida a todos
pero con flex-wrap podemos cambiar su comportamiento y que los contenedores se comporten como un multilinea
si no cabe el contenedor se hace multilinea y se añade un salto de linea para que quepa el nuevo contenido
valore:
--wrap: elementos que no caben pasan a la siguiente linea
--nowrap: todos en una linea. por defecto
--wrap-reverse: igual que wrap pero con orden inverso

**Atajo -> podemos usar la propiedad flex-flow, para asignar las dos propiedades flex-direcction y flex-wrap
** uso-> flex-flow: <flex-direction> <flex-wrap>
ejemplo: flex-flow: space-evenly wrap;

-align-items
Alinea los items a lo largo del eje secundario.
valores:
--stretch defecto: estira los elementos para que ocupen todo el alto y ancho de su padre
--flex-start: lso alinea al inicio del eje secundario
--flex-end: igual al final del eje secundario
--cennter: lo centra en el eje secundario

//fuente
https://fullstackpro.es/courses/curso-css-avanzado/flex
Si flex-direction: row (el valor por defecto), el eje principal es horizontal (↔️) y el secundario es vertical (↕️).
Si flex-direction: column, el eje principal es vertical (↕️) y el secundario es horizontal (↔️).


--Propiedades para elementos hijos
-flex-grow: defina la capacidad de un elemento ocupar el espacio disponible en el eje principal
si todos los elementos tienen 1 el espacio es igual , si alguno tiene 2 , el primero tomara el doble de espacio de los demas

-flex-shrink funciona como flex-grow pero es la capacidad de encoger un elemento
-flex-basis define tamaño inicial de un elemento antes de distribuir el espacio sobrante

**Atajo flex: <flex-grow> <flex-shrink> <flex-basis>

-order: permite cambiar el orden visual de un elemento pueden ser positivos o negativos
-align-items: permite al elemento definir su alineacion anulando la alineacion heredad de su padre

-row-gap (solo flex-direction:column) separacion entre items
column-gap (solo flex-direction: row)

**Atajo gap-> si se van a asignar ambas propiedades podemos usar  gap: 10px ejemplo