# Delilah Restó

API para realizar pedidos del restaurante Delilah Restó. Como cliente podras registrarte para ver el listado de nuestros productos y realizar tu pedido. Los administradores del restaurante podrán recibir y actualizar el estado de los pedidos.


### Pre-requisitos

1. Instale y configure el motor de base de datos [MYSQL](https://www.mysql.com/downloads/).
2. Instale y configure [NodeJS](https://nodejs.org/es/).
3. Debe contar con un editor de codigo, de preferencia [VScode](https://code.visualstudio.com/).
4. Para realizar el testeo debe contar con un programa que te ayude a crear peticiones, puede utilizar [POSTMAN](https://www.postman.com/) o el programa de tu preferencia.


### Instalación 

Estos son los pasos que deberás seguir para tener un entorno de desarrollo ejecutable:

1. Ejecute el comando npm install en su consola de NodeJS para instalar todos los paquetes necesarios para ejecutar el proyecto (dotenv, express, helmet, jsonwebtoken, mysql2, nodemon, sequelize).
```

npm install

```
2. Si desea que en la base de datos esté incluida una informacion de prueba ejecute el archivo databaseInfo.sql para crear la base de datos con la informacion de prueba en las tablas, de lo contrario solo deberá crear una base de datos llamada "delilahresto"  y al empezar a correr el proyecto en su editor de codigo se crearan automaticamente las tablas sin contenido.

3. Cree un archivo .env para guardar las siguientes variables de entorno:
U=**INGRESE AQUI SU USUARIO DE BASES DE DATOS**
P=**INGRESE LA CONTRASEÑA DE SU USUARIO DE BASE DE DATOS**
S=**INGRESE UNA CLAVE SECRETA PARA LA VALIDACION DE LOS JSON WEB TOKENS**

4.Inice el proyecto en la terminal de su editor de codigo ejecutando el comando node server.js para inicar la base de datos y poder empezar a realizar las pruebas.

```

node server.js

```


## Ejecutando las pruebas

Para realizar las pruebas a cada uno de los endpoints debe verificar en el archivo spec.yaml las rutas y realizar las peticiones según la estructura del archivo

## Autores

* **Jhonatan Gomez** - [Delilah Resto](https://github.com/Jhota18/DelilahResto)
