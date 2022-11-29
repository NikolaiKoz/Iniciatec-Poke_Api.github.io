const url = 'https://pokeapi.co/api/v2/pokemon/';

const generateCards = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;
    console.log(results);


    };

generateCards();