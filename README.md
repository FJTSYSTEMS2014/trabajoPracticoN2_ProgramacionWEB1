# Patagonian | IUPA > Programación Web 1

## Manejo de clases y constructores
---
title: "Trabajo Practico Nº:2 - Manejo de Clases y Constructores “Para este trabajo se utilizan los conceptos vistos en clase, y el repositorio público que se comento en la clase nº 6."
author: "**Ing. Francisco Tscherig**"
date: "26/11/2020"
---
[![N|Solid](https://i.ibb.co/Lx0x9VH/iupa.png)](https://iupa.edu.ar/campus/login/index.php)

### Ejercicios
Modificar el código en [`/src/ejercicios.js`](/src/ejercicios.js)
para que se controlen los errores en caso de ocurrir alguno.

| 1 | 1. Crea una Clase para definir a un Usuario genérica.
// Definir la clase "User".
//
// Debe tener las siguientes caracteristicas:
//   - "username": Nombre de usuario.
//     Propiedad texto (String).
//     Default: null.
//   - "age": Edad.
//     Propiedad numÃ©rica (Number).
//     Default: null.
//   - "password": ContraseÃ±a.
//     Propiedad texto (String).
//     Default: null.
//   - "loggedIn": Usuario logueado?
//     Propiedad Booleano (Boolean).
//     Default: false (Falso).
//   - "login(): Debe definirse un mÃ©todo que
//     establezca la propiedad "loggedin" en
//     `true` cuando el valor que se pasa por
//     parÃ¡metro es igual al 'password' de la
//     instancia actual.
//     Al llamar al mÃ©todo "login()", debe imprimirse el
//     texto 'Usuario [username] ha iniciado sesiÃ³n' si
//     el 'password' ingresado es correcto, o el texto
//     'ContraseÃ±a incorrecta' si la misma es
//     incorrecta.

//console.info('Usuario [username] ha iniciado sesión');

| 2 |  =====================================================
 Crear la clase "Vendedor" a partir de la clase
// "User".
//
// Ahora, el Vendedor debe poder generar una venta.
// Para ello, se debe agregar un método "vender" al cuál
// se le indique una descripción del producto vendido
// por parÃ¡metro. Las ventas deben guardarse en un array
// de ventas interno de la instancia.
//
// Para poder realizar la acción de "vender", el usuario
// debe haber iniciado sesión mediante el método
// "login()" definido en la clase padre.
//
// Documentación recomendada:
**https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push**

| 3 |  Crear la clase "Comprador" a partir de la clase
// "User".
// Ahora, el Comprador debe poder generar una compra.
// Para ello, se debe agregar un método "comprar",
// al cuál se le indique una instancia de Vendedor
// que será quien le ha vendido el producto, y una
// descripción del producto vendido.
//
// Para poder realizar la acción de "comprar", el usuario
// debe haber iniciado sesión mediante el mÃ©todod
// "login()" definido en la clase padre.
//
// Desde el metodo "comprar" se debe agregar el
// producto vendido al vendedor, e imprimir el siguiente
// texto de ejemplo:
/*
console.info([
  'El vendedor [vendedor.username]',
  ' ha vendido [descripción producto]',
  ' a [comprador.username]',]);



|4| // Modificar las clases anteriores y agregar un
// "constructor" que reciba por parámetros
// los valores de las propiedades "username",
// "password" y "age".

|5| =====================================================
//  Modificar las clases anteriores y agregar un
// mÃ©todo "esMayor()" que devuelva `true` si el usuario
// es mayor de edad (`age >= 18`).

|6| =====================================================
//  Modificar las clases anteriores, de forma tal que
// solo las clases hijas de "User" (o sea: "Vendedor"
// y "Comrpador") verifiquen si "esMayor()" es `true`
// para hacer "login()". Si no es mayor de edad, debe
// mostrar un mensaje "Debes ser mayor de edad" e
// impedir el "login()" definido en "User".








