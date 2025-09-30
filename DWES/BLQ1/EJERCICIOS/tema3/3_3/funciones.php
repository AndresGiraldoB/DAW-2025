<?php //AndresGiraldoB 2DAW Semipresencial

    /*
    6.Funciones. Queremos crear una función llamada insert que nos genere una sentencia
    insert into en sql.
    • Para ello la función recibirá dos parámetros:
    o El nombre de la tabla
    o Un array asociativo que contendrá los nombres y valores de los
    campos de la tabla.
    • La sentencia resultante tendrá la siguiente forma:
    o INSERT INTO nombre_tabla (nombres campos separados por comas)
    VALUES (valores campos separados por comas con el carácter ‘:’
    delante)
    • De momento no haremos nada con los valores de los campos.
    • Ayuda: utiliza las funciones sprintf, implode y array_keys.

    array_keys — Devuelve todas las claves o un conjunto de las claves de un array
    implode(string $separator, array $array): string
    sprintf — Devuelve una string formateada -> sprintf(string $format, mixed ...$values): string

    Manejo de tipos
    Tipo	Especificadores
    string	s
    int	d, u, c, o, x, X, b
    float	e, E, f, F, g, G, h, H

    marcador de orde $ ejemplo %$s _> remplasara por una cadena y se pasara como segundo parametro
    %	Un carácter de porcentaje literal. No se necesita ningún argumento. ejemplo %1\$s sera el primero que se pasa
    a sprintf (formato, primerParametro,...)

    */

    function insert($nombreTabla, $camposValores){

        // validamos que se pasen los parametros requeridos
        if(!$camposValores){
            //termina el flujo de la funcion
           die ("Error al usar la funci&oacute; insert, falta el nombre de la tabla");

        }
        if(!$nombreTabla){
            die("Error falta el array asociativo con los campos y valores a insertar");
        }
        //si recibimos los parametros
        //aplicamos implode en el array devuelto por array_keys con el array de keys de camposValores
        $arrayCampos = implode(', ',array_keys($camposValores));
        //aplicamos implode directamente al array camposValores y este opera sobre el valor del array asociativo
        //$arrayValores="'".implode("','", $camposValores)."'";
        //regresar implode con separador ',' y con ':' delante
        $arrayValores=":".implode(",:", $camposValores);
        //construimos la sentencia de Sql usando sprintf para dar formato y remplazar o insertar elementos en la string
        $sentenciaSql=sprintf("INSERT INTO %1\$s (%2\$s ) VALUES (%3\$s )",$nombreTabla,$arrayCampos,$arrayValores);
        echo $sentenciaSql;
    }

    /*
     * 7. Funciones. A partir del ejercicio anterior, crea la función insert2 que reciba los mismos
        parámetros más un parámetro booleano para indicar si queremos generar la query con
        los nombres de los campos o no.
        • El parámetro tendrá el valor true por defecto.
        • Si su valor es true generará la query igual que en el ejercicio anterior, pero si
        es false la generará así:
        o INSERT INTO nombre_tabla VALUES (valores campos separados por
        comas con el carácter ‘:’ delante)
     * */

    function insert2($nombreTabla,$arrayCamposValores,$nombresDeCampos = true){
        if(!$arrayCamposValores){
            //termina el flujo de la funcion
            die ("Error al usar la funci&oacute; insert, falta el nombre de la tabla");

        }
        if(!$nombreTabla){
            die("Error falta el array asociativo con los campos y valores a insertar");
        }

        //campos
        $campos=implode(',',array_keys($arrayCamposValores));
        //valores extraidos aplicando implode directamente al array asociativo y nos regresa los valores
        $valores=":".implode(',:',$arrayCamposValores);

        //construcción de la cadena con sprintf definimos format
        $sqlString="INSERT INTO %1\$s ";
        $sqlString.= $nombresDeCampos ? "(%2\$s) VALUES (%3\$s)" : "VALUES (%3\$s)";

        $sentenciaSql=sprintf($sqlString,$nombreTabla,$campos,$valores);
        echo $sentenciaSql;

    }

    /*
     * 8. Funciones. Repite el ejercicio anterior con los siguientes cambios:
        • La cadena resultante se pasará por referencia.
        • Pasaremos la cadena de la siguiente forma:
        o INSERT INTO tabla (campos) VALUES (valores)
        • Dentro de la función sustituiremos lo siguiente:
        o El texto tabla por el nombre de la tabla.
        o El texto campos por los nombres de los campos separados por
        comas
        o El texto valores por los nombres de los campos separados por comas
        y el carácter ‘:’ delante.
     */

    //insert3
    function insert3($nombreTabla,$arrayCamposValores,&$resultado){

        if(!$arrayCamposValores){
            //termina el flujo de la funcion
            die ("Error al usar la funci&oacute; insert, falta el nombre de la tabla");

        }
        if(!$nombreTabla){
            die("Error falta el array asociativo con los campos y valores a insertar");
        }
        //comprobamos si se pasa la cadena
        if($resultado !== 'INSERT INTO table (fields) VALUES (values)'){
            die ("Error el segmento inicial de la sentencia debe ser: 'INSERT INTO table (fields) VALUES (values)'");
        }
        //en caso de que no se pase, se pase a null o undefined se pasa el inicio de la cadena
        //$resultado = $resultado ?? "INSERT INTO table (fields) VALUES (values)";

        //creamos un string con las claves y valores
        $campos=implode(',',array_keys($arrayCamposValores));
        $valores=":".implode(',:',$arrayCamposValores);
        //creamos un array con los valores a buscar y remplazar dentro de la cadena
        $camposAnteriores=array('table','fields','values');
        //creamos un array con los nuevos campos a remplazar buscara A[0] remplaza por B[0]
        $valoresNuevos=array($nombreTabla,$campos,$valores);

        //pasamos un array con los campos anteriores, array con los campos nuevos, la string donde buscamos y remplazamos
        $resultado=str_replace($camposAnteriores,$valoresNuevos,$resultado);

        return $resultado;
    }

    /*
     * Funciones, tipificación estricta. Modifica el ejercicio anterior para forzar a las
        funciones que utilicen tipos de tatos en los parámetros pasados.
     * */

    function insert4(string $nombreTabla, array $arrayCamposValores,string &$resultado):string {
        if(!$nombreTabla)
            die("Error falta el nombre de la tabla");
        if(!$arrayCamposValores)
            die("Error falta el array con los campos y valores de la tabla a modificar");
        if($resultado !== 'INSERT INTO table (fields) VALUES (values)')
            die ("Error el segmento inicial de la sentencia debe ser: 'INSERT INTO table (fields) VALUES (values)'");

        //usamos funciones de arrays para construir cadenas apartir del array de campos y valores
        //usaremos sus claves con array_key y los valores accedemos a ellos directamente con implode
        //retronaran strings
        $camposStr=implode(",",array_keys($arrayCamposValores));
        $valoresStr=":".implode(",:",$arrayCamposValores);

        //construimos arrays con los datos a remplazar
        //los arrays pasados a la funcion str_replace se asociaran A[0]=>B[0]
        //remplazamos en la cadena
        $camposAnteriores=array('table','fields','values');
        $valoresNuevos=array($nombreTabla,$camposStr,$valoresStr);

        $resultado=str_replace($camposAnteriores,$valoresNuevos,$resultado);


        return $resultado;
    }

    /*
     * 10. Funciones anónimas. Queremos crear una función anónima que muestre el resultado
        de una operación con dos operandos:
        • Se mostrará por pantalla el primer operando, el símbolo de la operación, el
        segundo operando, el símbolo = y el resultado de la operación
        • La operación podría ser: suma, resta, multiplicación, etc.
        • Ejemplo de salida: 5 + 3 = 8
        • La idea es que la función reciba como parámetro un closure que se encargue
        de realizar la operación, de forma que podamos llamar distintas veces a la
        misma función cambiando el closure para distintas operaciones.*/
        $operando=function(closure $operacion){
            return $operacion;
        };
        //suma
        $suma=$operando(function(int $num1,int$num2):string{
            return "$num1 + $num2 = ".($num1 + $num2);
        });
        //resta
        $resta=$operando(function(int $num1,int $num2):string{
            return "$num1 - $num2 = ".($num1 - $num2);
        });
        //multiplicación
        $multiplicar=$operando(function(int $num1,int $num2):string{
            return "$num1 * $num2 = ".($num1 * $num2);
        });
        //dividir
        $dividir=$operando(function(int $num1,int $num2):string{
           return "$num1 / $num2 = ".($num1 / $num2);
        });





