const pokemons = document.querySelectorAll('.pokemon');

console.log('pokemons', pokemons);

// for all elements with class of pokemon
for (let i = 0; i < pokemons.length; i += 1) {
  const currentPokemon = pokemons[i];
  // console.log('currentPokemon', currentPokemon)

  const currentImageUrl = currentPokemon.src;
  const splitArr = currentImageUrl.split('/');
  // console.log('splitArr', splitArr);

  const pokemonId = splitArr[splitArr.length - 1].split('.')[0];
  // console.log('pokemonId', pokemonId);

  // add onclick listener
  currentPokemon.onclick = function() {
    // https://pokeapi.co/api/v2/pokemon/1
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/' + pokemonId;

    // when it is clicked fetch the api
    fetch(apiUrl).then(function(res) {
      // convert to json
      return res.json();
    }).then(function(res) {
      // then we can access json
      console.log('RES', res);
    });
  }
}
