//para crear proyecto de vite

npm create vite@latest

elegimos la configuracion que desamos en el caso del ejercicio
es Vanilla javaScript 

entramos al direcctorio creado e instalamos paquetes 
npm install 

probamos que toddo este bien con npm run dev o start
npm start

directorio public
podemos incluir ficheros estaticos y seran copiados tal cual a <strong>dist/</strong>
vite se encarga de cambiar las referencias automaticamente y los ficheros en este directorio
deben ser referenciados como si estuvieran en la raíz del servidor usaremos logo.png en vez
de public/logo.png


vite se integra al package.json y tendremos una serie de sccrips para
lanzar la aplicacion en modo desarrollo <strong>start</strong> o <strong>build</strong>
en caso de que se quiera empaquetar para produción
buscar si esta <strong>dev</strong> y cambiar por <strong>start</strong>

vite esta configurado por defecto para aplicacaciones SPA sincgle page
esto quiere decir que desde un index se carga el resto de contenido, si queremos
tener una app con varios html o puntos de entrada se debe modificar la configuracion
por defecto de vite, para ello en la raíz del proyecto creamos un fichero 
<strong>vite.config.js</strong> y dentro de este  epecificamos los html que tiene la aplicación y que seran incluidos en el directorio <strong>dist/</strong>


<pre>
<code>
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        page2: resolve(__dirname, 'page2.html'),
      },
    },
  },
})
</code>
</pre>

en el directorio src/ tendremos los ficheros js css y estaticos en public
