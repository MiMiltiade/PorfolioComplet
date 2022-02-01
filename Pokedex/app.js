let allPokemon = [];
let tableauFin = [];
const listePoke = document.querySelector('.liste-poke');
const chargement = document.querySelector(".loader");
const searchInput = document.querySelector('.recherche-poke input');

const types = {
    grass: '#78c850',
	ground: '#E2BF65',
	dragon: '#6F35FC',
	fire: '#F58271',
	electric: '#F7D02C',
	fairy: '#D685AD',
	poison: '#966DA3',
	bug: '#B3F594',
	water: '#6390F0',
	normal: '#D9D5D8',
	psychic: '#F95587',
	flying: '#A98FF3',
	fighting: '#C25956',
    rock: '#B6A136',
    ghost: '#735797',
    ice: '#96D9D6',
    dark: '#693BD4',
    steel: '#A6A8AD',
};



function fetchPokemonBase(){

    fetch("https://pokeapi.co/api/v2/pokemon?limit=351")
        .then(reponse => reponse.json())
        .then((allPoke) => {
            //  console.log(allPoke);
            allPoke.results.forEach((pokemon) => {
                fetchPokemonComplet(pokemon);
            })
 
 
        })
}
fetchPokemonBase();


function fetchPokemonComplet(pokemon) {
    
    let objPokemonFull = {};
    let url = pokemon.url;
    let nameP = pokemon.name;

    fetch(url)
    .then(reponse => reponse.json())
    .then((pokeData) => {
        //  console.log(pokeData);

        objPokemonFull.pic = pokeData.sprites.front_default;
        objPokemonFull.type = pokeData.types[0].type.name;
        objPokemonFull.id = pokeData.id;


        fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameP}`)
        .then(reponse => reponse.json())
        .then((pokeData) => {
            // console.log(pokeData);

            objPokemonFull.name = pokeData.names[4].name;
            allPokemon.push(objPokemonFull);

            if(allPokemon.length === 351) {
                // console.log(allPokemon);

                tableauFin = allPokemon.sort((a,b) => {
                    return a.id - b.id;
                }).slice(0,21);
                // console.log(tableauFin);
 
                createCard(tableauFin);
                chargement.style.display = "none";
            }
        })
    })

}

// Création des cartes :

function createCard(arr){
    
    for(let i = 0; i < arr.length; i++) {

        const carte = document.createElement('li');
        let couleur = types[arr[i].type];
        carte.style.background = couleur;
        const textCarte = document.createElement('h5');
        textCarte.innerText = arr[i].name;
        const idCarte = document.createElement('p');
        idCarte.innerText = `ID# ${arr[i].id}`;
        const imgCarte = document.createElement('img');
        imgCarte.src = arr[i].pic

        carte.appendChild(imgCarte);
        carte.appendChild(textCarte);
        carte.appendChild(idCarte);

        listePoke.appendChild(carte);

    }
}



// Scroll "infini"

window.addEventListener('scroll', () => {

    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

    // je crée une variable avec des élément de window
    // scrollTop = tout ce qui a été scroller depuis le haut
    // scrollHeight = scroll total possible
    // ClientHeight = hauteur de la fenetre, parti visible

    if(clientHeight + scrollTop >= scrollHeight -20) {
        addPoke(6);
    }
})

let index = 21;

function addPoke(nb) {

    if(index > 351) {
        return;
    }
    const arrToAdd = allPokemon.slice(index, index + nb);
    createCard(arrToAdd);
    index += nb;
}


// Recherche

 searchInput.addEventListener('keyup', recherche);        // je peux le remettre pour désactiver le boutton

// const formRecherche = document.querySelector('form');

// formRecherche.addEventListener('submit', (e) => {        
//     e.preventDefault();
//     recherche();
// })

function recherche(){

    if(index < 351) {
        addPoke(330);
}               // va afficher tous les poké

    let filter, allLi, titleValue, allTitles;

    filter = searchInput.value.toUpperCase();
    allLi = document.querySelectorAll('li');
    allTitles = document.querySelectorAll('li > h5');
    
    for(i = 0; i < allLi.length; i++) {
        titleValue = allTitles[i].innerText;

        if(titleValue.toUpperCase().indexOf(filter) > -1) {
            allLi[i].style.display ="flex";
        }   else {
            allLi[i].style.display ='none';
        }
    }

}



// animation input

searchInput.addEventListener('input', function(e) {

    if(e.target.value !== "") {
        e.target.parentNode.classList.add('active-input');
    } else if (e.target.value === "") {
        e.target.parentNode.classList.remove('active-input');
    }
})