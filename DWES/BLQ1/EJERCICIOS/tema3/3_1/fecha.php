<?php
    //AndresGiraldo DAW2 Semipresencial
    $atr_title="Ejercicio de Fechas";
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="author" content="AndresGiraldo">
    <title> <?= $atr_title;?> </title>
</head>
<body>
    <h1><?= $atr_title; ?></h1>
    <!--Muestra la fecha y hora actuales con el formato: dd/mm/yyyy hh:mm:ss-->
    <?php
        //time() -> UNIX-TIME equivale a now
        //$fechaAc=  date('d/m/Y h:m:s', time());
        //echo "<p>La fecha y hora actual (dd/mm/yyyy hh:mm:ss) es $fechaAc</p>";
        $fechaDate= new DateTime();//crea fecha hora actual
        echo "<p>La fecha y hora actual (dd/mm/yyyy hh:mm:ss) es ".$fechaDate->format('d/m/Y h:i:s')."</p>";
    ?>
    <!--Muestra el nombre de la zona horaria que se utiliza por defecto.-->
    <?= "<p>La zona horaria utilizada por defecto es: ".(date_default_timezone_get())." </p>"; ?>
    <!--Muestra la fecha de dentro de 45 días.-->
    <?php
        //usando la forma orientado a objetos donde el objeto DateTime llama a la funciones ->
        $fechaDiasDes= clone $fechaDate; //clonamos objeto para asi no modificar el objeto original
        $fechaDiasDes->modify('+45 day');
        echo "<p>La fecha dentro de 45 d&iacute;as sera : {$fechaDiasDes->format('d/m/Y h:i:s')} </p>";
        ?>
    <!--Muestra el número de días que han pasado desde el 1 de enero.-->
    <?php
        //creamos objeto DateTime con fecha de 1 enero de año actual
        $primerDiaDelAnyo= new DateTime('01-01-'.$fechaDate->format('Y'));
        //ahora comparamos para saber dias transcurridos desde principios de año a fecha actual
        $diferencia= $fechaDate ->diff($primerDiaDelAnyo);
        $diasTranscurridos=$diferencia->days;
        //objetos origen DateTime->diff(otraFecha) date_diff()
        echo "<p>Desde ".$primerDiaDelAnyo->format('d/m/Y')." a ".$fechaDate->format('d/m/Y').
            " han pasado ".$diasTranscurridos." d&iacute;as.</p>";
        ?>
    <!--Muestra la fecha y hora actuales de Nueva York.-->

    <?php
        //creamos objeto timeZone
        $zonaH= new DateTimeZone('America/New_York');
        //creamos objeto fecha 'now' ahora, y segundo parámetro pasamos zona horaria
        $horaActualNY=new DateTime('now',$zonaH);
        echo "<p>La fecha y hora actual en Nueva York es: {$horaActualNY->format('d/m/Y H:i:s')} </p>";

    ?>
        <!--Muestra el día de la semana que era el 1 de enero de este año.-->
    <?php
        //clonaremos la fecha del primer dia del año
        $diaUnoAnyo=clone $primerDiaDelAnyo;
        $nombreDia= $diaUnoAnyo->format('l');
        echo "El primer d&iacute;a de este a&ntilde;o fue un {$nombreDia}";
    ?>
</body>
</html>
