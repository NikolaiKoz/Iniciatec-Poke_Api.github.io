
const PokemonApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    createCard(data);
    };

const createCard = (pokemon) => {

    const pokeCard = `<article class="card">

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

    const container = document.getElementById('cardsContainer');
    container.innerHTML += pokeCard;

};

const randomPokemon = () => {

    for (let i = 0; i < 30; i++) {
        const random = Math.floor(Math.random() * 155) + 1;
        const url = `https://pokeapi.co/api/v2/pokemon/${random}/`;
        PokemonApi(url);
    }
};

    randomPokemon();
    PokemonApi();
