
var pokename = '';
var pokeData;

function getPokename(element) {
    pokename = element.value;
}

async function calling() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokename);
    var pokeData = await response.json();
    console.log(pokeData);

    document.querySelector(".card-img-top").src = pokeData.sprites.front_shiny;
    document.querySelector(".card-title").innerText = pokeData.name;
    document.querySelector(".card-subtitle").innerText = "Weight: " + pokeData.weight + "lbs.";
    var abilities = [];
    console.log(pokeData.types.length);
    for (var i = 0; i < pokeData.types.length; i++) {
        abilities.push(pokeData.types[i]);
        console.log(pokeData.types.type);
    }
    console.log(abilities);
    document.querySelector(".card-text").innerText = "Abilities: " + pokeData.types.type.name;

    // cardsDiv.innerHTML = makePokeCard(pokeData) + cardsDiv.innerHTML;
}

function over(element) {
    document.querySelector(element).src = pokeData.sprites.front_shiny;
}

function out(element) {
    document.querySelector(element).src = pokeData.sprites.back_shiny;

}
