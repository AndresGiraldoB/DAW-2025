<!--Andres Giraldo B DAW Semipresencial-->

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="AndresGiraldoB">
    <style>
        form[name="miForm"]{
            width: max-content;
            margin-left: auto;
            margin-right: auto;
            background-color: antiquewhite;
        }
        .bloque{
            display: block;
            width: 100%;
        }
        .btn{
            width: 100%;
            background-color: cornflowerblue;
            color: aliceblue;
        }
        .btn:hover{
            background-color: blueviolet;
        }
        .error-msj{
            background-color: red;
            color: aliceblue;
            font-size: 18px;
            font-weight: bolder;
            width: max-content;
            padding: 3%;
        }
        .v-contenido{
            width: max-content;
            background-color: aquamarine;
            font-size: 16px;
            font-weight: bolder;
            padding: 3%;
        }
        .view{
            margin-right: auto;
            margin-left: auto;
            width: max-content;

        }
    </style>
    <title>Ejercicio 5-7</title>
</head>
<body>

<h1>Ejercicio 5-7</h1>

<p>
    7. Separa el ejercicio anterior en dos ficheros:
    -Uno tendrá la validación del formulario, ejercicio_5_7.php, en el que
    pondremos la parte del if ($_SERVER …. y al final del código el require a
    ejercicio_5_7.view.php
</p>
<p>
    El otro contendrá el resto del código html, excepto el contenido php del if que
    pusimos en el otro archivo, lo llamamos ejercicio_5_7.view.php
</p>
<p>
    Comprobar que funciona como antes de separar el código.
</p>
<p>
    Muestra en el formulario los valores que se hayan pasado en la petición POST
    (asignando el valor de las variables a value=”variable”) e inicializar las variables
    a cadena vacía si no se recibe nada por ser la primera llamada a la página.
    Por ejemplo, para el email, en el formulario asignaremos el valor poniendo
    value="&lt;?= $email ?&gt;"
</p>
<p>
    Crea una carpeta llamada views, mueve a ella el archivo del formulario
    renombrándolo con la extensión .view.php y actualiza la referencia a este
    archivo en el require.
</p>

<form action="<?=$_SERVER['PHP_SELF'];?>" method="POST" name="miForm">
    <fieldset>
        <legend>Datos Personales</legend>
        <!--relacionamos los campos con el valor del value con esto si
        cargamos por primera vez la pagina no genera error-->
        <div>
            <label for="nacimiento" class="bloque">Fecha de Nacimiento</label>
            <input type="date" id="nacimiento" name="nacimiento" class="bloque" value="<?= $fechaNacimiento;?>">
        </div>
        <div>
            <label for="email" class="bloque">Email</label>
            <input type="email" id="email" name="email" class="bloque" value="<?= $email;?>">
        </div>
        <div>
            <label for="observaciones" class="bloque">Observaciones</label>
            <textarea id="observaciones" name="observaciones"  class="bloque" >
                <?= $observaciones;?>
            </textarea>
        </div>
    </fieldset>
    <input type="submit" value="Enviar" class="btn" name="Enviar">
</form>



</body>
</html>
