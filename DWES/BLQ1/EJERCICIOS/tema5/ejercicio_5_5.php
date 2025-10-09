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
    <title>Ejercicio 5-5</title>
</head>
<body>

<h1>Ejercicio 5-5</h1>

<p>
    5. Como al entrar por primera vez, no hay datos en POST, obtendremos un error al
    intentar acceder a las variables que no están definidas. Soluciona el problema de los
    parámetros no enviados del ejercicio anterior.
</p>
<ul>
    <li>
        Primero comprobando si se hay datos en POST con:
        if ($_SERVER['REQUEST_METHOD'] === 'POST') { … }
    </li>
    <li>
        Segundo utilizando el operador de fusión nula ¿?
        $fecha = $_POST['fecha'] ?? "";
        Analiza cuál de las dos opciones es mejor o si sería preferible implementar solamente
        una de las dos.
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

    <?php
        //comprobamos si se ha enviado por el método POST
        /*if($_SERVER['REQUEST_METHOD'] === 'POST'){
            //en caso de ser accionado el submit method POST

            $fechaNac=$_POST['nacimiento'];
            $email=$_POST['email'];
            $observaciones=$_POST['observaciones'];

            echo "<ul> <li>fecha de nacimiento $fechaNac</li> <li>email $email</li>"
                ."<li>observaciones $observaciones</li></ul> " ;
        }*/
        //con el operador de fusion null si es nul asignamos  cadena vacía
        $fechaNac=$_POST['nacimiento'] ?? '';
        $email=$_POST['email'] ?? '';
        $observaciones=$_POST['observaciones'] ?? '';

        echo "<ul> <li>fecha de nacimiento $fechaNac</li> <li>email $email</li>"
            ."<li>observaciones $observaciones</li></ul> " ;
    ?>

    <!--Analiza cuál de las dos opciones es mejor o si sería preferible implementar solamente
        una de las dos.
       R//me parece que por seguridad y para poder en caso tal mostrar errores es mejor evaluar si se ha enviado el
       formulario-->




</div>

</body>
</html>

