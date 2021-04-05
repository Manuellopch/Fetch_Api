document.getElementById('txtBtn').addEventListener('click', CargarPrimera);
document.getElementById('jsonBtn').addEventListener('click', CargarSegundo);
document.getElementById('apiBTN').addEventListener('click', CargarTercero);
function CargarPrimera(){
     fetch('datos.txt')
     .then(function(res){
          return res.text();
     })
     .then(function(empleados){
         console.log(empleados);
         document.getElementById('resultado').innerHTML = empleados;
     })
     .catch(function(error){
          console.log(error);
     })
};
function CargarSegundo(){
     fetch('empleados.json')
     .then(function(res){
          return res.json();
     })
     .then(function(data){
          let html = '';
          data.forEach(function(empleado){
               html += `<li>Nombre:${empleado.nombre} || Puesto:${empleado.puesto}</li>`
          })
          document.getElementById('resultado').innerHTML = html;
     })
     .catch(function(error){
          console.log(error);
     })
};

function CargarTercero(){
     fetch('https://picsum.photos/list')
     .then(function(res){
          return res.json();
     })
     .then(function(imagenes){
          let html = '';
          imagenes.forEach(function(imagen){
          html = `
          <li>
          <a href="${imagen.post_url}">Ver Imagen</a>
          ${imagen.author}
          </li>`
     })
     document.getElementById('resultado').innerHTML = html;
     })
};