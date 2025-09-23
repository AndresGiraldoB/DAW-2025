<?php // Andres Giraldo 2 DAW Semipresencial

//definir una variable de texto para ensayar las funciones de las strings
$miCadena="  /?Cadena de texto de prueba para ensayar las funciones de la clase Strings/? ";
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="author" content="AndresGiraldo">
    <title>Ejercicio 3_1</title>
</head>
<body>
    <?= "<p>({$miCadena}) </p>" ?>
    <?php //1. Elimina los espacios del principio y el final de la cadena si los hubiera.
        $miCadenaSinEspacios=trim($miCadena);
        echo "<p> ($miCadenaSinEspacios) </p>";
    ?>

    <?php  //2.Elimina los caracteres / y ? del principio y el final de la cadena si los hubiera.
        $cadenaSinSimbolos=trim($miCadenaSinEspacios,'/'.'?');
        echo "<p>($cadenaSinSimbolos)</p>";
    ?>

    <!--//3.La variable cadena en mayúsculas, minúsculas y con la primera letra en
        //mayúscula y las demás en minúsculas.
        //3.1 mayúsculas-->
        <?= '<p>('.strtoupper($cadenaSinSimbolos).')</p>'; ?>

        <!--//3.2 minúsculas -->
        <?= '<p>('.strtolower($cadenaSinSimbolos).')</p>'; ?>
        <!--  //3.3 primeraLetra en mayúscula -->
        <?= '<p>('.ucwords($cadenaSinSimbolos).')</p>'; ?>
        <!-- //4.Muestra el código ascii de la primera letra del nombre-->
        <?= '<p>C&oacute;digo ASCII de la primera letra de nuestra string ('.$cadenaSinSimbolos[0].' -> '.
            ord($cadenaSinSimbolos[0]).')</p>'; ?>
        <!-- //5.Muestra la longitud del nombre.-->
        <?= "<p>La longitud de \"{$cadenaSinSimbolos}\" es: ".strlen($cadenaSinSimbolos)."</p>"; ?>
        <!-- //6.Muestra el número de veces que aparece la letra a (mayúscula o minúscula). -->
        <?= "<p>La letra a (may&uacute;scula o min&uacute;scula) se encuentra "
                .substr_count(strtoupper($cadenaSinSimbolos),strtoupper('a'))." veces en el string de prueba</p>"; ?>
        <!-- //7.Muestra la posición de la primera a existente en el nombre (sea mayúscula o
            //minúscula). Si no hay ninguna mostrará -1. -->
        <?php
            $letraVeces= stripos( $cadenaSinSimbolos, 'a');
            //asignado valor por defecto, si regresa false 0 o nul asignamos -1
            //$letraVeces= stripos( $cadenaSinSimbolos, 'a') | -1;
            echo "<p>La primera a (may&uacute;scula o min&uacute;scula) esta en la posici&oacute;n: ";
            /*if($letraVeces){
                echo "$letraVeces</p>";
            }else{
                echo "-1 </p>";
            }*/
            // uso de operador ternario
            echo ($letraVeces === false) ? "-1 </p>" : "$letraVeces</p>";
            // no nulo ??
            //echo "$letraVeces </p>";
        ?>

        <!--//8.Lo mismo, pero con la última a-->
        <?php
              $ultimaA=strripos($cadenaSinSimbolos, 'a');
              echo "<p>La ultima a (may&uacute;scula o min&uacute;scula) esta en la posici&oacute;n: ";
                echo ($ultimaA === false) ? "-1 </p>" : "$ultimaA</p>";
        ?>

        <!-- //9.Muestra el nombre sustituyendo las letras o por el número cero (sea
            //mayúscula o minúscula).-->
        <?= "<p>".str_ireplace('o','0',$cadenaSinSimbolos)."</p>"; ?>

        <!--  //10.Indica si el nombre comienza por “al” o no.-->
        <?php
            $inciaConSubs= str_starts_with(strtolower($cadenaSinSimbolos), 'al');
            echo ($inciaConSubs === false) ? "<p>la cadena no comienza con 'al' </p>" : "<p>la cadena comienza con 'al' </p>";

        ?>

</body>
</html>



