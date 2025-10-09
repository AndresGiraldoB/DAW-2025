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
        .error-msj{
            background-color: red;
            color: aliceblue;
            font-size: 18px;
            font-weight: bolder;
            width: 100%;
            padding: 3%;
        }
        .v-contenido{
            width: 100%;
            background-color: aquamarine;
            font-size: 16px;
            font-weight: bolder;
            padding: 3%;
        }
    </style>
    <title>Ejercicio 5-6</title>
</head>
<body>

<h1>Ejercicio 5-6</h1>

<p>
    6. Modifica el ejercicio anterior realizando las validaciones oportunas en los campos de
    fecha, email y observaciones.
</p>
<ul>
    <li>
        Eliminar espacios vacíos (trim)
    </li>
    <li>
        Verificar código html (specialchars)
    </li>
    <li>
        Campo fecha con el formato adecuado (createFromFormat):
        if (!DateTime::createFromFormat('Y/m/d',$fecha)){ …} else { … }
    </li>
    <li>
        Campo email con el formato correcto (filter_var):
        if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) { … } else { … }
    </li>

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
    <?php if($_SERVER['REQUEST_METHOD'] == 'POST'){

        //asignamos los valores de los campos a variables
        //limpiamos de espacios iniciales y finales con trim
        //filtramos caracteres especiales htmlspecialchars
        $fechaNacimiento = trim(htmlspecialchars($_POST['nacimiento'])) ?? '';
        $email = trim(htmlspecialchars($_POST['email'])) ?? '';
        $observaciones = trim(htmlspecialchars($_POST['observaciones'])) ?? '';

        if(!empty($fechaNacimiento) && !empty($email) && !empty($observaciones)){
            // DateTime::createFromFormat('formatoFecha','fecha') -> regresa fecha o false si no es posible convertir la fecha al format


            echo !DateTime::createFromFormat('Y-m-d',$fechaNacimiento)
                ? "<p class='error-msj'>Error en la fecha</p>"
                : "<p class='v-contenido'> Fecha de nacimiento : $fechaNacimiento</p>";
            //filter_var(email,VALIDATE_FORMAT)--> regresa la variable filtrada o false si no es posible
            echo !filter_var($email, FILTER_VALIDATE_EMAIL)
                ? "<p class='error-msj'>Error en la email</p>"
                : "<p class='v-contenido'> Email : $email</p>";
            echo "<p class='v-contenido'>Observaciones: $observaciones</p>";

        }else{

            echo "<p class='error-msj'>Error los campos del formulario son obligatorios</p>";

        }
    }

    ?>
</div>

</body>
</html>

