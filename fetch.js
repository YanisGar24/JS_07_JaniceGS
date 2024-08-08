// Fetch
//
// POST

const BASE_URL = 'https://pokeapi.co/api/v2/'; //URL
   
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
};

//se crea la card 
const createPokemonCard = (pokemon) => {
    const card = document.createElement("div");
    card.className = "pokemon-card"; // nombre de la clase
    const abilities = pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
    
    card.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Tipo: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        <p>Peso: ${pokemon.weight / 10} kg</p>
        <p>Altura: ${pokemon.height / 10} m</p>
        <p>Habilidades: ${abilities}</p> 

    `;

    return card;
};

//se muestra la carta
const displayPokemonCard = (pokemon) => {
    const container = document.getElementById("pokemon-container");
    container.innerHTML = ''; // Clear previous card
    const card = createPokemonCard(pokemon);
    container.appendChild(card);
};


// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        if (pokemon) {
            localStorage.setItem("currentPokemon", JSON.stringify(pokemon));
            localStorage.setItem("currentPokemonId", pokemon.id);
            displayPokemonCard(pokemon);
        }; 
    });

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
        if (pokemon) {
            localStorage.setItem("currentPokemon", JSON.stringify(pokemon));
            localStorage.setItem("currentPokemonId", pokemon.id);
            displayPokemonCard(pokemon);
        }
        console.log(pokemon.name);
    });

// obtener el siguiente

document.getElementById('next-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = currentPokeId + 1;
        const pokemon = await fetchPokemon(newId);
        if (pokemon) {
            localStorage.setItem("currentPokemon", JSON.stringify(pokemon));
            localStorage.setItem("currentPokemonId", pokemon.id);
            displayPokemonCard(pokemon);
        }

        console.log(pokemon.name);
    })



////////////////// POST
//

/*
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

*/




/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
        //Quiero pensar que habla de poner toa la info en el Local

// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.  Al menos mostrar el nombre, id y peso del pokemon. Puntos extra si se muestra una imagen.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch
