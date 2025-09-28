<?php //AndresGiraldoB DAW Semipresencial
    $myTitle="Funciones Arrays 1";
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="AndresGiraldo">
    <title><?=$myTitle; ?></title>
</head>
<body>

    <h1>Ejercicios de Arrays 1 php</h1>
    <?php
        //array de alumnos
        $alumnos = array('juan', 'guillermo',
            'francisco','raul',
            'carlos','adrian',
            'david','andres',
            'miguel','jose');
        echo "<p> Alumnos :<br>";
        print_r($alumnos);
        echo "</p>";
    ?>
    <!--Muestra el número de elementos que tiene el array.-->
    <?= "El array de alumnos tiene ".count($alumnos)." elementos";?>

    <!--Crea una cadena que contenga los nombres de los alumnos existentes en el
    array separados por un espacio y muéstrala.-->
    <?=  "<p>".(implode(" ", $alumnos))."</p>"; ?>

    <!--Muestra el array en un orden aleatorio distinto al que lo creaste-->
    <?php
        //clonamos el array original para no modificar el array original
        $alumnosAleatorio=[...$alumnos];

        echo "<p>";
        //orden aleatorio
        shuffle($alumnosAleatorio);
        print_r($alumnosAleatorio);
        echo "</p>";
    ?>
    <!--Muestra el array ordenado alfabéticamente.-->
    <?php
        //copiamos para no modificar el array orginal
        $alumnosOrdenAc=[...$alumnos];
        sort($alumnosOrdenAc);
        echo "<p>";
        print_r($alumnosOrdenAc);
        echo "</p>";
    ?>

    <!--Muestra los alumnos cuyo nombre contenga al menos una ‘a’.-->
    <?php //uso de callbacks o callables
        //array_filter devuelve un array nuevo no modifica el original
        $alumnosA= array_filter($alumnos,function($alu){
            //retornamos true o false si en el nombre encuentra una a o A es sesible amayusculas
            return str_contains($alu,'a') || str_contains($alu,'A');
        });
        //array_values para reordenar el index ya que el array devuelto por filter asocia el indice de
        //los elementos que cumplen la condicion de filtrado causando anomalias en el index
        $alumnosA= array_values($alumnosA);
        //imprimimos el array de alumnos que su nombre contiene la a o A
        echo "<p>";
        print_r($alumnosA);
        echo "</p>";

    ?>

    <!--Muestra el array en el orden inverso al que se creó.-->
    <?php
        //clonamos array para no afectar el original
        $alumnosRev=[...$alumnos];
        //orden invertido
        //rsort($alumnosRev); //esto no
        $alumnosRev=array_reverse($alumnosRev);
        echo "<p>";
        print_r($alumnosRev);
        echo "</p>";
    ?>

    <!--Muestra la posición que tiene tu nombre en el array.-->
    <?php
        //array_search('búsqueda',array) --> false o posición, si esta varias veces devuelve primera posición
        echo "<p> mi nombre esta en la posici&oacute;n";
        $posNombre=array_search('andres',$alumnos,false);
        //expresion ternaria para evaular si es === false no 0 , muestra la posicion del alumno
        echo $posNombre === false ?  " no se encontro el nombre </p>" :  " $posNombre del array original de alumnos"
            ." ($alumnos[$posNombre])";
        //echo " $posNombre</p>";

    ?>

</body>
</html>
