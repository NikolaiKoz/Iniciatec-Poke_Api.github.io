const idVector = [];

const generateUrl = () => {

    const url = 'https://pokeapi.co/api/v2/pokemon/';

    const randomId = (url) => {

        const id = Math.floor(Math.random() * 150) + 1;

        if (idVector.includes(id) === true) {
            randomId(url);
        } else {
            idVector.push(id);
            return url + id;
        }

    };

    PokemonApi(randomId(url));
};


const PokemonApi = async (url) => {

    try {
        const response = await fetch(url);
        const pokemon = await response.json();
        createCard(pokemon);
    } catch (error) {
    }
};

const createCard = (pokemon) => {

    const container = document.getElementById('cardsContainer');

    container.innerHTML += `<article class="card">
                                <!-- BANNER -->
                                <figure>
                                    <img class="bgTopCard" src="./images/bg-pattern-card.svg" alt="Top background card">
                                </figure>

                                <!-- CONTAINER AND IMG -->
                                <figure class="img">
                                    <img class="pokemonImg" src="${pokemon.sprites.other.dream_world.front_default}" alt="Img Pokemon" class="imgPokemon">
                                </figure>

                                <!-- NAME AND HP -->
                                <div class="card__info">
                                    <p class="name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                                    <p class="hp">${pokemon.stats[0].base_stat}hp</p>
                                </div>

                                <p class="exp">${pokemon.base_experience} exp</p>

                                <hr class="line">

                                <!-- STATS -->
                                <div class="stats__values">
                                    <p class="stat__value">${pokemon.stats[1].base_stat}</p>
                                    <p class="stat__value">${pokemon.stats[2].base_stat}</p>
                                    <p class="stat__value">${pokemon.stats[3].base_stat}</p>
                                </div>

                                <div class="stats">
                                    <p class="stat">Attack</p>
                                    <p class="stat">Defense</p>
                                    <p class="stat">Speed</p>
                                </div>

                                </article>
                            `;

};

const generatedFifteenCards = () => {
    for (let i = 0; i < 15; i++) {
        generateUrl();
    };
};

 window.addEventListener('scroll', () => {

     const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

     if (clientHeight + scrollTop >= scrollHeight - 5) {
        generatedFifteenCards();
     }
 });

 const searchPokemon = () => {
    const Container = document.getElementById('cardsContainer');
    const btn = document.getElementById('searchBtn');
    const input = document.getElementById('searchInput');

    const errorCard = `<article class="error__card" id="error">
     <!-- BANNER -->
     <figure>
         <img class="bgTopCard" src="./images/bg-pattern-card.svg" alt="Top background card">
     </figure>

     <!-- CONTAINER AND IMG -->
     <figure class="img">
         <img alt="error" class="imgPokemon errorImg">
     </figure>

     <!-- NAME AND HP -->
     <div class="card__info">
         <p class="name">Pokemon Not Found</p>
         <p class="hp"></p>
     </div>

     <p  id="errorMsj" class="exp"></p>

     <hr class="line">

     <!-- STATS -->
     <div class="stats__values">
         <p class="stat__value">Over 9000</p>
         <p class="stat__value">Over 9000</p>
         <p class="stat__value">Over 9000</p>
     </div>

     <div class="stats">
         <p class="stat">Attack</p>
         <p class="stat">Defense</p>
         <p class="stat">Speed</p>
     </div>

     </article>
`;

    input.addEventListener('keyup', (e) => {
        let value = e.target.value.toLowerCase();

        const cards = document.querySelectorAll('.card');

        cards.forEach((card) => {
            let name = card.querySelector('.name').textContent.toLowerCase();

            if (!name.includes(value)) {
                //remove
                card.remove();
            }
        }
        );

        //Si value no esta vacio y no hay coincidencias

        if (value !== '' && cards.length === 0) {
            cardsContainer.innerHTML = errorCard;
        } else{
            document.getElementById("error").remove();
        }

        if(value.length === 0){
            generatedFifteenCards();
        }
    });

    btn.addEventListener('click', () => {
        if (input.value !== '') {
            error.classList.add('d-none');
            PokemonApi(`https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}`);
        }
    }
    );

 };



//Llamada a la función
generatedFifteenCards();
searchPokemon();