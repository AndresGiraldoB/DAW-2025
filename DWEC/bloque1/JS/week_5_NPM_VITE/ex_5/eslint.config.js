import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser },
    /*ignores*/
    /*ignore ficheros de configuracion*/
    ignores: ["eslint.config.js", "compiled.js", "dist/**"],
    rules:{
      /*regla para camelCase*/
      camelcase: ["error",{properties: "always"}],
      /*curly llaves {} */
      curly: ["error", "multi"],
      /*comparadores de igualdad forzados a = = = o ! = =*/
      eqeqeq: ["error","always"],
      /*otras*/
      
 
    },
  }

]);
