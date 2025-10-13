<?php
//AndresGiraldoB DAW semipresencial

    function crearColeccionCanciones(){
        $coleccionCanciones=array(
            array(
                "titulo" => "Sweet Home Chicago",
                "album" => "Greatest Hits",
                "genero" => "Blues"
            ),
            array(
                "titulo" => "So What",
                "album" => "Kind of Blue",
                "genero" => "Jazz"
            ),
            array(
                "titulo" => "Billie Jean",
                "album" => "Thriller",
                "genero" => "Pop"
            ),
            array(
                "titulo" => "Stairway to Heaven",
                "album" => "Led Zeppelin IV",
                "genero" => "Rock"
            ),
            array(
                "titulo" => "Back in Black",
                "album" => "Back in Black",
                "genero" => "Rock"
            ),
        );
        return $coleccionCanciones;
    }

    function buscarCancion($buscarTexto,$buscarEn, $generoMusical ){



        //array de canciones
        $canciones=crearColeccionCanciones();

        //revisar que se debe regresar en la función
    //se regresa la canción o canciones

        //si el genero es diferente a Todos el género debe ser igual al género del array

        //si buscar-en es diferente a ambos buscamos en titulo o album

        $nuevoA=array_filter($canciones,function($cancion)use($buscarTexto,$buscarEn,$generoMusical){
            //genero todos y ambos titulo o album
            //return str_contains($cancion["titulo"],$buscarTexto) || str_contains($cancion["album"],$buscarTexto) ;
            //buscar en x o y genero es igual al genero seleccionado
            if($buscarEn !== 'ambos' && $generoMusical !== 'Todos'){
                return str_contains($cancion["$buscarEn"],$buscarTexto) && $cancion["genero"]===$generoMusical;

            }
            if($buscarEn !== 'ambos' && $generoMusical == 'Todos'){
                return str_contains($cancion["$buscarEn"],$buscarTexto);
            }

            if ($buscarEn === 'ambos' && $generoMusical !== 'Todos'){
                return (str_contains($cancion["titulo"],$buscarTexto) || str_contains($cancion["album"],$buscarTexto))
                        && $cancion["genero"]===$generoMusical;
            }
            if($buscarEn === 'ambos' && $generoMusical === 'Todos'){
                return str_contains($cancion["titulo"],$buscarTexto) || str_contains($cancion["album"],$buscarTexto);
            }

        });

        return !$nuevoA? "sin coincidencias":$nuevoA;
    }




    function mostrarCanciones(){
        $canciones=crearColeccionCanciones();
        return array_map(function($cancion){
            //return "<p>".$cancion['titulo']." ".$cancion['album']." ".$cancion['genero']."</p>";
            return "<li>".implode(", ",$cancion)."</li>";

        },$canciones);
    }

    function mostrarGeneros(){
        $canciones=crearColeccionCanciones();
        $clavesCanciones=array_column($canciones,"genero");
        $clavesCanciones=array_unique($clavesCanciones);
        sort($clavesCanciones);
        return array_map(function($cancion){
            return "<li>".$cancion."</li>";
        },$clavesCanciones);

    }

?>


