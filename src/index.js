// const title = document.getElementById('title');
// const description = document.getElementById('description'); 
//title.innerHTML = "Super Titulo";

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




//con un checkbox
// const checkbox = document.getElementById('checkbox');

// checkbox.addEventListener('change', function(){
//   console.log('Cambio de valor')
// });

// // con un formulario
// let title_form = document.getElementById('title-form');

// title_form.addEventListener('change', function(){
//   console.log('Cambio de valor');
// });



const row = document.querySelector('.row');


const form = document.getElementById('course-form');
form.addEventListener('submit', function(e){
  e.preventDefault();

  let title = document.getElementById('title-form').value;
  let description = document.getElementById('description-form').value;
  
  create_card(title, description);
});
      

    function create_card_by_innerHTML(title, description){
      let html = `<div class="col-sm-6 col-md-4">\
                    <div class="thumbnail">\
                      <div class="caption">\
                        <h3 id="title card"> ${title} </h3>\
                        <p id="description_card"> ${description} </p>\
                        <p><a href="#" class="btn btn-danger">Accion</a></p>\
                      </div>\
                    </div>\
                  </div>`;
  row.innerHTML += html;
  };

    function create_card(title, description) {

      let div = document.createElement('div');
      div.className = 'col-sm-6 col-md-4';

      let thumbnail = document.createElement('div');
      thumbnail.className ='thumbnail';

      let caption = document.createElement('div');
      caption.className = 'caption';

      let h3 = document.createElement('h3');
      h3.textContent = 'title';

      let p1 = document.createElement('p');
      p1.textContent = 'description';

      let p2 = document.createElement('p');
      let a = document.createElement('a');
      a.className = 'btn btn-danger';
      a.textContent = 'Eliminar';

      p2.appendChild(a);
      caption.appendChild(h3);
      caption.appendChild(p1);
      caption.appendChild(p2);

      thumbnail.appendChild(caption);
      div.appendChild(thumbnail);

      row.appendChild(div);
    };