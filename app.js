const body = document.querySelector('body');
const header = document.querySelector('header');
const formulaire = document.querySelector('.global-form');
const label = document.querySelector('.label-input-start');
const inputStart = document.querySelector('.input-start');
const loader = document.querySelector('.background-box')
const titre = document.querySelectorAll('.span-titre');
const p = document.querySelector('.para');
const regexProjets = /^projets$/i;
const regexAide = /^aide$/i;
const regexAPropos = /^à propos$/i;
const regexAPropos2 = /^a propos$/i;
const regexContact = /^contact$/i;
const regexMail = /^mail$/i;
const regexGithub = /^github$/i;
const regexLinkedin = /^Linkedin$/i;
const regexOutils = /^outils$/i;
let timeOut;



// preventDefault du formulaire

formulaire.addEventListener('submit', (e) =>{
    e.preventDefault();
});


// Function qui se lance au démarage 

window.onload = function letsgo(){

    apparitionLoader(2000);

    
    const divLoad = document.createElement('div');
    divLoad.setAttribute('class', 'div-load');

    const divParaLoad = document.createElement('div');
    divParaLoad.setAttribute('class', 'div-para-load-container')

    const paraLoad = document.createElement('p');
    paraLoad.setAttribute('class', 'para-load');


    body.appendChild(divLoad);
    divLoad.appendChild(divParaLoad);
    divParaLoad.appendChild(paraLoad);


    function launchType(){
        setTimeout(function() {
        
        divLoad.style.display = 'block'

        let typed2 = new Typed(paraLoad,{
            strings: [`Bonjour`, 'Vous avez accédé au Portfolio de Joseph Choquet', `Un développeur <strong>Front-End</strong> de plus`, `Bonne naviguation`],
            typeSpeed: 19,
            showCursor: true,
            autoInsertCss: true,
            fadeOut: true,
            cursorChar: '█',
        })
    }, 2200)
        
        
    }
    launchType();


    const h1 = document.createElement('h1');
    header.appendChild(h1);



    function startNaviguation(){
        setTimeout(function(){
            divLoad.remove();
        }, 11450);

        setTimeout(function() {
        
            CreateTypeJs(h1, 2900, [`Pour naviguer sur le portfolio tapez 'AIDE' puis appuyez sur entré`]);}, 11900)
       
        setTimeout(function(){
            label.style.display = "inline-block";
            inputStart.style.display = "inline-block";
        }, 14800); 
    
    }
    startNaviguation();
    
}


// On se met à l'écoute d'un keydown pour gérer la création de contenu

