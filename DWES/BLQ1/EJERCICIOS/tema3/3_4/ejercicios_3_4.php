<!--  //AndresGiraldoB DAW Semipresencial-->
<?php
    $globalMiTitulo="Variables Superglobales";
    $abre_p="<p>";
    $cierra_p="</p>";
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta  name="author" content="AndresGiraldoB">
    <title><?=$globalMiTitulo;?></title>
</head>
<body>
    <h1><?=$globalMiTitulo;?></h1>
    <!--11. Variables superglobales. Crea una función que devuelva la uri de la página actual
    eliminando el carácter ‘/’ inicial.-->
    <?php
        /**función devolverUri():string.
         * no recibe parametros y consulta la uri actual desde donde se llama, regresa la uri formateada
         * sin los '/' iníciales. esta funcion retorna la uri completa incluyendo parametros
         * pasados en la queryString
        */
        function devolverUri():string{
            //comprobamos si tiene valor o es null, recordar null != '',0,false -->estos casos no serán detectados por iset()
            //usamos operador de nulll ?? para asignar un valor por defecto si la variable superglobla es null
             $uriActual= $_SERVER['REQUEST_URI'] ?? 'Sin Datos';
            //transformamos la string devuelta y quitamos '/' inicial
            return ltrim($uriActual, '/');
        }

        //llamada a la función y mostramos por pantalla
        echo "$abre_p <strong>Uri Actual</strong>: ".devolverUri()."$cierra_p";
    ?>

    <!--12. Variagles superglobales. Crea una función como la anterior que elimine el querystring
    de la uri si lo tuviera.-->
    <?php
        /*
         * function uriFormateada():string
         * La función no requiere parámetros consulta la variable superglobal SERVER['REQUEST_URI']
         *  en caso de que no sea null, regresa la URI actual, leugo se da formato, quitar '/' inicial y
         * eliminado la QueryString en caso de existir
         *
        */

        function uriFormateada():string{
            //validamos si existe una queryString con SERVER['QUERY_STRING']
            $query=$_SERVER['QUERY_STRING'] ?? 'SIN QUERY';
            $uriActual=$_SERVER['REQUEST_URI'] ?? 'SIN URI';

            //dar formato y regresamos
            return rtrim(ltrim(str_replace($query,'',$uriActual),'/'),'?');

        }

        echo "$abre_p <strong>Uri Actual Sin ?QueryString</strong>: ".uriFormateada()."$cierra_p";

    ?>

    <!--13. Variables superglobales. Crea una función que nos devuelva el metodo por el que se
        ha solicitado la página actual (GET, POST, etc.)-->
    <?php
        //$_SERVER['REQUEST_METHOD'] --> regresa metodo de petición con el que se accede a la pagina

        $anonymMetodoUsado=fn()=> $_SERVER['REQUEST_METHOD'] ?? 'NO SE ESPECIFICA EL METODO';

        echo "$abre_p <strong>M&eacute;todo usado</strong>: ".$anonymMetodoUsado().$cierra_p;
    ?>

</body>
</html>