?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="AndresGiraldoB">
    <title>Funciones</title>
</head>
<body>
    <h1>Ejercicios 3-3 Funciones</h1>
    <p>
       6.LLamar a función insert(nombreTabla,arrayAsociCamposValores)

    </p>
    <?php
      $camposV=array('nombre'=> 'andres',
                       'edad'=> 39,
                       'programa'=>'DAW');

      insert('MiTabla',$camposV);



      ?>

    <p>
        7. funci&oacuten insert2(nombreTabla, arrayCamposValores, boolCamposConNombre)
    </p>
    <?php
        $misDatos=array(
                'type'=>'persona',
                'name'=>'Anais',
                'age'=>34
        );
        insert2('MiOtraTabla',$misDatos);

        echo "<p>ahora con el par&aacute;metro referente a query con nombres de campo pasamos false</p>";
        insert2('MiOtraTabla',$misDatos,false);
    ?>


    <p>
        8.
    </p>
    <?php
        $a='INSERT INTO table (fields) VALUES (values)';
        insert3('JUGADORES',$misDatos,$a);
        echo $a;
    ?>

    <p>
        9.tipificaci&oacute;n estricta de funciones
    </p>
    <?php
        $campeonN= array(
          'nombre'=>'Jhin',
            'rol' => 'Tirador-Mago',
            'dificultad' => 'media',
            'habilidad-pasiva' => 'susurro',
            /*'habilidad-Q' => 'Granada Danzante',
            'habilidad-W' => 'florecer mortal',
            'habilidad-E' => 'p&uacute;blico entregado',
            'habilidad-R' => 'abajo el tel&oacute;n'*/
        );
        $b='INSERT INTO table (fields) VALUES (values)';
        insert4('CAMPEONES',$campeonN,$b);
        echo $b;
    ?>
    <p>
        10.funciones an&oacute;nimas
    </p>
    <ul>
        <?php
        echo "<li>".$suma(3,2)."</li>";
        echo "<li>".$resta(3,2)."</li>";
        echo "<li>".$multiplicar(3,2)."</li>";
        echo "<li>".$dividir(3,2)."</li>";
        ?>
    </ul>

</body>
</html>
