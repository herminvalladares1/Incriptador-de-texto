# Encriptador-Desencriptador de Texto

El objetivo de esta aplicación web, es encriptar un texto y desencriptarlo, bajo la regla de sustitución de vocales por string.

## Reglas de sustitución

- **Encriptación de Texto:** Encripta el texto ingresado de acuerdo a las siguientes reglas:
  - La letra "e" es convertida para "enter"
  - La letra "i" es convertida para "imes"
  - La letra "a" es convertida para "ai"
  - La letra "o" es convertida para "ober"
  - La letra "u" es convertida para "ufat"

- **Desencriptación de Texto:** Desencripta el texto ingresado de acuerdo a las siguientes reglas:
  - La letra "enter" es sustituido por "e" 
  - La letra "imes" es convertida por "i"
  - La letra "ai" es convertida por "a" 
  - La letra "ober" es convertida por "o" 
  - La letra "ufat" es convertida por "u"

  ## Regla de entrada y salida de Texto 

  -**Texto de Entrada:** El texto de Entrada a ser encriptado/desencriptado será encriptado siempre que contenga sólo letras minusculas, sin acento y el caracter "espacio", por lo tanto, no encriptará/desencriptará texto que contenga "ñ", numeros, letras mayúsculas, vocales minusculas con acento y/o caracteres especiales.

   -**Texto de Salida:** Será el texto encriptado/desencriptado, de acuerdo al texto de entrada y el proceso aplicado a este, considerando que si el proceso es "Desencriptar", el texto de salida será el inverso al de Encriptar, sustituyendo string por vocal.

## Botón Copiar

- **Copiar al Portapapeles:** El botoón Copiar tiene la función para copiar el texto encriptado o desencriptado al portapapeles; por lo tanto, solo estará en memoria hasta que sea reemplazado por otro contenido en el portapales del sistema operativo.

## ¿Cómo encriptar o Desencriptar?

1. **Encriptar Texto:**
   - Ingresa el texto a encriptar en el área que indica "Ingrese el texto aquí" .
   - Hacer click en botón "Encriptar".
   - Si las reglas para encriptar se cumplen, en la sección donde indica "Ningún mensaje se ha encontrado", aparecerá el texto encriptado.

2. **Desencriptar Texto:**
   - Ingresa el texto a desencriptar en el área que indica "Ingrese el texto aquí" .
   - Hacer click en botón "Desencriptar".
   - Si las reglas para desencriptar se cumplen, en la sección donde indica "Ningún mensaje se ha encontrado", aparecerá el texto desencriptado.

## ¿Cómo copiar el texto de salida encriptado o desencriptado?

**Copiar Texto:**
   - Luego de encriptar o desencriptar, hacer click en botón "Copiar" para copiar el texto de salida al portapapeles del sistema. Al momento de "Copiar", se copiará al portapapeles el texto resultante, se limpiará de texto en la web el área para el texto resultante, en pantalla se visualizará un formulario modal con el enunciado "Texto Copiado!!!!", el texto resultante que está en portapapeles y un boton "Cerrar".

## Excepciones

   - En caso de ingresar un texto encriptado o sin encriptar al área de entrada indicada como "Ingrese el texto aquí", con caracteres especiales o numeros o vocales con acento o el caracter "ñ"(lo que desde aquí denominaremos "caracteres inválidos"), bajo esta misma área y sobre los botones "Encriptar" y "Desencriptar", aparecerá la siguiente advertencia: 

   ```Solo letras minúsculas y sin acentos```

   Esta advertencia desaparecerá cuando se eliminen todos los "Caractere inválidos" del area de entrada de texto.

   - Aun cuando existan "caracteres inválidos", es posible hacer click en botones Encriptar o Desencriptar, pero la aplicación validará la existencia de caracteres inválidos, si los hay entonces no encriptará o desencriptará y mostrará en pantalla un formulario modal con el mensaje "Por favor solo letras en minúsculas y sin acentos" y un boton "Cerrar".

## Requerimientos

   - Un navegador web
   - Si se visualiza de forma remota, actuando el equipo y navegador como cliente, acceso a intenet
   - Tener habilitado soporte y ejecución de código Javascript

## Autor

Desarrollado por Eduardo Oyarzo.
Agosto de 2024
Chile
