<!--//AndresGiraldoB DAW semipresencial-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="AndresGiraldoB">
    <style>
        *{
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
        body{
            background-color: rgba(3, 3, 3, 0.6);
            font-family: sans-serif,"DejaVu Sans";
        }
        main{
            width: 80%;
            margin:3% auto 3% auto;
            max-width: max-content;
            border: 5px groove #176767;
            background-color: rgba(211, 211, 211, 0.6);
            padding: 8%;
            border-radius: 30px;
        }
        main > h1{
            padding-bottom: 10%;
            color: #7d50a4;
            text-shadow: 2px 2px 5px #d0d0d0;
        }
        .box-radio{
            display: inline;
        }
        div{
            width: max-content;
            padding: 2% 0;
        }
        .btn{
            width: 100%;
        }
        .btn:hover{
            background-color: aquamarine;
        }
        .error-msj{
            background-color: #8a1f1f;
            color: #d0d0d0;

        }
        a{
            display: inline-block;
            background-color: #7777d5;
            color: aliceblue;
            padding: 2%;
            margin: 1%;
            border-radius: 5px;
            text-decoration: none;
        }
    </style>
    <title>B&uacute;squeda de canciones</title>
</head>
<!--importamos array con generos musicales-->

<body>
    <main>
        <!--<div>
            "./../canciones.php"
        </div>-->
        <h1>B&uacute;squeda de canciones</h1>
        <form name="busccar-cancion" method="POST" action="<?= $_SERVER['PHP_SELF'];?>">
            <div>
                <label for="texto-buscar">Texto a buscar</label>
                <input type="text" name="texto-buscar" id="texto-buscar">
            </div>
            <div>
                <label>Buscar en:</label>
                <div class="box-radio">
                    <input type="radio" name="buscar-en"  value="titulo" id="b-titulo">
                    <label for="b-titulo">T&iacute;tulos de canci&oacute;n</label>

                </div>
                <div class="box-radio">
                    <input type="radio" name="buscar-en"  value="album" id="b-nombre-album">
                    <label for="b-nombre-album">Nombre de &aacute;lbum</label>
                </div>
                <div class="box-radio">
                    <input type="radio" name="buscar-en"  value="ambos" id="b-ambos-campos" checked>
                    <label for="b-ambos-campos">Ambos campos</label>
                </div>

            </div>
            <div>
                <label for="genero-musical">G&eacute;nero musical:</label>
                <select name="genero-musical" id="genero-musical">
                    <option value="Todos" label="Todos" selected></option>
                    <option value="Blues" label="Blues"></option>
                    <option value="Jazz" label="Jazz"></option>
                    <option value="Pop" label="Pop"></option>
                    <option value="Rock" label="Rock"></option>

                </select>
            </div>
            <input type="submit" value="Buscar" class="btn">
        </form>

        <div>
            <?php if($_SERVER['REQUEST_METHOD'] == 'POST'){
                if($erroresFormulario){
                    foreach ($erroresFormulario as $error){
                        echo $error;
                    }
                }else{
                    foreach ($cancionesEncontradas as $cancion){
                        echo "<p>";
                        foreach ($cancion as $clave=>$valor){
                            echo $clave.": ".$valor." - ";
                        }
                        echo "</p>";
                    }
                }
            } ?>


        </div>

        <div>
            <a href="<?=$_SERVER['PHP_SELF'].'?'.'mostrarCanciones=true' ?>">Mostrar todas la canciones</a>
            <a href="<?=$_SERVER['PHP_SELF'].'?'.'mostrarGeneros=true'?>">Mostrar Géneros en la colección</a>
        </div>
        <div>
            <?php
                if(isset($_GET['mostrarCanciones']) && $_GET['mostrarCanciones']){

                        include "./inc/canciones.inc.php";
                        $misCanciones=mostrarCanciones();
                        echo "<ul>";
                        foreach ($misCanciones as $cancion){
                            echo $cancion;
                        }
                        echo "</ul>";

                }

                if(isset($_GET['mostrarGeneros']) && $_GET['mostrarGeneros']){
                    include "./inc/canciones.inc.php";
                    $misGeneros=mostrarGeneros();
                    echo "<ul>";
                    foreach ($misGeneros as $genero){
                        echo $genero;
                    }
                    echo "</ul>";
                }

            ?>


        </div>
    </main>

</body>
</html>
