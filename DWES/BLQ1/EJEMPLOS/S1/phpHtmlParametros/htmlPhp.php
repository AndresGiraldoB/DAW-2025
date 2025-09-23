<!--declaracion de variables y posterior uso-->
<?php $tituloVar="Este es un titulo de prueba dentro de una variable";
$titleAtt="T&iacute;tulo de la P&aacute;gina";
?>
<!-- pasar parametros a scrips por medio de peticiones http get->cuerpo o post->cabeceras
    http://localhost/DWES/BLQ1/EJEMPLOS/S1/phpHtmlParametros/htmlPhp.php?nombre=ANDRES -->
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= $titleAtt; ?></title>
</head>
<body>
<h1><?= $tituloVar;?></h1>
<!-- variable a $_GET['nombreParametro'] trae un array con la informacion del atributo en la peticon http get -> querystring-->
<?php
//siempre comprobar antes de assignar
/*
if(isset($_GET['nombre'])){
     //asignar a variable el valor de la variable nommbre
    $userName=$_GET['nombre'];
}else{
    $userName='Anonimo';
}*/
//otra forma con operador ternario
//$userName = !isset($_GET['nombre']) ? 'Anonymous' : $_GET['nombre'];

//operador coalicencia ??
$userName = $_GET['nombre'] ?? "Anonymous";

//por motivos de seguridad se usa htmlspecialchars($_GET['nombre']) ?? 'Anonymous'
//para evitar que inserten codigohtml embebido en $_GET['']
//datos que vienen de ususarios se deben filtrar con htmlspecialchars()
//http://localhost/DWES/BLQ1/EJEMPLOS/S1/phpHtmlParametros/htmlPhp.php?nombre=<a href='https://www.google.com>ANDRES</a>&edad=<a href='https://www.google.com>34</a>
$edad = htmlspecialchars($_GET['edad']) ?? 'Anonymous';



echo '<p>'.'Nombre: ('.$userName.') </p>';
echo '<p>Edad: '.$edad.'</p>';

?>

</body>
</html>
