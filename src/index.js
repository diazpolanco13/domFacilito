const title = document.getElementById('title');
title.innerHTML = "Super Titulo";

const description = document.getElementById('description');
description.innerHTML = "Listado de cursos";

//const items = document.getElementsByClassName('list-group-item');
// const items = document.getElementsByTagName('li')
// for (let i = 0; i < items.length; i++) {
//     if (i % 2 == 0) {
//         let curso = items[i];
//         curso.style.background = '#f2f2f2';
//     }
// }

const items = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < items.length; i++) {
  let cursos = items[i];
  cursos.style.background = '#f2f2f2';
}

