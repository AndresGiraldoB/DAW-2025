<h1>Alineación de elementos y gap</h1>

<h2>gap</h2>
podemos definirlo como el espacio entre pistas. gap es el atajo para
<strong>gap-row</strong> <strong>gap-column</strong> podemos asignarlos por separado
o juntos pasando ambos valores a <strong>gap</strong>.


<h2>Alineación de contenido dentro del padre</h2>
para alinear los items dentro del contenedor principal podemos usar:
<ul>
<li><strong>justify-content</strong>: alinea los elementos en el contenedor en horizontal (row).</li>
<li><strong>align-items</strong>: alinea elementos en contenedor padre en verticla (column).</li>
</ul>


los atributos anteriores pueden tomar los siguientes valores:
<ul>
    <li><strong>start</strong></li>
    <li><strong>end</strong></li>
    <li><strong>center</strong></li>
    <li><strong>space-between</strong></li>
    <li><strong>space-around</strong></li>
    <li><strong>space-evenly</strong></li>
</ul>

podemos usar el atajo <strong>place-content</strong>
para asignar valores lo haremos asi: <strong>place-content</strong>: {align-content} {justify-content}
si pasamos solo un valor lo toma para ambos atributos


<h2>propiedades de alineación para los items</h2>
estas propiedades se aplican a los items hijos dentro de su propia celda.
<ul>
<li><strong>justify-items</strong>: alineacion en horizontal</li>
<li><strong>align-items</strong>: alineacion en vertical</li>
</ul>

las propiedades anteriorres pueden tomar los siguientes valores:
<ul>
    <li><strong>start</strong></li>
    <li><strong>end</strong></li>
    <li><strong>center</strong></li>
    <li><strong>stretch</strong></li>
</ul>

podemos usar el atajo <strong>place-items</strong> para asignar ambas propiedades.
asignaremos valores : <strong>place-items</strong>: {align-items} {justify-items}
de igual forma si pasamos solo un valor, este sera aplicado para las dos propiedades.

<h2>justify-self align-self</h2>
estas propiedades se aplican a los items hijos y permiten alinear de forma independiente
el item.

<ul>
<li><strong>justify-self</strong>: alineacion en horizontal dentro de la celda</li>
<li><strong>align-self</strong>: alineacion en vertical dentro de la celda</li>
<li><strong>place-self</strong>: atajo para asignar <strong>place-self</strong>: {align-self} {justify-self}</li>
</ul>