window.addEventListener('keydown', (e) => {
    
    // fonction global 

    if(e.code === "NumpadEnter" || e.code === "Enter"){

        const input = document.querySelector('input.classInput');

        
        if(regexAide.test(input.value)){
            
            // Partie AIDE

            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'presentation');

            const newParag = document.createElement('p');
            newParag.setAttribute('class', 'p-text');
            
            formulaire.appendChild(newDiv)
            newDiv.appendChild(newParag)

            apparitionLoader(350);

            function launchType(){
                setTimeout(function() {
               
                CreateTypeJs(newParag, 12650, [`Pour naviguer au sein de mon porte folio merci d'entrer une des commandes suivantes : <br><br>
                À PROPOS => Permet de voir une brève présentation de moi-même <br> 
                PROJETS => Permet d'accéder à la listes des projets que j'ai fait <br>
                OUTILS => Voir la liste des outils et languages de programmation que j'utilise et apprend <br>
                CONTACT => Pour me laisser un message`]);}, 450)
            
            }
            launchType();

            créeNouveauInput(13.65);
            boucleAllerEnBas(14000);
            gererAncienInput(input);
            
            
        } else if(regexProjets.test(input.value)) {
            
            // Partie PROJETS

            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'presentation');

            const newParag = document.createElement('p');
            newParag.setAttribute('class', 'p-text');


            formulaire.appendChild(newDiv)
            newDiv.appendChild(newParag)


            CreateTypeJs(newParag, 19000, [`Voici quelques projets perso que j'ai pu faire pour m'entrainer : <br><br>
            Une interface de <a href="SiteKyoto/index.html" target="_blank">site classique</a> -- <span class="code-source">(<a href="https://github.com/MiMiltiade/Site-classique.git" target="_blank">Consulter le code source</a></span>)<br>
            Le <a href="SpanMaker/index.html" target="_blank">Span-Maker</a> qui permet de faciliter la tâche des programmeurs -- <span class="code-source">(<a href="https://github.com/MiMiltiade/Span-Maker.git" target="_blank">Consulter le code source</a>)</span><br>
            La formidable <a href="langton/index.html" target="_blank">fourmie de Langton</a>. -- <span class="code-source">(<a href="https://github.com/MiMiltiade/Langton-s-ant-in-html-js.git" target="_blank">Consulter lecode source</a>)</span> <br>
            Parce-que les classiques ne font jamais de mal : <a href="Snake/index.html" target="_blank">le jeu du serpent</a> --<span class="code-source"> (<a href="https://github.com/MiMiltiade/Snake-game.git" target="_blank">Consulter lecode source</a>)</span><br>
            Pour finir un petit <a href="Pokedex/index.html" target="_blank">pokédex</a> fait avec une API -- <span class="code-source">(<a href="https://github.com/MiMiltiade/Pokedex.git" target="_blank">Consulter le code source</a>)</span><br>

            Et bien sûr le code source de mon <a href="https://github.com/MiMiltiade/Portfolio.git" target="_blank">Portfolio</a>`])  ;


            boucleAllerEnBas(20000);

            créeNouveauInput(19.35);

            gererAncienInput(input);


        } else if(regexAPropos.test(input.value) || regexAPropos2.test(input.value)) {

            // PARTIE A PROPOS

            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'presentation');

            const newParag = document.createElement('p');
            newParag.setAttribute('class', 'p-text');

            
            formulaire.appendChild(newDiv)
            newDiv.appendChild(newParag)

            
            CreateTypeJs(newParag, 46200, [`Je m'appelle Joseph Choquet, et après quelques années de pérégrination j'ai décidé de devenir <strong>developpeur front-end</strong>. <br> <br>
            J'ai commencé par des études de droits mais une fois mon Master en poche, n'étant pas convaincu par le milieu des juristes, j'ai décidé de voyager. À pied d'abord et en Europe. J'ai marché de Bordeaux à Prague, et c'est bien fatigué que je me suis résolu à faire une halte de quelques mois à Bruxelles. Enfin mon voyage a continué vers le Brésil (en avion cette fois). J'y ai vécu deux années comme professeur de français. Cela m'a permis de faire le point sur mon parcours et sur la suite. Je savais déjà que j'avais besoin de me poser, les voyages c'est super, mais la stabilité ça a du bon. J'avais toujours voulu travailler dans l'informatique, et c'est en rencontrant des gens qui le faisaient que je me suis dis que c'était possible.<br><br>
            J'ai donc décidé d'apprendre la programmation, j'ai choisi de commencer à étudier par moi même, en autodidacte comme on dit. J'ai choisi cette voie car je sais maintenant que le meilleur moyen d'apprendre c'est de faire. C'est aussi pourquoi je souhaite suivre un apprentissage. <br><br>
            J'ai hâte de pouvoir travailler avec cela. J'adore l'univers de l'informatique, sa richesse, son développement constant et la quasi universalité de l'outil en font un champ d'étude passionnant.<br><br>
            Alors si mon profil vous intéresse n'hésitez pas à me contacter en tapant "CONTACT" dans l'invit de commande.`]);
           
            boucleAllerEnBas(48200);

            créeNouveauInput(46.55);

            gererAncienInput(input);


        
        } else if(regexOutils.test(input.value)){

            // PÄRTIE OUTILS

            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'presentation');

            const newParag = document.createElement('p');
            newParag.setAttribute('class', 'p-text');

            const newParag2 = document.createElement('p');
            newParag2.setAttribute('class', 'p-text');
            
            formulaire.appendChild(newDiv);
            newDiv.appendChild(newParag);
            newDiv.appendChild(newParag2);

            CreateTypeJsOutil(newParag);    

            function delay(){
               
                setTimeout(function() {
                    CreateTypeJs(newParag2, 12000, [`En plus de cela je connais les bases de Bulma, Sass et GreenSock. <br>
                    j'ai appris tout cela en suivant des formations sur Udemy et OpenClassrooms.
                    <br>
                    je m'entraine régulièrement sur <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a>, et sur <a href="https://www.codingame.com/home" target="_blank">CodingGame</a>.
                    <br>
                    j'aime également faire de petits projets de mon côté.
                    `]);}, 13500)
            }
            delay(); 

            boucleAllerEnBas(26250);

            créeNouveauInput(25.5);
            gererAncienInput(input);


        } else if(regexContact.test(input.value)){

            // PARTIE CONTACT

            apparitionLoader(350);

            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'presentation');

            const newParag = document.createElement('p');
            newParag.setAttribute('class', 'p-text');
            
            formulaire.appendChild(newDiv);
            newDiv.appendChild(newParag);

            function delay(){
               
                setTimeout(function() {
                    CreateTypeJs(newParag, 7250, [`Pour me contacter entrez une de ces commandes : <br><br>
                    MAIL --> Pour m'envoyer un mail<br>
                    GITHUB --> Pour accéder à mon profil GitHub<br>
                    LINKEDIN --> Pour accéder à mon profil LinkedIn`]);}, 400)
            }
            delay(); 
            boucleAllerEnBas(7700);

            créeNouveauInput(7.5);

            gererAncienInput(input);


        } else if(regexMail.test(input.value)) {
            
            contactLink("mailto:choquetjoseph@gmail.com?subject=Portefolio message&body=Bonjour,");

            const newBr = document.createElement('br');
            formulaire.appendChild(newBr);

            créeNouveauInput();
            gererAncienInput(input);

        
        } else if(regexGithub.test(input.value)) {
            
            contactLink("https://github.com/MiMiltiade");
           
            const newBr = document.createElement('br');
            formulaire.appendChild(newBr);

            créeNouveauInput(0.5);
            gererAncienInput(input);

        
        } else if(regexLinkedin.test(input.value)) {
            
            contactLink("https://www.linkedin.com/in/joseph-choquet-674238151/");

            const newBr = document.createElement('br');
            formulaire.appendChild(newBr);

            créeNouveauInput(0.5);
            gererAncienInput(input);

        
        } else {

            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'presentation');

            const newParag = document.createElement('p');
            newParag.setAttribute('class', 'p-text');
            newParag.innerHTML = `"${input.value}" n'est pas reconnu en tant que commande valide`
            
            formulaire.appendChild(newDiv)
            newDiv.appendChild(newParag)

            créeNouveauInput(0.1);
            gererAncienInput(input);


        }

    };
});




