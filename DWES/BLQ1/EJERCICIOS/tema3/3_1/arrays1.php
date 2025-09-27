/*Crea un array con los nombres de varios alumnos de la clase incluyendo el 
tuyo.*/
<?php 
    //array de alumnos
    $alumnos = array('juan', 'guillermo',
                     'francisco','raul',
                     'carlos','adrian',
                     'david','andres');
 ?>
/* Muestra el número de elementos que tiene el array.*/
<?= "El array de alumnos tiene {count($alumnos)} elementos";?>

/*Crea una cadena que contenga los nombres de los alumnos existentes en el 
array separados por un espacio y muéstrala.*/
<?= print_r(implode(" ", $alumnos)); ?>

/*Muestra el array en un orden aleatorio distinto al que lo creaste.*/
<? print_r(shuffle($alumnos)); ?>
/**/
