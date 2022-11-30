
const PokemonApi = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        createCard(data);
    } catch (error) {
        console.log(error);
    }
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

    let counter = 0;

    for (let i = 1; i <= 15; i++) {

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            PokemonApi(url);
            counter = i;
        } catch (error) {
            console.log(error);
        }

    }

    window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (clientHeight + scrollTop >= scrollHeight - 5) {
            showMorePokemon();
        }
    }
    );

    const showMorePokemon = () => {
        let cards = 1;
        for (let i = counter + 1; i <= counter + 15; i++) {

            if (cards === 15) {
                cards = 0;
                break;
            }

            if (counter === 898) {
                break;
            }

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            PokemonApi(url);
            counter = i;
            cards++;
        } catch (error) {
            console.log(error);
        }
        }
    }

};

    randomPokemon();
    PokemonApi();
