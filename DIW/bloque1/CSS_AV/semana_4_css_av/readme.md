<h1>Nesting</h1>

El css nesting o anidamiento es una caracteristica nativa de css que permite anidar un selector de estilo dentro 
de otro.
permite escribir reglas css de manera mas concisa y jerarquica imitando la estructura de Html

<h2>Child Nesting o Descendant Nesting</h2>
El childNesting se encarga de aplicar estilos a elementos descendientes de un contenedor padre al cual
le escribimos su estilo.

Ejemplo:

-css con nesting
header{
    background-color: red;
    font-size: 2rem;
    text-align: center;

    nav{
        display:flex;
        justify-content: center;
    }
}

En este caso estamos aplicando estilos al header, y dentro del header asignamos estilo a el nav
hijo del header

-Html
&gt;header&lt; 
    &gt;nav&lt;
    &gt;/nav&lt;
&gt;/header&lt;

-css normal sin nesting
header{
     background-color: red;
    font-size: 2rem;
    text-align: center;
}

header nav{
    display:flex;
    justify-content: center;
}

En casos mas complejos vamos a necesitar '&' para hacer referencia al contenedor padre &:p
es como refferir a los p hijos del contenedor actual

<h2>Uso del símbolo '&' </h2>
El & se utiliza para referenciar al contenedor padre de forma explicita.
se debe usar en los siguientes casos

-Pseudo clases :hover, :focus,etc
-Pseudo elementos ::before ::after etc
-Combinar selectores: se usa para unir selectores sin espacios entre ellos 
-Combinadores diferentes al descendiente: el anidamiento por defecto es combinador de descendientes (header nav)
espacio en blanco, esto selecciona a todos los elementos que esten detro del padre, pero usar la & permite usar
otros combinadores de seleccion como + ~ >
-Cambiar el orden 'prepending': se usa para colocar al selector de padre en medio o al final de una regla. es util para 
aplicar estilos a otros elementos

<h2>Uso en Pseudoclases</h2>
podemos seleccionar un parrafo por ejemplo y con el nesting asignar un estilo diferente si se pasa el puntero encima del
elemento.
Ejemplo:
-css nesting pseudoclases

a{
    background-color: red;
    width: max-content;
    color: white;

    &:hover{
        background-color: blue;
        width: 100%;
        color: black;
        font-size: 2rem;
    }
}


<h2>Uso en Pseudoelementos</h2>
lo podemos usar para añadir contenido en determinados elementos como los marcadores de estilo en las listas

.listas-per{
    background-color: #842;
    padding-left: 5px;
    line-heigth: 2rem;

    li{
        position:relative;

        &::before{
            content "☠";
            position:absolute;
            left:0;
            rigth:0;
        }
    }
}

<h2>Combinar selecctores sin espacio</h2>

se puede usar para unir dos clases 

html

&gt;article class='principal'&lt; 

&gt;/article&lt;
&gt;article class='principal otraClase'&lt; 

&gt;/article&lt;

css-selector sin espacios
.principal{

    background-color:alice;
    text-align:center;

    &.otraClase{
        font-weight: 700;
    }
}

con esto se seleccionan las clase principal y los elementos que contengan principal otraClasse

<h2>Combinadores diferentes al descendiente </h2>
por defecto el anidamiento se crea con un selector de descendiente hijos en general.
pero si queremos ser mas especificos podemos usar los diferentes combinador de selectores > ~ +


.card{
    border: 1px solid #644;
    padding:2%;

    &>p{
        font-weight: 800;
    }
}

aqui seleccionamos los parrafos hijos de .card que sean hijos directos

<h2>Cambiar el orden del padre</h2>
podemos cambiar el orden del & padre para poner reglas que lo incluyan y condicionen ciertos estilos

ejemplo:
-html
<section>
<article class="new-ar">
<p>
    Parrafo
</p>
</article>
</section>
-css
.new_ar{
    background-color:yellow;
    text-content: rigth;
    border: 2px dotted #677;

    p{
        line-heigth: 2rem;
    }

    section &{
        background-color: #885;
    }
}
esto seleccionara a los section que sean contengan en su interior un elemento .new-ar

<h2>Anidamiento de reglas</h2>
Se puede usar el nesting para asignar reglas @media, @supports, @layer, @scope, @container

-css
.new-ar{
    width:300px;
    
    @media(max-width: 700px)(
        &{
            display:flex;
        }
    )
}
aqui estamos aplicando la norma @media al contenedor .new-ar al usar &