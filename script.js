
var pokename = '';
var pokeData;
var card_area = document.querySelector('.card_area')
var pokemonAbilitiesToDisplay = [];
var pokemonMovesToDisplay = [];

function getPokename(element) {
    pokename = element.value;
}

async function fetchPokemon() {
    // Display alert when no input
    if (pokename ==''){
        alert('Pokemon name can not be empty')
    }else {
        //ToDo: if pokemon name not found 

        //fetch the pokemon data
        var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokename);
        var pokeData = await response.json();
        console.log(pokeData);
        //organize specific data fetched
        var pokeAbilities = pokeData.abilities;
        var backImg = pokeData.sprites.back_shiny;

        //console.log(pokename);
        // console.log(pokeData.types.length);

        //Gather abilities 
        for (var i = 0; i < pokeAbilities.length; i++) {
            pokemonAbilitiesToDisplay.push(" "+pokeData.abilities[i].ability.name);
            //console.log(pokeAbilities[i].ability.name);
        }
        //console.log(pokemonAbilitiesToDisplay);
        var pokeMoves = pokeData.moves;
        //Gather moves
        for (var m = 0; m < pokeMoves.length; m++) {
            pokemonMovesToDisplay.push(" "+pokeMoves[m].move.name);
        }
        //console.log(pokemonMovesToDisplay);

        card_area.innerHTML = createCard(pokeData) + card_area.innerHTML; 

    }
}

//Generate Pokemon card with basic info on Pokemon captured
function createCard(data) {
    var res = `<div class="col pt-5">
                    <div class="cards d-flex justify-content-center">
                        <div class="card col col-7">
                            <img src="${data.sprites.front_shiny}" class="card-img-top" alt="Pokemon Image">
                            <div class="card-body bg-dark text-light">
                                <h5 class="card-title text-uppercase">${data.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted ">Weight: ${data.weight} lbs.</h6>
                                <p class="card-text abilities">Abilities: ${pokemonAbilitiesToDisplay}</p>
                                <p class="card-text moves">Moves: ${pokemonMovesToDisplay}</p>
                            </div>
                        </div>
                    </div>
                </div>

            `
    return res;
    }

// document.querySelector(".card-img-top").src = pokeData.sprites.front_shiny;
// document.querySelector(".card-title").innerText = pokeData.name;
// document.querySelector(".card-subtitle").innerText = "Weight: " + pokeData.weight + "lbs.";