// function pour créer de nouvel input 

function créeNouveauInput(tempsDeDelay){

    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'div-label-input');

    const newLabel = document.createElement('label');
    newLabel.setAttribute("class", "label-input");
    newLabel.setAttribute("for", "idInput2");
    newLabel.innerHTML = "PF:&#x5C;User&#x5C;EnterCommand>"

    const newInput = document.createElement('input')
    newInput.setAttribute('class', 'classInput');
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "idInput2");
    newInput.setAttribute("autofocus", "focus");
    
    formulaire.appendChild(newDiv);
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    newInput.focus();
    
    gsap.from(newLabel, {
        visibility: 'hidden',
        duration: 0.4,
        ease: "power4.in",
        delay: tempsDeDelay
        })
    gsap.from(newInput, {
        visibility: 'hidden',
        duration: 0.4,
        ease: "power4.in",
        delay: tempsDeDelay

        })    
}

//function pour gérer ancien input

function gererAncienInput(input){
    input.removeAttribute('class');
    input.removeAttribute('autofocus');
    input.setAttribute('disabled', 'disabled');
}

// faire apparaitre le loader

function apparitionLoader(num){
    loader.style.display = 'block'; 
            
    function stop(){
        loader.style.display = 'none'; 

    }

    function stop2(){
        timeOut = window.setTimeout(stop, num)
    }
    stop2();
}


// Partie contact pour appeler une nouvelle page :
function contactLink(url){
    
    let targetURL = url;
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    newURL.target = '_blank'
    document.body.appendChild(newURL);
    newURL.click();
}

// function pour Type.js

function CreateTypeJs(element, delay, textArr){
    let typed2 = new Typed(element,{
        strings: textArr,
        typeSpeed: 19,
        showCursor: true,
        autoInsertCss: true,
        cursorChar: '█',
      })

    function hideCursor(){
        typed2.cursor.hidden = true;
    }
      
    function callHideCursor(){
        window.setTimeout(hideCursor, delay)
    }

    callHideCursor();
}

// type.js pour la partie outil

function CreateTypeJsOutil(element){

    let typed3 = new Typed(element,{
        strings: [`
    <p class="p-text">
        Mon niveau dans les différents languages :
    </p>
    <br> <br>

    <div class="container-flex">
        <div class="progress-bar-container">
            <div class="progresse-bar"></div>
        </div>
        <p class="p-progress">HTML</p>
    </div>

    <div class="container-flex">
        <div class="progress-bar-container">
            <div class="progresse-bar1"></div>
        </div>
        <p class="p-progress">CSS</p>
    </div>
    <div class="container-flex">
        <div class="progress-bar-container">
            <div class="progresse-bar2"></div>
        </div>
        <p class="p-progress">JavaScript</p>
    </div>

    <div class="container-flex">
        <div class="progress-bar-container">
            <div class="progresse-bar3"></div>
        </div>
        <p class="p-progress">React.js</p>
    </div>
    <br>`
        ],
        typeSpeed: 19,
        showCursor: false,
        autoInsertCss: true
      })
    }


function allerEnBas(delay){ 

    function descendre(){
        window.scrollTo(0,10000);
    };
 
    function async(){
        window.setTimeout(descendre, delay)
    }
    async();
}

function boucleAllerEnBas(num){
    for(let i = 0; i <= num; i += 200){
    
        allerEnBas(i);
    }
}