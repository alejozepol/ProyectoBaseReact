# Repositorio Base para React
_En este reposito encontratas un proyecto base con un compenente presentacional llamado Hola Mundo._

_Este proyecto cuenta con las dependencias para producción de **Eslint**, **Webpack**, **Babel**, **React**, **React-dom** y como dependecias de desarrollo **Webpack**, **Loader para ccs y html**_

## Dependencias de Producción

### Eslint
_Es sencillamente una herramienta de linting para JavaScript y JSX cuya función es la de revisar nuestro código tratando de encontrar errores que podrían provocar problemas de compilación o bien futuros bugs en nuestro desarrollo_

_Tambien nos ayuda a cumplir las **buenas practicas** en la identación y escritura del codigo subrayando los errores_

### Babel
_Es un compilador de JavaScript gratuito y de código abierto que se utiliza principalmente para convertir el código ECMAScript 2015+ en una versión de JavaScript compatible con versiones anteriores que pueden ejecutar los motores JavaScript más antiguos_

### React
_Es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre, han participado en el proyecto más de mil desarrolladores diferentes_

### React-dom
_Proporciona métodos específicos del DOM que pueden ser utilizados en el nivel más alto de tu aplicación como una vía de escape del modelo de React si así lo necesitas. La mayoría de tus componentes no deberían necesitar usar este módulo_

## Dependencias para Desarrollo

### Webpack
_Es un paquete de módulos JavaScript de código abierto. Es un paquete de módulos principalmente para JavaScript, pero puede transformar activos front-end como HTML, CSS e imágenes si se incluyen los complementos correspondientes_

_La configuracion de **webpack** del proyecto transpilar los archivos js, jsx, html y css (pero tambien archivos de preprocesador de css como Sass con extencion .scss)._

_En desarrollo toma los cambios de manera automatico y con el script asignado para produccion crea tambien la carpeta dist_

### Loader para ccs y html
_Los plugin y los loader configuradas en el archivo de webpack nos ayudan a un correcto funcionamiento de la trasnpilacion de los archivos, tambien tiene la confiracion para la comilacion de la imagenes con un nombre hexadecimal y la organizacion de archivos para paso a produccion de una manera optimizada_ 
_Esto con el fin de no tener problemas en el momento de pasar nuestro proyecto a produccion y que todos los navegadores puedan ejecutar nuestro codigo sin ningun problema_

## Comenzando 🚀
_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Instalación 🔧

#### Clonar
_Clona el proyecto puedes descargarlo en una carpeta comprimido desde el boton verde de clonar o descargar_

_tambien puedes clonarlo con el siguiente comando (recuerda que para poder clonar el proyecto debes tener instalado git en tu computador)_

```
git clone https://github.com/alejozepol/ProyectoBaseReact.git
```

#### Instalar paquetes

Debes instalar los paquetes utilizando NPM el cual te va a crear una carpeta node_modulos con cada una de las dependencias. Utiliza el siguiente comando (recuerda que para tu computador reconozca el comando NPM debes tener instalado node.js puedes descargarlo en https://nodejs.org/es/)

```
NPM install
```

_si quieres actualizar los paquetes a la ultima version disponible debes ejecutar el siguiente comando_
```
NPM update
```

## Deployment 📦

_Despues de tener todos los paquetes requeridos instalados puedes ejecutar el proyecto de la siguiete manera:_

### Modo Desarrollo 🛠️

```
NPM run start
```
Este comando te abrira una ventana en tu navegador predeterminado con un texto "hola mundo" ya listo para que comiences a hacer codigo.

### Modo Producción 🛠️

```
NPM run build
```
_Este comando te crea la carpeta dist la cual es la que se va ha cargar en el hosting de tu preferencia para su utilizacion_

## Contribuyendo 🖇️

_Si quieres contribuir a este proyecto puedes hacer un fork y enviarme un pull requests para integrar tus cambios entre todos podemos hacer un mejor proyecto y ser mencionado en la seccion de autores_

## Autores ✒️

* **Alejandro López Ramírez** - *Desarrollador y consultor de nomina y gestión Humana* - [alejozepol](https://github.com/alejozepol),  http://alejozepol.com, [twitter](https://twitter.com/alejozepol) 

_contactame si necesitas ayuda_

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.

---
⌨️ con ❤️ por [alejozepol](https://alejozepol.com) 😊


