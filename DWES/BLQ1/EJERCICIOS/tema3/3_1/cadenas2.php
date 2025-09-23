<?php
    //AndresGiraldo DAW Semipresencial
    $atr_title="Ejercicio de Cadenas 2";
    //variable url
    $url ='http://username:password@hostname:9090/path?arg=value#anchor';
    //Utiliza la función parse_url para extraer de la url las siguientes partes

    $componentesUrl= parse_url($url);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="author" content="AndresGiraldo">
    <title> <?= $atr_title;?> </title>
</head>
<body>
    <header><h1><?= $atr_title; ?> </h1></header>
    <main>
        <article>
            <header><h2>Extraer elementos de una Url</h2></header>
            <p>
                <strong>Url:</strong> <?= $url; ?>
            </p>
        </article>
        <article>
            <header><h2>Elementos extraidos de la Url</h2></header>
            <ul>
                <!-- insertamos li si existe un elemento de los solicitados-->
                <!--El protocolo utilizado (en el ejemplo http).-->
                <?=  (!$componentesUrl['scheme']) ? "<li>No se encontró protocolo para extraer</li>" : "<li> Protocolo: $componentesUrl[scheme] </li>";?>
                <!--El nombre de usuario (en el ejemplo username).-->
                <?= (!$componentesUrl['user']) ? "<li>No se encontró usuario para extraer</li>" : "<li> Usuario: $componentesUrl[user] </li>";?>
                <!--El path de la url (en el ejemplo /path)-->
                <?= ($componentesUrl['path']) ? "<li> Path: $componentesUrl[path] </li>" : "<li>No se encontró un path para extraer</li>";?>
                <!--El querystring de la url (en el ejemplo arg=value)-->
                <?= ($componentesUrl['query']) ? "<li>QueryString: $componentesUrl[query] </li>" : "<li>No se encontro una ueryString para extraer.</li>"; ?>
            </ul>

        </article>
    </main>
</body>
</html>
