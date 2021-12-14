
          // Variables
          const baseDeDatos = [
              {
                  id: 1,
                  nombre: 'Cinturon',
                  precio: 489,
                  imagen: 'im2/cinturon.jpg'
              },

              {
                  id: 2,
                  nombre: 'Scrunchie',
                  precio: 778,
                  imagen: 'im2/scrunchies.jpg'
              },
              {
                  id: 3,
                  nombre: 'Vela',
                  precio: 980,
                  imagen: 'im2/esmaltes.jpg'
              },
              {            
                  id: 4,
                  nombre: 'Mates',
                  precio: 897,
                  imagen: 'im2/mate.jpg'
              },
              {
                  id: 5,
                  nombre: 'Esmalte',
                  precio: 479,
                  imagen: 'im2/esmaltes.jpg'
              },
              {
                  id: 6,
                  nombre: 'Moño',
                  precio: 230,
                  imagen: 'im2/moños.jpg'
              },
              {
                  id: 7,
                  nombre: 'Llaveros',
                  precio: 389,
                  imagen: 'im2/llaveros.jpg'
              },
              {
                  id: 8,
                  nombre: 'Pantuflas',
                  precio: 1200,
                  imagen: 'im2/pantuflas.jpg'
              },
              {
                 id: 9,
                  nombre: 'Mates',
                  precio: 470,
                  imagen: 'im2/mate.jpg'
              }

          ]
        
        const listaProductos = document.querySelector('.probando')
          baseDeDatos.forEach((info) => {
            let oNuevo = document.createElement ("div")
            oNuevo.classList.add(`opciones_cuadros`)
            listaProductos.appendChild(oNuevo)
            let imgNueva = document.createElement ("img")
             imgNueva.src= info.imagen    
             oNuevo.appendChild(imgNueva)
            let tituloNuevo = document.createElement ("h6")
             tituloNuevo.textContent = info.nombre
             tituloNuevo.classList.add(`titulos_opciones`)   
             oNuevo.appendChild(tituloNuevo)
             let parrafoNuevo = document.createElement ("p")
             parrafoNuevo.textContent = info.precio
             parrafoNuevo.classList.add(`parrafoNuevo`)   
             oNuevo.appendChild(parrafoNuevo)      
             let botonNuevo = document.createElement("button")
             botonNuevo.textContent = `AGREGAR`
             botonNuevo.classList.add (`button`)
             botonNuevo.dataset.id = info.id
             console.log(botonNuevo)
            
             oNuevo.appendChild(botonNuevo)
             oNuevo.addEventListener(`click`, function (e){
             if (e.target.classList.contains(`button`)){
  agregarCarrito(e.target.parentElement)
             }
})

          })
carrito = {}
total = []

 const listaCarrito = document.querySelector (`.listaCarrito`)
 const templateCarrito = document.querySelector (`.templateCarrito`)
const agregarCarrito= item =>{
    const productos = {  
    nombre:item.querySelector(`h6`).textContent,
    precio:parseInt(item.querySelector(`p`).textContent),
    id: item.querySelector(`.button`).dataset.id,
    cantidad: 1
    }

      
   /*si ya existe no lo vuelve a crear*/
      if(carrito.hasOwnProperty(productos.id)){        
          productos.cantidad = carrito[productos.id].cantidad + 1                 
   }

  carrito[productos.id] = {...productos} 
              
              pintarCarrito()
 }

  const items = document.querySelector ("#items")
  const pintarCarrito = () =>{ 
    const template = document.querySelector (`#template-carrito`).content
    const fragment = document.createDocumentFragment()
    Object.values(carrito).forEach(productos =>{
      items.innerHTML = ``
      template.querySelector(`th`).textContent = productos.id 
      template.querySelectorAll(`td`)[0].textContent = productos.nombre 
      template.querySelectorAll(`td`)[1].textContent = productos.cantidad 
      template.querySelectorAll(`td`)[3].textContent = "$" + productos.precio * productos.cantidad
      template.querySelector(`.btn-info`).dataset.id = productos.id 
      template.querySelector(`.btn-danger`).dataset.id = productos.id 


      const clone = template.cloneNode(true)
      fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    pintarFooter()
    accionBotones()
  }

const footer = document.querySelector (`#footer-carrito`)
const pintarFooter = () =>{
  footer.innerHTML = ``
  const template = document.querySelector (`#template-footer`).content
  const fragment = document.createDocumentFragment()
  const nuevaCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
  const nuevoPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
  console.log(nuevoPrecio)
  template.querySelectorAll(`td`)[0].textContent = nuevaCantidad
  template.querySelector(`span`).textContent = nuevoPrecio

  const clone = template.cloneNode(true)
  fragment.appendChild(clone)
  footer.appendChild(fragment)
 const boton = document.querySelector(`#vaciar-carrito`)
 boton.addEventListener(`click`, () =>{
  carrito = {}
  items.innerHTML = ``
  pintarCarrito()
 })
}

const accionBotones = () => {
  const botonesAgregar = document.querySelectorAll(`#items .btn-info`)
  const botonesEliminar = document.querySelectorAll(`#items .btn-danger`)

botonesAgregar.forEach(btn =>{
  btn.addEventListener(`click`, () =>{
    const productos = carrito[btn.dataset.id]
    productos.cantidad ++
    carrito[btn.dataset.id] = {...productos}
    pintarCarrito()
  })
})
  botonesEliminar.forEach(btn =>{
  btn.addEventListener(`click`, () =>{
    const productos = carrito[btn.dataset.id]
    productos.cantidad --
    if(productos.cantidad === 0){
       delete carrito[btn.dataset.id]
    }else {
      carrito[btn.dataset.id] = {...productos}
    
    }
    pintarCarrito()
  })
})
  console.log(carrito)
}
              
         
             
 






