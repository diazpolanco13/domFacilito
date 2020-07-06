const title = document.getElementById('title');
//title.innerHTML = "Super Titulo";

const description = document.getElementById('description');
// description.innerHTML = "Listado de cursos";



// const boton = document.querySelector('.btn');

// boton.addEventListener('click',function(e){
//   if (title.style.display != 'none') {
//     title.style.display = 'none';
//     description.style.display = 'none';
//     e.target.textContent = 'Mostar'
//     console.log(e)
//   } else {
//     title.style.display = 'block';
//     description.style.display = 'block';
//     e.target.textContent = 'Ocultar'

//     console.log(e)
//   }
// });

// boton.addEventListener('mouseenter', function(){
//   this.className = 'btn-peligro';
//   console.log(boton)
// })

// boton.addEventListener('mouseout', function(){
//   this.className = 'btn';
// })

// const input = document.getElementById('description-form');

// input.addEventListener('keydown', function(e){
//   console.log(`Tecla presionada ${e.key} y su codigo es ${e.keyCode}`);
// })

const form = document.getElementById('course-form');
console.log(form)

form.addEventListener('submit', function(e){
  e.preventDefault();

  let description = document.getElementById('description-form').value;

  console.log(title);
  console.log(description);
});

//con un checkbox
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', function(){
  console.log('Cambio de valor')
});

// con un formulario
let title_form = document.getElementById('title-form');

title_form.addEventListener('change', function(){
  console.log('Cambio de valor');
});
