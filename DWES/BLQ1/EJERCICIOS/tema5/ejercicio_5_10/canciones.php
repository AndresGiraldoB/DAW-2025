<?php

//AndresGiraldoB DAW Semipresencial
//array de datos para los géneros musicales


//validar que se envie el formulario
if($_SERVER['REQUEST_METHOD'] === 'POST'){

    $texto_buscar=trim(htmlspecialchars($_POST['texto-buscar']));
    $buscar_en=trim(htmlspecialchars($_POST['buscar-en']));
    $genero_musical=trim(htmlspecialchars($_POST['genero-musical']));

    $erroresFormulario=array();
    $es_valido=true;

    if(empty($texto_buscar)){
        $es_valido=false;
        $erroresFormulario[]="<p class='error-msj'>El campo <strong>Texto a buscar</strong> es obligatorio.</p>";

    }
    if(empty($buscar_en)){
        $es_valido=false;
        $erroresFormulario[]= "<p class='error-msj'>El campo <strong>Buscar en</strong> es obligatorio.</p>";

    }

    if(empty($genero_musical)){
        $es_valido=false;
        $erroresFormulario[]="<p class='error-msj'>El campo <strong>Texto a buscar</strong> es obligatorio.</p>";

    }

    if($es_valido){
        require "./inc/canciones.inc.php";
        $cancionesEncontradas=buscarCancion($texto_buscar,$buscar_en,$genero_musical);

    }
}else{
    $texto_buscar="";
    $buscar_en="";
    $genero_musical="";
}
require "./views/formulario.view.php";
