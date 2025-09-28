<?php
    //AndresGiraldoB DAW 2 Semipresencial
    $miTitle="Array 2";
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="AndresGiraldo">
    <title><?= $miTitle ?></title>
</head>
<body>
    <?php
        //Crea un array de alumnos donde cada elemento sea otro array que contenga
        //el id, nombre y edad del alumno.
        $misAlumnos=array(
            array(
                'id'=> 1001,
                'name'=>'Andres',
                'edad'=> 39
            ),
            array(
                'id' => 1002,
                'name'=>'Juan',
                'edad'=> 33
            ),
            array(
                'id' => 1003,
                'name'=>'Raul',
                'edad'=> 25
            ),
            array(
                'id' => 1004,
                'name'=>'Miguel',
                'edad'=> 26
            ),
            array(
                'id' => 1005,
                'name'=>'Francisco',
                'edad'=> 45
            ),
            array(
                'id' => 1006,
                'name'=>'David',
                'edad'=> 29
            )
        );
    ?>
    <!--Crea una tabla en la que se muestren todos los datos de los alumnos.-->
    <?php
        echo "<table >";

        echo "<tr><th>ID</th><th>NOMBRE</th><th>EDAD</th></tr>";
        foreach($misAlumnos as $alumno){
            echo "<tr>";
            foreach($alumno as $valor){
                echo "<td>".$valor."</td>";
            }
            echo "</tr>";
        }

        echo "</table>";
    ?>
    <!--Utiliza la función array_column para obtener un array indexado que contenga
    únicamente los nombres de los alumnos y muéstralo por pantalla.-->
    <p>Lista de nombres de alumnos:</p>
    <?php
        //array column(array,key,?index)-> regresa array con la columna de key del array pasado
        $columnaNombres=array_column($misAlumnos,"name");

        echo "<ul>";
        foreach($columnaNombres as $valor){
            echo "<li>".$valor."</li>";
        }
        echo "</ul>";

    ?>

    <!--Crea un array con 10 números:-->
    <?php
        $misNumeros=array(2,2,2,2,2,2,2,2,2,2);
    ?>

    <p>Uso de funci&oacute;n array_sum</p>
    <!--Utiliza la función array_sum para obtener la suma de los 10
    números.-->
    <?php
        echo "<p>";
        print_r($misNumeros);
        echo "</p>";
        echo "<p>La suma de los n&uacute;meros del array es: ".array_sum($misNumeros)."</p>";
    ?>

    <!--Utiliza la función array_reduce para obtener la multipllilcación al de
    los 10 números-->
    <?php
        $resultado=array_reduce($misNumeros,function($acumulador,$valorActual){
            return $acumulador * $valorActual;
        },1);

        echo "<p>La multiplicaci&oacute;n de los 10 n&uacute;meros es: ".$resultado."</p>";

    ?>

</body>
</html>
