<h1>-variable superglobal $_GET[]</h1>

array asociativo que contiene los nombresDeCampo y su valor
para acceder a el campo lo llamamos dentro de la variable superGlobal
Ejemplo:
http://localhost/myExample/example_1.php?nombre=Andrés&apellido=Giraldo
$_GET['nombre'] -> Andrés
$_GET['apellido'] -> Giraldo

las peticiones de tipo GET se usan por lo regular para solicitar
datos de un recurso, los parametros son enviados en la QueryString
y se pueden ver en la url

-variable superglobal $_POST[]

array asociativo igual a $_GET[], contiene los parametros y valores
pasados en el cuerpo de la petición a diferencia de las peticiones
GET que suelen pasar a la vista de todos en la QueryString. En el
caso de la petición POST esta se pasa en el cuerpo de la petición
y no esta a la vista

-verificar que se han enviado los datos en el formulario

para evitar errores al recargar la pagina en el envio del formulario
se suele comprobar si se ha utilizado el REQUEST_METHOD que 
esta en el formulario, esta información esta en la variable
superglobal $_SERVER['REQUEST_METHOD']

Ej:

if($_SERVER['REQUEST_METHOD'] === "POST"){
    ......
}

-validar campos vacios de formulario

para los campos del formulario que sean obligatorios
debemos asegurarnos que no la variable no recibe un valor
vacio usaremos la función 
empty(valorAconfirmar) -> true si el valor esta vacio
                       -> false si no esta vacio (0 false ' ')

Ej:
if(empty($_GET['nombre'])){
    ....
}

-Eliminar espacios en blanco al principio y final del valor

se deben eliminar espacios al inicio y final del valor
para ello usamos la función trim()
Ej:
$name=trim($_GET['nombre']); --> en caso de haber ' '
                                al principio o final los elimina


-Verificar si un campo en este caso email tiene una formato valido

para esto usaremos la función filter_var($valor,FILTER_VALIDATE_EMAIL)
en este caso pero existen diferentes filtros para 
comprobar si un dato cumple con un patron
función filter_var:
https://www.php.net/manual/es/function.filter-var.php

filter validates:
https://www.php.net/manual/es/filter.constants.php#constant.filter-validate-bool


Ej:

filer_var("pepito@gmail.com",FILTER_VALIDATE_EMAIL); 
                                                -> true o false 
                                                   si el valor
                                                   cumple o no

-Comprobar fechas

Para comprobar las fechas recibidas cumplen con las 
caracteristcas de un objeto  Fecha usaremos la función
date_create_from_format();
ej:
date_create_from_format('23-09-2025','d-m-Y'); -> regresa 
objeto dateTime o false si hay error

-Include y Require

La diferencia entre ellos es que si usamos require y el fichero
a incluir no existe o falla, se provoca un error de ejecución
y el flujo del programa falla y cierra por error fatal.
En caso de usar include en lugar de generar un error fatal se 
produce un warning y el resto de código se sigue ejecutando
**Usaremos require cuando la ejecución del código que incluimos
es indispensable para el funcionamiento de la página.En caso 
contrario usaremos include

-partials
las partes comunes las sacaremos en un directorio a parte llamado
/partials, y estos tendran la extensión .part.php.
como norma los partials no deben de tener codigo php solo html
estos partials los incluiremos con *include

-views
Las vistas se encargan de mostrar los datos extraidos,
para ello crearemos las views con la extensión .view.php,
se vincularan a los documentos php usando *require

por cuestiones de legibilidad en las vistas se recomienda
el uso de las siguientes estructuras.

--recomendaciones para arrays en views

<pre>
<code>
&lt;?php foreach($frutas as $fruta):?&gt;
    &lt;li&gt; &lt;?=$fruta;?&gt;&lt;/li&gt;
&lt;?php endforeach;?&gt;
</code>
</pre>

--arrays asociativos en las views
<pre>
<code>
&lt;?php foreach($frutas as $key=>$value):?&gt;
    &lt;li&gt;&lt;strong>&lt;?=$key;?&gt;&lt;/strong&gt; &lt;?=$value;?&gt;&lt;/li&gt;
&lt;?php endforeach;?&gt;
</code>
</pre>

--condiciones sencillas

<pre>
<code>
&lt;li&gt;
    &lt;strong&gt;
        &lt;?=$fruta['piel'] ? 'fina' : 'gruesa';?&gt;
    &lt;/strong&gt;
&lt;/li&gt;
</code>
</pre>

otro ejemplo mas complejo

<pre>
<code>
&lt;?php if($fruta['piel']):?&gt;
    &lt;span class="icon"&gt;🥥&lt;/span&gt;
&lt;?php else:?&gt;
    &lt;span class="icon"&gt;🍑&lt;/span&gt;
&lt;?php endif;?&gt;
</code>
</pre>

-- separar funciones reutilizables
las funciones reutilizables las llamaremos con extensión
.inc.php 

