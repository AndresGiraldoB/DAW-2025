<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tipos de datos</title>
</head>
<body>
    <h1>tipos de datos</h1>
    <h2>Boolean</h2>
    <p>
        <?php
        //boolean
        $miBool = false;
        echo "Datos boolean puede ser {$miBool}";
        $miBool = true;
        echo "En cualquier momento se puede cambiar a {$miBool}";
        ?>
    </p>

    <h2>Integer</h2>
    <P>
        <?php $miInt= 5;
        echo "Cualquier n&uacute;mero sin decimales ej: $miInt";
        ?>
    </P>
    <h2>Float</h2>
    <p>
        <?php $miFloat=5.65;
            echo "Cualquier n&uacute;mero con decimales ej: $miFloat";
        ?>
    </p>
    <h2>String</h2>
    <p>
        <?php $miString="Esto es un <strong>String</strong>";// con algo de html incrustado
        echo $miString; ?>
    </p>
    <h2>Null</h2>
    <p>
        Tipo de dato que se usa para indicar que la variable no tiene ningun valor.
        <br>
        Ejemplo: <?php
                    $miNull=null;
                    echo "El valor de una variable null, es : $miNull";
                    ?>
    </p>
</body>
</html>

