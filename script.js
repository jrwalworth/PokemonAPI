
var pokename = '';
var pokeData;

function getPokename(element) {
    pokename = element.value;
}

async function fetchPokemon() {
    
    // Display alert when no input
    if (pokename ==''){
        alert('Pokemon name can not be empty')
    }else {
        //fetch all Pokemon names
        // var allResponse = await fetch("https://pokeapi.co/api/v2/pokemon/");
        // var allPokemon = await allResponse.json();
        // console.log(allPokemon.results);
        // var allNames = allPokemon.results;

        // Display alert when Pokemon not found


        //fetch the pokemon data
        var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokename);
        var pokeData = await response.json();
        console.log(pokeData.moves);
        var pokeAbilities = pokeData.abilities;
        //Display basic info on Pokemon
        document.querySelector(".card-img-top").src = pokeData.sprites.front_shiny;
        document.querySelector(".card-title").innerText = pokeData.name;
        document.querySelector(".card-subtitle").innerText = "Weight: " + pokeData.weight + "lbs.";

        //Gather abilities 
        var pokemonAbilitiesToDisplay = [];
        // console.log(pokeData.types.length);
        for (var i = 0; i < pokeAbilities.length; i++) {
            pokemonAbilitiesToDisplay.push(" "+pokeData.abilities[i].ability.name);
            // console.log(pokeAbilities[i].ability.name);
            // console.log(pokemonAbilitiesToDisplay);
        }
        // pokemonAbilitiesToDisplay = pokemonAbilitiesToDisplay.map(x => x+"");
        //console.log(pokemonAbilitiesToDisplay);
        document.querySelector(".abilities").innerText = "Abilities: " + pokemonAbilitiesToDisplay;

        //Gather moves
        var pokeMoves = pokeData.moves;
        var pokemonMovesToDisplay = [];
        for (var m = 0; m < pokeMoves.length; m++) {
            pokemonMovesToDisplay.push(" "+pokeMoves[m].move.name);
        }
        document.querySelector(".moves").innerText = "Moves: " + pokemonMovesToDisplay;
    }
}

// function validateInput() {
    
// }



// function over(element) {
//     document.querySelector(element).src = pokeData.sprites.front_shiny;
// }

// function out(element) {
//     document.querySelector(element).src = pokeData.sprites.back_shiny;

// }
