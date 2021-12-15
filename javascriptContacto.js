
array =[]
$("#boton").on("click", function(e){
  
  let nombre = $("#nombreUsuario").val()
  let apellido = $("#apellidoUsuario").val()
  let mail = $ ("#mailUsuario").val()
  let mensaje = $ ("#texto").val()
  if(nombre != "" && apellido != "" && mail != "" && mensaje != ""){
    mostrar()
    


    
  }else{
    $(".error").html(`<h6>ERROR, complete los casilleros correspondientes</h6>`).css("color", "red")
  }
  e.preventDefault(e)
})

function mostrar (){
  let apellido = $("#apellidoUsuario").val()
  let mail = $ ("#mailUsuario").val()
  let nombre = $("#nombreUsuario").val()
  let mensaje = $ ("#texto").val()
   $("#cartel").html(`<div class="formulario">
                       <h1>!Bienvenido ${nombre}!</h1>
                       <p>¡Gracias por comunicarte!</p>
                       </div>`).css("text-align", "right")
    array.push({ nombre: nombre , apellido: apellido , mail: mail , mensaje: mensaje})
    let arrayJSON = JSON.stringify (array)
    localStorage.setItem ("Usuarios", arrayJSON )
}

