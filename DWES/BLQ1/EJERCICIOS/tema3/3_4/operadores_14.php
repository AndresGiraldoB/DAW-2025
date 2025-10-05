<!--AndrésGiraldoB 2DAW Semipresencial
14. Operadores. Crea una página que compruebe si ha recibido por querystring un
parámetro llamado número:
• En caso de haberlo recibido mostrará por pantalla si el número es mayor,
menor o igual que 10.
• Utiliza los nuevos operadores de PHP 7 <=> y ??
• Si no se ha recibido ningún parámetro llamado numero, mostrar el mensaje
“No se ha recibido ningún número”
-->
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta  name="author" content="AndresGiraldoB">
    <title>Operadores</title>
</head>
<body>
    <h1>Operadores</h1>
    <?php
        //comprobamos si existe el parámetro llamado número en caso contrario msj "No se ha recibido ningún número"
        //para acceder a la querystring -> GET , llamaremos superglobal GET que es un array asociativo y buscaremos
        //el campo número
        $numeroQueryString=$_GET['número'] ?? 'No se ha recibido ningún número';

        //comprobamos si hay numero en caso de que si comparamos <=> si es mayor, menor o igual que 10
        $numeroMayorMenor= $numeroQueryString === 'No se ha recibido ningún número' ? $numeroQueryString : $numeroQueryString <=> 10;
        // en caso de no tener valor mostramos mensaje y cortamos el flujo del script
        if($numeroMayorMenor === 'No se ha recibido ningún número'){
            die("<p> $numeroMayorMenor </p>");
        }
        //si no es igual al valor de no recibir parámetros continuamos

        /*if($numeroMayorMenor == 1){//mayor que 10
            echo "<p>El número $numeroQueryString es mayor que 10</p>"
        }elseif ($numeroMayorMenor == -1){//menor que 10
            echo "<p>El número $numeroQueryString es menor que 10</p>"
        }else{//igual
            "<p>El número $numeroQueryString es mayor que 10</p>";
        }*/

        echo $numeroMayorMenor == 1 ? "<p>El número $numeroQueryString es mayor que 10</p>"
                : ($numeroMayorMenor == -1 ? "<p>El número $numeroQueryString es menor que 10</p>"
                : "<p>El número $numeroQueryString es igual que 10</p>");

    ?>
</body>
</html>
