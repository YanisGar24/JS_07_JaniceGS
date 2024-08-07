// Fetch
//
// POST

const BASE_URL = 'https://pokeapi.co/api/v2/';
  
// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/
// fetch async

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id); //guarda el id en el local storage
        console.log(pokemon.name);
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
})

// obtener el anterior
document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = Math.max(1, currentPokeId -1);
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon.name);
    })

// obtener el siguiente

document.getElementById('next-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = currentPokeId + 1;
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon.name);
    })



////////////////// POST
//

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json));




/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
        //Quiero pensar que habla de poner toa la info en el Local

// - Manipular el DOM y agregar una tarjeta del pokemon.

// Crear el contenedor de la tarjeta
const card = document.createElement('div');
card.className = 'card';

// Crear y agregar una imagen a la tarjeta
const img = document.createElement('img');
img.src = 'https://via.placeholder.com/300'; // URL de una imagen de ejemplo
img.alt = 'Imagen de ejemplo';
card.appendChild(img);

// Crear y agregar un título a la tarjeta
const title = document.createElement('h2');
title.textContent = 'Título de la Tarjeta';
card.appendChild(title);

// Crear y agregar un párrafo de texto a la tarjeta
const paragraph = document.createElement('p');
paragraph.textContent = 'Este es un texto de ejemplo para la tarjeta.';
card.appendChild(paragraph);

// Agregar la tarjeta al cuerpo del documento
document.body.appendChild(card);


// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch
