//Funcion para extraer datos del formulario HTML
function capturarDatos(){
  console.log("Corriendo capturarDatos()...")
  const nombre = document.getElementById('nombre').value
  const apellido = document.getElementById('apellido').value
  const email = document.getElementById('email').value
  const facultad = document.getElementById('facultad').value
  const carrera = document.getElementById('carrera').value

  crearCookies(nombre, apellido, email, facultad, carrera)
}

//Funcion para guardar los datos extraidos en cookies
function crearCookies(nombre, apellido, email, facultad, carrera){
  console.log("Corriendo crearCookies()...")
  
  //Se establece el tiempo de expiracion de las cookies
  //1 minuto
  var horaExp = new Date()
  horaExp.setTime(horaExp.getTime() + 1/60 * 3600 * 1000)
  console.log("horaExp: "+horaExp.toUTCString())
  
  //Almacenamos los datos en cookies
  document.cookie = "nombre="+nombre+"; expires="+horaExp.toUTCString()+"SameSite=None; Secure;"
  document.cookie = "apellido="+apellido+"; expires="+horaExp.toUTCString()+"SameSite=None; Secure;"
  document.cookie = "email="+email+"; expires="+horaExp.toUTCString()+"SameSite=None; Secure;"
  document.cookie = "facultad="+facultad+"; expires="+horaExp.toUTCString()+"SameSite=None; Secure;"
  document.cookie = "carrera="+carrera+"; expires="+horaExp.toUTCString()+"SameSite=None; Secure;"

  mostrarDatos()
}

//Funcion para mostrar datos guardados en cookies en la pagina
function mostrarDatos(){
  console.log("Corriendo mostrarDatos()...")
  
  //Creamos un arreglo en el que se almacenan los valores de las cookies
  var allCookies = document.cookie
  var cookieArray = allCookies.split(";")
  console.log(cookieArray)
  
  //Imprimimos hora actual en la consola
  var horaActual = new Date()
  horaActual.setTime(horaActual.getTime())
  console.log("horaActual: "+horaActual.toUTCString())

  //Si el arreglo que se creo a partir de las cookies tiene su primer elemento vacio,
  //significa que la cookie no nos regresó datos
  //Esto puede ser porque no se hayan ingresado o porque la cookie ya expiró
  if(cookieArray[0] === ""){
    document.getElementById("estadoCookies").innerHTML = "No se han encontrado sus datos o han caducado. Favor de ingresarlos arriba..."
  }
  //Si cookieArray[0] no está vacio, entonces se obtuvieron datos de las cookies
  //y se muestran al usuario
  else{
    document.getElementById("estadoCookies").innerHTML = "Sus datos:"
    document.getElementById("nombreCookie").innerHTML = cookieArray[0]
    document.getElementById("apellidoCookie").innerHTML = cookieArray[1]
    document.getElementById("emailCookie").innerHTML = cookieArray[2]
    document.getElementById("facultadCookie").innerHTML = cookieArray[3]
    document.getElementById("carreraCookie").innerHTML = cookieArray[4]
  }
}