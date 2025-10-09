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
    </style>
    <title>Ejercicio 5-4</title>
</head>
<body>

    <h1>Ejercicio 5-4</h1>

    <p>
        Crea un formulario que tenga los siguientes campos (ejercicio_5_4.php):
    </p>
    <ul>
        <li>Fecha de nacimiento</li>
        <li>Email</li>
        <li>Observaciones</li>
    </ul>

    <form action="<?=$_SERVER['PHP_SELF'];?>" method="POST" name="miForm">
        <fieldset>
            <legend>Datos Personales</legend>
            <div>
                <label for="nacimiento" class="bloque">Fecha de Nacimiento</label>
                <input type="date" id="nacimiento" name="nacimiento" class="bloque">
            </div>
            <div>
                <label for="email" class="bloque">Email</label>
                <input type="email" id="email" name="email" class="bloque">
            </div>
            <div>
                <label for="observaciones" class="bloque">Observaciones</label>
                <textarea id="observaciones" name="observaciones"  class="bloque">

                </textarea>
            </div>
        </fieldset>
        <input type="submit" value="Enviar" class="btn" name="Enviar">
    </form>

        <div class="vista">

            <?php $fechaNac=$_POST['nacimiento'];?>
            <?php $email=$_POST['email'];?>
            <?php $observaciones=$_POST['observaciones'];?>

            <?= "<ul> <li>fecha de nacimiento $fechaNac</li> <li>email $email</li> <li>observaciones $observaciones</li></ul> "?>

        </div>
        <!--La primera vez que se llama a la página, ¿qué tipo de petición se realiza?
        R// se realiza una petición GET->

        <!-¿Y cuando se envía el formulario?
        R// depende si en el formulario se usa el method POST o GET-->

</body>
</html>
