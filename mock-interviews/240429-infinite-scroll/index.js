const pokemonContainer = document.getElementById("pokemon-container");

let latestPokemon = 0;

function fetchPokemon(offset, limit) {
  const fetchUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}?offset=${offset}`;

  return fetch(fetchUrl)
    .then(res => res.json())
    .then(data => {
      latestPokemon += 20;
      return data.results;
    });
}

function appendPokemonSquares(pokemonData, container) {
  pokemonData.forEach(
    pokemon =>
      (container.innerHTML += `<div class="pokemon-square">${pokemon.name}</div>`)
  );
}

pokemonContainer.addEventListener("scroll", e => {
  const { scrollHeight, scrollTop, clientHeight } = e.target;

  if (scrollHeight - scrollTop - clientHeight === 0) {
    fetchPokemon(latestPokemon, 20).then(pokemon =>
      appendPokemonSquares(pokemon, pokemonContainer)
    );
  }
});

function addLoadingExperience() {
  ///////////DO THIS
}

fetchPokemon(latestPokemon, 20).then(pokemon =>
  appendPokemonSquares(pokemon, pokemonContainer)
);

////////////////EDGE CASES /////////////////////////

// When we reach the last pokemon and < 20 come back + there are no more to fetch
// Error handling
