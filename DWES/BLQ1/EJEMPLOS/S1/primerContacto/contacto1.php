


<p>
    <?php // uso de etiqueta php contiene codigo en ph

    //echo para imprimir por pantallla
    echo "Hola usando etiquetas php completas"; ?>
</p>

<!--podemos inseetar html desde php con las etiquetas html-->

<?= '<p> esto es un p&aacute;rrafo usando etiqueta <strong>php</strong> corta y usando etiquetas <strong>Html</strong> dentro de php';?>

<!--Declaracion de variables $myVariable -->

<? $miVariable = "Esto es un p&aacute;rrafo en una variable";?>
<!--usamos . para concatenar-->
<?= '<p>'.$miVariable.'</p>';?>
<!--uso de "" para poder incrsutar variables en textos-->
<?= "<p>Ahora usaremos las comillas dobles  \" \" , para usar variables dentro de un texto ejemplo:variable anterior ({$miVariable})</p>";?>
<!--las variables suelen tener el tipo implicito cuando se da valor a una variable
    esto quiere decir que si se le asigna un valor incial de 5 posteriormente se puede cambiar ese valor
    por 'cinco' y no habra ningun error, su tipo puede variar-->
<?php $miNuevaVar=5;
    echo '<p>Esto es el valor de la variable: '.$miNuevaVar.'</p>';
    //ahora cambiaremos el valor de la variable y asi mismo su tipo
    $miNuevaVar='Cinco';
    echo "<p>Ahora el valor de la variable es:{$miNuevaVar}.</p>";
?>

