const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const generateCards = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;
    console.log(results);

    const cards = results.map((result) => {
        return `<div class="card">
        <h2>${result.name}</h2>
        </div>`;

    });
    console.log(cards);
    };

generateCards();