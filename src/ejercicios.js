// Importo la función "imprimir" desde "utils.js".
// Notar el uso de "desestructuración".
//import { imprimir } from './utils';

// Al iniciar, borro lo que hay en la consola actualmente:
console.clear();


console.log("Ejercicio nº1,nº2 y nº3");

class User {
  username = null;
  age= null;
  password=null;
  loggedIn=false;
login(pass){
  const contraseña=123456;
  const contraseñaVend=1266;
  const contraseñaComprador=2222;
if(contraseña===pass&&this.username==='FrankOK'){
 
  console.info('usuario:',[this.username],'ha iniciado sesión',this.loggedIn=true) }
  else if(contraseñaVend===pass&&this.username==='El Señor Vendedor'){
    this.loggedIn=true;
     console.info('usuario:',[this.username],'ha iniciado sesión',this.loggedIn=true) }
  else if(contraseñaComprador===pass&&this.username==='El Señor Comprador'){
      this.loggedIn=true;
       console.info('usuario:',[this.username],'ha iniciado sesión',this.loggedIn=true) }
else  {
  console.info('usuario:',[this.username],': contraseña incorrecta');
  this.loggedIn=false;
}





}}
const test = new User();
test.username='FrankOK';

//contraseña correcta 123456
console.info(test.login(123456));

////////////////////////////////////////////////////////////////   VENDEDOR

class Vender extends User{
  
metodoVender(...algo){


  if (test3.loggedIn===true){
    console.log([test3.username], ' esta logeado');
//const mostrarCompras = (...algo) => algo;

const resultados = new Array (...algo);

console.log('ventas realizadas:',resultados.length,'  productos vendidos: ' ,resultados);


  }
  else{
    console.log([test3.username], 'no esta logeado');
  }
}

}

    const test3=new Vender();
    test3.username='El Señor Vendedor';
    // contraseña vendedor:1266
    console.info(test3.login(1266));
    console.info(test3.metodoVender('Casa','automovil'));

////////////////////////////////////////////////////////////////   COMPRADOR
    
    class Comprar extends User{
  

        metodoComprar(...algo){
        if (test4.loggedIn===true){
          console.log([test4.username], ' esta logeado');
        //const resultado = (...algo) => algo;
      
        const resultado = new Array (...algo);
        //resultados.push.call(this, algo)
         console.log('Compras realizadas:',resultado.length,'productos comprados: ' ,resultado);
         console.info('El vendedor',[test3.username],
          ' ha vendido', resultado,
          ' a ',[test4.username],);
      }
    else{ console.log([test4.username], 'no esta logeado');}}}

      const test4=new Comprar();
      test4.username='El Señor Comprador';
       // contraseña comprador:2222
    console.info(test4.login(2222));
    console.info(test4.metodoComprar('Soporte Escalera'));

///////////
// 4. Modificar las clases anteriores y agregar un
// "constructor" que reciba por parámetros
// los valores de las propiedades "username",
// "password" y "age".
// 5.agregar un método "esMayor()" que devuelva `true` si el usuario
// es mayor de edad (`age >= 18`).

console.log("Ejercicio nº4 y nº5");
class User1 {
    constructor(a,b,c){
    this.username=a;
    this.age=b;
    this.password=c;
  }
  esMayor(){
    if(this.age>=18){
    console.log('El Usuario:',this.username,"es : Mayor de edad");
    }
    else{
      console.log('El Usuario:',this.username," es : Menor de edad")
  } }}
const User1New=new User1(null,null,null);
console.log("username ",User1New.username,"age",User1New.age,"password",User1New.password);

class Vender1 extends User1{
    username='Señor Vendedor';
    age=59;
    password=123456;
  }
const test5=new Vender1();
console.log(" Parámetros Vendedor: ",test5);
test5.esMayor();


class Comprar1 extends User1{

    username='Señor Comprador';
    age=19;
    password=654321;
  
}
const test6=new Comprar1();
console.log(" Parámetros Comprador: ",test6);
test6.esMayor();

// 6. Modificar las clases anteriores, de forma tal que
// solo las clases hijas de "User" (o sea: "Vendedor"
// y "Comrpador") verifiquen si "esMayor()" es `true`
// para hacer "login()". Si no es mayor de edad, debe
// mostrar un mensaje "Debes ser mayor de edad" e
// impedir el "login()" definido en "User".

console.log("Ejercicio nº6");
class User2 {
 
login1(){
  
  if (this.password===123456 && this.username==='Señor Vendedor' ){
    console.log(this.username,'login Ok');
  }
  else if (this.password===654321 && this.username==='Señor Comprador'){
   console.log(this.username,'login Ok');
  }
  else  {
    console.info('Usuario:',this.username,': contraseña incorrecta');
}}}
  
class Vender2 extends User2{
  constructor(a,b,c){
    super();
    this.username=a;
    this.age=b;
    this.password=c;
 
  }

  esMayor2(){
    if(this.age>=18){
    console.log('El Usuario:',this.username,"es : Mayor de edad");
    this.login1();
    }
    else{
      console.log('El Usuario:',this.username," es : Menor de edad");
      console.warn(this.username,':Debes ser Mayor de Edad!');
  } }
}
const test7=new Vender2('Señor Vendedor',59,123456);
console.log(" Parámetros Vendedor: ",test7);

test7.esMayor2();


class Comprar2 extends User2{

  constructor(a,b,c){
    super();
    this.username=a;
    this.age=b;
    this.password=c;
 
  }

  esMayor3(){
    if(this.age>=18){
    console.log('El Usuario:',this.username,'es : Mayor de edad');
    this.login1();
    }
    else{
      console.log('El Usuario:',this.username, 'es : Menor de edad')
      console.warn(this.username,':Debes ser Mayor de Edad!');
  } }
}
const test8=new Comprar2('Señor Comprador',19,654321);

console.log(" Parámetros Comprador: ",test8);
test8.esMayor3();