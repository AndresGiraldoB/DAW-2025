<!--Andres Giraldo B DAW Semipresencial-->

<!--En la página de la lógica de negocio, crea un array con varios datos de ejemplo de los
campos del formulario y en el archivo de la vista, muestra esos datos en una tabla.
Haz que, al enviar el formulario con los datos correctos del formulario, se
añada una nueva entrada en el array.-->

<?php
//array de datos de prueba
$datosPrueba=array(
        array(
                'nacimiento'=>'1970-09-11',
                'email'=> 'pepemaster@proton.com',
                'observaciones' => 'revisar configuración del entorno',
        ),
        array(
                'nacimiento'=>'1990-12-25',
                'email'=> 'adminbd@proton.com',
                'observaciones' => 'configurar puertos de conexión a la BD',
        ),
        array(
                'nacimiento'=>'1999-02-07',
                'email'=> 'backdev@olemail.com',
                'observaciones' => 'reasignar roles para modificar datos NV2',
        ),
        array(
                'nacimiento'=>'1976-06-01',
                'email'=> 'jefedeequipo@proton.com',
                'observaciones' => 'revisar solicitudes del equipo de desarrollo',
        ),
);


//evaluar si se ha enviado por el metodo POST el formulario
if($_SERVER['REQUEST_METHOD'] == 'POST'){

    //asignamos los valores de los campos a variables
    //limpiamos de espacios iniciales y finales con trim
    //filtramos caracteres especiales htmlspecialchars
    $fechaNacimiento = trim(htmlspecialchars($_POST['nacimiento']));
    $email = trim(htmlspecialchars($_POST['email']));
    $observaciones = trim(htmlspecialchars($_POST['observaciones']));

    //variable bool para verificar que todo esta bien
    $valido=true;

    //validar que los datos no estén vacíos
    if(!empty($fechaNacimiento) && !empty($email) && !empty($observaciones)){
        // DateTime::createFromFormat('formatoFecha','fecha') -> regresa fecha o false si no es posible convertir la fecha al format

        /*
        echo !DateTime::createFromFormat('Y-m-d',$fechaNacimiento)
            ? "<p class='error-msj'>Error en la fecha</p>"
            : "<p class='v-contenido'> Fecha de nacimiento : $fechaNacimiento</p>";
        //filter_var(email,VALIDATE_FORMAT)--> regresa la variable filtrada o false si no es posible
        echo !filter_var($email, FILTER_VALIDATE_EMAIL)
            ? "<p class='error-msj'>Error en la email</p>"
            : "<p class='v-contenido'> Email : $email</p>";
        echo "<p class='v-contenido'>Observaciones: $observaciones</p>";*/
        if(!DateTime::createFromFormat('Y-m-d',$fechaNacimiento)){
            $valido=false;
            echo "<p class='error-msj'>Error en la fecha</p>";
        }else{
            echo "<p class='v-contenido'> Fecha de nacimiento : $fechaNacimiento</p>";
        }

        if(!    filter_var($email, FILTER_VALIDATE_EMAIL)){
            $valido=false;
            echo "<p class='error-msj'>Error en la email</p>";
        }else{
            echo "<p class='v-contenido'> Email : $email</p>";
        }

        echo "<p class='v-contenido'>Observaciones: $observaciones</p>";
    }else{
        $valido=false;
        echo "<p class='error-msj'>Error los campos del formulario son obligatorios </p>";

    }

    //en caso de todo estar bien continuamos el flujo y añadimos registro nuevo
    if($valido){
        $datosPrueba[]=array(
                'nacimiento'=>$fechaNacimiento,
                'email'=>$email,
                'observaciones'=>$observaciones,
        );
    }
}else{//en caso de no ser enviado establecemos a '' las variables
    $fechaNacimiento='';
    $email='';
    $observaciones='';
}

//require apunta a documento vista
require './views/ejercicio_5_8.view.php'; //inserta el contenido antes del header del formulario por esto se pone al inicio

?>