<?php
    function buscarCancion($buscarTexto,$buscarEn, $generoMusical ){



        //array de canciones
        $canciones=array(
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

?>


