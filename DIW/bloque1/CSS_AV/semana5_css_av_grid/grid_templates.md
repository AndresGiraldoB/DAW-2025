<h1>Grid templates</h1>

<h2>grid-template-columns</h2>
Esta propiedad nos permite definir el número y tamaño de las columnas de la regilla.
para asignar el tamaño se pueden usar px % fr auto repeta().
<pre>
css
<code>
.container{
    display: grid; 
    grid-template-columns: repeat(3,1fr);/*crea 3 columnas de 1 fr*/
}
</code>
</pre>

<h2>grid-template-rows</h2>
funciona igual a la anterior pero en este caso podemos definir el número y la altura de las filas
se puede asignar el tamaño en px % fr  repeat().

<pre>
css
<code>
.container{
    display: grid; 
    grid-template-columns: repeat(3,1fr);
    rid-template-rows: repeat(4,200px); /*crea 4 filas de 200px de alto*/
}
</code>
</pre>

<h2>grid-template</h2>
permite definir <strong>grid-template-columns</strong> <strong>grid-template-rows</strong> e incluso 
<strong>grid-template-area</strong>. para su uso debemos separar los valores {filas}/{columnas}

<pre>
css
<code>
.container{
    display: grid; 
    grid-template: repeat(4,200px) / repeat(3,1fr); /**asignamos grid-template-rows y grid-template-columns en una sola linea*/
}
</code>
</pre>