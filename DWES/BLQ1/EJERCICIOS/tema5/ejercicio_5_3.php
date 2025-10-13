<!--Andres Giraldo B DAW Semipresencial-->
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="AndresGiraldoB">
    <title>Ejercicio 3-5</title>
    <style>
        .error-msj{
            color:red;
            font-size: 20px;
            font-weight: bold;
        }
        .valid{
            text-align: center;
            width: 100%;
            background-color: cornflowerblue;
            color: honeydew;
            border-radius: 5px;

        }
        .valid p{
            text-shadow: 2px 2px 3px rgba(5, 5, 5, 0.4),
                        3px 3px 5px rgba(0, 103, 103, 0.6);
            font-weight: bolder;
            font-size: 2rem;
            padding: 5%;
        }
    </style>
</head>
<body>
    <h1>Ejercicio 3-5</h1>
    <p>
        3. Crea una página llamada ejercicio_5_3.php que reciba como parámetro (GET) un
        nombre y muestre el texto ‘Bienvenido nombre!!!’ donde nombre será el pasado por
        parámetro.
    </p>
    <?php if($_SERVER['REQUEST_METHOD'] == 'GET'  && isset($_GET['nombre'])) : ?>
        <!--buscamos el parámetro pasado por get-->
        <?php $nombre=$_GET['nombre']; ?>

        <?php if(empty($nombre) || trim($nombre) === "" ) : ?> <!--si el parámetro esta vacio mostramos el formulario y error-->

            <form action="<?= $_SERVER['PHP_SELF'];?>" method="GET">
                <div>
                    <label for="nombre">Nombre:</label>
                    <input type="text" name="nombre" id="nombre">
                    <p class="error-msj">
                        Error el nombre esta vacío
                    </p>
                </div>
                <input type="submit" value="Enviar">
            </form>
        <?php else:?> <!--en caso de no estar vacio limpiamos espacios trim() y mostramos-->
            <?php $nombre=trim($nombre);?>
            <div class="valid">
                <p>Bienvenido <?=$nombre;?></p>
            </div>
        <?php endif;?>
    <?php else: ?>
        <!--uso de metodo GET-->
        <form action="<?= $_SERVER['PHP_SELF'];?>" method="GET">
            <div>
                <label for="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre">
            </div>
            <input type="submit" value="Enviar">
        </form>
    <?php endif; ?>
</body>
</html>
