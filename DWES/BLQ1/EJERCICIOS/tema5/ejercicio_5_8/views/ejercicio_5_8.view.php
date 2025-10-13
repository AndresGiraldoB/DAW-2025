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
        table{
            margin-left: auto;
            margin-right: auto;
            padding: 3%;
        }
        th,td{
            border: 1px solid black;
        }
    </style>
    <title>Ejercicio 5-8</title>
</head>
<body>

<h1>Ejercicio 5-8</h1>

<p>
    8.En la página de la lógica de negocio, crea un array con varios datos de ejemplo de los
    campos del formulario y en el archivo de la vista, muestra esos datos en una tabla.
</p>
<p>
    Haz que, al enviar el formulario con los datos correctos del formulario, se
    añada una nueva entrada en el array.
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

<table>
    <tr>
        <th>email</th>
        <th>fecha de nacimiento</th>
        <th>observaciones</th>

    </tr>
    <?php foreach($datosPrueba as $dato): ?>
        <tr>
            <td><?=$dato['email'];?></td>
            <td><?=$dato['nacimiento'];?></td>
            <td><?=$dato['observaciones'];?></td>
        </tr>
    <?php endforeach; ?>
</table>

</body>
</html>
