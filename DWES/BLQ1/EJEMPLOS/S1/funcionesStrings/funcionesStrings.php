<?php
    //explode: regresa un array de strings con el string pasado como segundo parametro
    //el primer parametro siempre debe ser separador si el string no contiene el separador
    //la función regresa un array con solo una posición y la string dentro de esta.

    $stringDel="ejemplo1, ejemplo2, ejemplo3";
    //usamos la funcion explode
    $resultExplode= explode(',', $stringDel);
    print_r($resultExplode); //Array ( [0] => ejemplo1 [1] => ejemplo2 [2] => ejemplo3 )
    echo "<br>";
    // ahora cambiamos el separador
    $resultExplode= explode('-', $stringDel); //si no encuentra regresa array con solo una posicion
    print_r($resultExplode); //Array ( [0] => ejemplo1, ejemplo2, ejemplo3 )
    echo "<br>";
    //existe la posibilidad de pasar un limit, que lo que hacce es limitar las veces en las que se trocea la string
    $resultExplode= explode(',', $stringDel,2);
    print_r($resultExplode); //Array ( [0] => ejemplo1 [1] => ejemplo2, ejemplo3 )
    echo "<br>";
    // si pasamos limit negativo regresa array con las strings menos las proporcionadas en el lmit negativo, cuenta hacia atras
    $resultExplode= explode(',', $stringDel,-2);
    print_r($resultExplode);//Array ( [0] => ejemplo1 )
    echo "<br>";
    $resultExplode= explode(',', $stringDel,-1);
    print_r($resultExplode);//Array ( [0] => ejemplo1 [1] => ejemplo2 )
    echo "<br>";

    //htmlspecialchars()
    // sirve para escapar caracteres html con el fin de filtrar una cadena de texto y convertir esta en
    //una string, remplaza los caracteres especiales para evitar que sea embebido codigo html
    $miTexto="<a href='https://www.iessanvicente.com'> Texto con html embebido</a>";
    echo $miTexto;
    echo "<br>";
    //uso de htmlspeccialchars para esccapar
    echo htmlentities($miTexto);
    echo "<br>";

    //implode -> join es un alias de implode
    // Une elementos de un array a un string
    $resultExplode= explode(',', $stringDel);
    //uniremos las strings del array de 3 posiciones Array ( [0] => ejemplo1 [1] => ejemplo2 [2] => ejemplo3 ) en una
    //sola string con el separador que pasaremos como primer parametro
    $stringImplode= implode('-#-', $resultExplode);
    print_r($stringImplode);//ejemplo1-#- ejemplo2-#- ejemplo3
    echo "<br>";


    //lcfirst(string):string pone el primer caracter en minusculas
    $primeraMinus="Esto es Un texto de PRUEBA";
    echo lcfirst($primeraMinus); // esto es Un texto de PRUEBA
    echo "<br>";
    //ucfirst regresa la cadena con la primera letra en mayúsculas
    echo ucfirst("texto para probar ucfirst"); //Texto para probar ucfirst
    echo "<br>";
    //strtolower devuelve una string en minusculas
    echo strtolower("TEXTO EN MAY&uacute;SCULAS");//texto en mayÚsculas
    echo "<br>";
    //strtoupper devuelve una string en mayusculas
    echo strtoupper("texto en minúsculas");//TEXTO EN MINúSCULAS
    echo "<br>";
    //ucwords pone en mayuscula la primera letra de una string larga
    echo ucWords("en teoría debe estar la primera letra en mayúsculas");//En Teoría Debe Estar La Primera Letra En Mayúsculas
    echo "<br>";
    //eliminar espacios u caracteres al incio o final de uun string
    //elimna caracteres o espaccios en blanco de un string, si no se pasa caracter segundo parametro elimina espacios en blanco
    //ltrim ellimina espacios o caracteres por la izquierda
    echo ltrim('**cadena de prueba ltrim**','*');
    echo "<br>";
    //rtrim elimna caracteres o espacios por la derecha
    echo rtrim('**cadena de prueba rtrim**','*');
    echo "<br>";
    //trim busca al incio y final de cadena
    echo trim('**!!??cadena de prueba trim**!!??','*'.'?'.'!');
    echo "<br>";

    //remplazar ocurrencias de una subcadena en una cadena
    //str_replace('SubCadenaBuscar','SubCadenaRemplazar','CadenaContenedora') stri_replace insensible a mayus/minus

    echo str_replace('DE','de', 'Base-DE-Datos');
    echo "<br>";

    //str_contains('cadenaContenedora','subCaddenaBuscar'); -> bool
    if(str_contains('El día de hoy','ía'))
        echo "si contiene";
    echo "<br>";
    if(!str_contains('El día de hoy','ÍA'))
    echo "No contiene parece que la subcadena esta en May&uacute;scula";


    //str_ends_with() - Determina si una cadena termina con un substring dado
    //str_starts_with() - Determina si un string comienza con un substring dado
    //stripos() - Busca la posición de la primera ocurrencia en un string, sin distinguir mayúsculas de minúsculas
    //strrpos() - Busca la posición de la última ocurrencia de una subcadena en una cadena
    //strripos() - Busca la posición de la última ocurrencia de un string contenido en otro, de forma insensible a mayúsculas y minúsculas
    //strstr() - Encuentra la primera ocurrencia en un string
    //strpbrk() - Busca un conjunto de caracteres en un string
    //substr() - Devuelve un segmento de string
    //preg_match() - Realiza una búsqueda de coincidencia con una expresión regular estándar

    //str_split() regresa un array con los elementos del string, segundo parametro podemos pasar la longitud de cada elemento
    //del array a devolver ('hola que tal', 3) -> ['hol','a q','ue ',' ta','l'] segundo parametro pocional

    //str_word_count('cadena de texto',format[0 numero palabras encontradas, 1 array de palabras, 2 array asociativo])
    //explode('separador', string, limite el array retorna maximo el n elementos de limit el resto lo regresa en subcadena)
    //str_word_count() cuenta palabras en un string regresa un entero de conteo o un array con las ocurrencias [0,1,2]
    //strlen(string $string) -> regresa el conteo de la longitud
    //ord(string $character) -> regresa código de la letra , chr(int $codepoint): string -> recibe codigo y regresa letra
    //parse_str(string $string, array &$result): void --> regresa array asociativo con los parametros encontrados en la url querystring

    //substr_count(cadena,subcadenaB) devuelve el numero de ocurrencias de sucadenaB en cadena sensible a mayúsculas y minúsculas.
    //strrev(string $string): string -> revierte el string pasado como parametro
    //str_contains()

    //strcmp(string $string1, string $string2): int  regresa la comparacion entre 2 cadenas devuelve un entero 0 iguales -1 o 1 no iguales
    //strcasecmp(string $string1, string $string2): int comparacion de cadenas insencible a mayusculas

    //str_starts_with — Determina si un string comienza con un substring dado
    //str_word_count — Cuenta el número de palabras utilizadas en un string


    //parse_url(string $url, int $component = -1): int|string|array|null|false

    //url
//La URL a analizar.
//
//component
//Puede ser una de las constantes entre PHP_URL_SCHEME, PHP_URL_HOST, PHP_URL_PORT, PHP_URL_USER, PHP_URL_PASS,
//PHP_URL_PATH, PHP_URL_QUERY o PHP_URL_FRAGMENT para recuperar únicamente una parte de la URL como string
// (excepto cuando se proporciona PHP_URL_PORT; en este caso, el valor devuelto será un entero).
//scheme - por ejemplo http
//host
//port
//user
//pass
//path
//query - después del signo de interrogación "?"
//fragment - después del símbolo de almohadilla "#"