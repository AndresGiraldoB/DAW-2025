<!--Andres Giraldo B DAW Semipresencial-->

<!--7. Separa el ejercicio anterior en dos ficheros:
-Uno tendrá la validación del formulario, ejercicio_5_7.php, en el que
pondremos la parte del if ($_SERVER …. y al final del código el require a
ejercicio_5_8.view.php
-El otro contendrá el resto del código html, excepto el contenido php del if que
pusimos en el otro archivo, lo llamamos ejercicio_5_8.view.php
-Comprobar que funciona como antes de separar el código.
-Muestra en el formulario los valores que se hayan pasado en la petición POST
(asignando el valor de las variables a value=”variable”) e inicializar las variables
a cadena vacía si no se recibe nada por ser la primera llamada a la página.
Por ejemplo, para el email, en el formulario asignaremos el valor poniendo
value="</?= $email ?>"
-Crea una carpeta llamada views, mueve a ella el archivo del formulario
renombrándolo con la extensión .view.php y actualiza la referencia a este
archivo en el require.-->

<?php
//require aqui por que al final se inserta antes del header en la vista

//require "./views/ejercicio_5_8.view.php";

//evaluar si se ha enviado por el metodo POST el formulario
if($_SERVER['REQUEST_METHOD'] == 'POST'){

    //asignamos los valores de los campos a variables
    //limpiamos de espacios iniciales y finales con trim
    //filtramos caracteres especiales htmlspecialchars
    $fechaNacimiento = trim(htmlspecialchars($_POST['nacimiento']));
    $email = trim(htmlspecialchars($_POST['email']));
    $observaciones = trim(htmlspecialchars($_POST['observaciones']));
    //validar que los datos no estén vacíos
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
}else{//en caso de no ser enviado establecemos a '' las variables
    $fechaNacimiento='';
    $email='';
    $observaciones='';
}

//require apunta a documento vista
require './views/ejercicio_5_7.view.php'; //inserta el contenido antes del header del formulario por esto se pone al inicio

?>