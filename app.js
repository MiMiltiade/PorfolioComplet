const body = document.querySelector('body');
const header = document.querySelector('header');
const formulaire = document.querySelector('.global-form');
const label = document.querySelector('.label-input-start');
const inputStart = document.querySelector('.input-start');
const loader = document.querySelector('.background-box')
const titre = document.querySelectorAll('.span-titre');
const p = document.querySelector('.para');
const containerGlobalProgressBar = document.querySelector('.container-global-progress-bar');
const containerProgresseBar = document.querySelectorAll('.container-flex');
const progresseBar = document.querySelectorAll('.progresse-bar');
const texteProgresseBar = document.querySelectorAll('.p-progress');
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
let newForm;


// preventDefault du formulaire

formulaire.addEventListener('submit', (e) =>{
    e.preventDefault();
});



// Function qui se lance au démarage avec les animations

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
            strings: [`Bonjour`, 'Vous avez accédé au Portfolio de Joseph Choquet', `Un nouveau développeur <strong>Front-End</strong>`, `Bonne navigation`],
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
        
          CreateTypeJs(h1, 2900, [`Pour naviguer sur le portfolio tapez 'AIDE' puis appuyez sur entrée`]);}, 11900)
       
         setTimeout(function(){
             label.style.display = "inline-block";
             inputStart.style.display = "inline-block";
         }, 14800); 
  
     }
     startNaviguation();
  
 }


formulaire.onsubmit = submit;

function submit(event) { {
    event.preventDefault();


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
               
                CreateTypeJs(newParag, 12900, [`Pour naviguer au sein de mon portfolio, merci d'entrer une des commandes suivantes : <br><br>
                À PROPOS <span class='fleche'>➡</span> Permet de voir une brève présentation de moi-même <br> 
                PROJETS <span class='fleche'>➡</span> Permet d'accéder à la liste des projets que j'ai fait <br>
                OUTILS <span class='fleche'>➡</span> Voir la liste des outils et des langages de programmation que j'utilise et apprend <br>
                CONTACT <span class='fleche'>➡</span> Pour me laisser un message`]);}, 450)
            
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
            Le <a href="SpanMaker/index.html" target="_blank">Span-Maker</a> qui facilite la tâche des programmeurs -- <span class="code-source">(<a href="https://github.com/MiMiltiade/Span-Maker.git" target="_blank">Consulter le code source</a>)</span><br>
            La formidable <a href="langton/index.html" target="_blank">fourmi de Langton</a> -- <span class="code-source">(<a href="https://github.com/MiMiltiade/Langton-s-ant-in-html-js.git" target="_blank">Consulter le code source</a>)</span> <br>
            Parce que les classiques ne font jamais de mal : <a href="Snake/index.html" target="_blank">le jeu du serpent</a> --<span class="code-source"> (<a href="https://github.com/MiMiltiade/Snake-game.git" target="_blank">Consulter le code source</a>)</span><br>
            Pour finir, un petit <a href="Pokedex/index.html" target="_blank">pokédex</a> fait avec une API -- <span class="code-source">(<a href="https://github.com/MiMiltiade/Pokedex.git" target="_blank">Consulter le code source</a>)</span><br>

            Et sans oublier le code source de mon <a href="https://github.com/MiMiltiade/Portfolio.git" target="_blank">Portfolio</a>`])  ;


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
            J'ai commencé par des études de droit mais une fois mon Master en poche, n'étant pas convaincu par le milieu des juristes, j'ai pris la décision de voyager : à pied d'abord et en Europe. J'ai marché de Bordeaux à Prague, et c'est bien fatigué que je me suis résolu à faire une halte de quelques mois à Bruxelles. Enfin mon voyage a continué vers le Brésil (en avion cette fois). J'y ai vécu deux années comme professeur de français. Cela m'a permis de faire le point sur mon parcours et sur la suite. Je savais déjà que j'avais besoin de me poser, les voyages ça inspire, mais sans stabilité pas de réalisation. J'avais toujours voulu travailler dans l'informatique, et c'est en rencontrant des gens qui le faisaient que je me suis dit que c'était possible.<br><br>
            J'ai donc décidé d'apprendre la programmation, j'ai choisi de commencer à étudier par moi même, en autodidacte comme on dit. J'ai choisi cette voie car je sais maintenant que le meilleur moyen d'apprendre c'est de faire. C'est aussi pourquoi je souhaite suivre un apprentissage. <br><br>
            J'ai hâte de pouvoir travailler avec cela. J'adore l'univers de l'informatique : sa richesse, son développement constant et la quasi universalité de l'outil en font un champ d'étude passionnant.<br><br>
            Alors si mon profil vous intéresse, n'hésitez pas à me contacter en tapant "CONTACT" dans l'invite de commande.`]);
           
            boucleAllerEnBas(48200);

            créeNouveauInput(46.55);

            gererAncienInput(input);


        
        } else if(regexOutils.test(input.value)){

            // PÄRTIE OUTILS


            // on crée à la volé toute l'animation
            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'presentation');

            const newParag = document.createElement('p');
            newParag.setAttribute('class', 'p-text');

            const newParag2 = document.createElement('p');
            newParag2.setAttribute('class', 'p-text');

            const containerProgresseBarFlex1 = document.createElement('div');
            const containerProgresseBarFlex2 = document.createElement('div');
            const containerProgresseBarFlex3 = document.createElement('div');
            const containerProgresseBarFlex4 = document.createElement('div');
            containerProgresseBarFlex1.setAttribute('class', 'container-flex');
            containerProgresseBarFlex2.setAttribute('class', 'container-flex');
            containerProgresseBarFlex3.setAttribute('class', 'container-flex');
            containerProgresseBarFlex4.setAttribute('class', 'container-flex');

            const containerProgresseBar1 = document.createElement('div');
            const containerProgresseBar2 = document.createElement('div');
            const containerProgresseBar3 = document.createElement('div');
            const containerProgresseBar4 = document.createElement('div');
            containerProgresseBar1.setAttribute('class', 'progress-bar-container');
            containerProgresseBar2.setAttribute('class', 'progress-bar-container');
            containerProgresseBar3.setAttribute('class', 'progress-bar-container');
            containerProgresseBar4.setAttribute('class', 'progress-bar-container');

            const progresseBar1 = document.createElement('div');
            const progresseBar2 = document.createElement('div');
            const progresseBar3 = document.createElement('div');
            const progresseBar4 = document.createElement('div');
            progresseBar1.setAttribute('class', 'progresse-bar', 'style', 'width:0%');
            progresseBar2.setAttribute('class', 'progresse-bar', 'style', 'width:0%');
            progresseBar3.setAttribute('class', 'progresse-bar', 'style', 'width:0%');
            progresseBar4.setAttribute('class', 'progresse-bar', 'style', 'width:0%');

            const pProgresse1 = document.createElement('p');
            const pProgresse2 = document.createElement('p');
            const pProgresse3 = document.createElement('p');
            const pProgresse4 = document.createElement('p');
            pProgresse1.setAttribute('class', "p-progress")
            pProgresse2.setAttribute('class', "p-progress")
            pProgresse3.setAttribute('class', "p-progress")
            pProgresse4.setAttribute('class', "p-progress")


            formulaire.appendChild(newDiv);
            newDiv.appendChild(newParag);
            newDiv.appendChild(containerProgresseBarFlex1);
            newDiv.appendChild(containerProgresseBarFlex2);
            newDiv.appendChild(containerProgresseBarFlex3);
            newDiv.appendChild(containerProgresseBarFlex4);
            containerProgresseBarFlex1.appendChild(containerProgresseBar1);
            containerProgresseBarFlex2.appendChild(containerProgresseBar2);
            containerProgresseBarFlex3.appendChild(containerProgresseBar3);
            containerProgresseBarFlex4.appendChild(containerProgresseBar4);
            containerProgresseBarFlex1.appendChild(pProgresse1);
            containerProgresseBarFlex2.appendChild(pProgresse2);
            containerProgresseBarFlex3.appendChild(pProgresse3);
            containerProgresseBarFlex4.appendChild(pProgresse4);
            containerProgresseBar1.appendChild(progresseBar1);
            containerProgresseBar2.appendChild(progresseBar2);
            containerProgresseBar3.appendChild(progresseBar3);
            containerProgresseBar4.appendChild(progresseBar4);
            newDiv.appendChild(newParag2);

            // fonctions pour lancer l'animation

            function lancerGreenSock(){
                let tl = gsap.timeline();

                tl.fromTo(containerGlobalProgressBar, {display: 'none'}, {display: 'inline', duration: 0.5})
                tl.fromTo(containerProgresseBarFlex1, {display: 'none'}, {display: 'flex', duration: 0.8})
                tl.fromTo(containerProgresseBarFlex2, {display: 'none'}, {display: 'flex', duration: 0.8})
                tl.fromTo(containerProgresseBarFlex3, {display: 'none'}, {display: 'flex', duration: 0.8})
                tl.fromTo(containerProgresseBarFlex4, {display: 'none'}, {display: 'flex', duration: 0.8})
                tl.fromTo(progresseBar1, {width: '0%'}, {width: '80%', duration: 2})
                tl.fromTo(progresseBar2, {width: '0%'}, {width: '70%', duration: 2},'-=2')
                tl.fromTo(progresseBar3, {width: '0%'}, {width: '55%', duration: 2},'-=2')
                tl.fromTo(progresseBar4, {width: '0%'}, {width: '15%', duration: 2},'-=2')
                afficherPourcentage(12000);

            }

            function timerAnimation(delay){
                window.setTimeout(lancerGreenSock, delay)
            }
        
            timerAnimation(2200);
            

            function pourcentageBarProgressions(delay){ 
            
                function afficher(){
                
                    pProgresse1.innerHTML = `${progresseBar1.style.width} HTML`;
                    pProgresse2.innerHTML = `${progresseBar2.style.width} CSS`;
                    pProgresse3.innerHTML = `${progresseBar3.style.width} JavaScript`;
                    pProgresse4.innerHTML = `${progresseBar4.style.width} React.js`;
                };
            
                function async(){
                    window.setTimeout(afficher, delay)
                }
                async();
            }

            function afficherPourcentage(num){
                for(let i = 0; i <= num; i += 10){
                    pourcentageBarProgressions(i);
                }
            }

            // on lance les textes fait avec typed.js

            CreateTypeJsOutil(newParag);    

            function delay(){
             
                setTimeout(function() {
                    CreateTypeJs(newParag2, 12000, [`En plus de cela je connais les bases de Bulma, Sass et GreenSock. <br>
                    J'ai appris tout cela en suivant des formations sur Udemy et OpenClassrooms.
                    <br>
                    Je m'entraîne régulièrement sur <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a> et sur <a href="https://www.codingame.com/home" target="_blank">CodingGame</a>.
                    <br>
                    J'aime également faire des petits projets de mon côté.
                    `]);}, 8500)
            }
            delay(); 

            boucleAllerEnBas(21000);

            créeNouveauInput(20.5);
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
                    MAIL <span class='fleche'>➡</span> Pour m'envoyer un mail<br>
                    GITHUB <span class='fleche'>➡</span> Pour accéder à mon profil GitHub<br>
                    LINKEDIN <span class='fleche'>➡</span> Pour accéder à mon profil LinkedIn`]);}, 400)
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
};


// function pour créer de nouvel input 

function créeNouveauInput(tempsDeDelay){

    newForm = document.createElement('form');
    newForm.setAttribute('class', 'global-form');
  

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
    
    formulaire.appendChild(newForm)
    newForm.appendChild(newDiv);
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    newInput.focus();
    
    newForm.onsubmit = submit;


    gsap.from(newLabel, {
        visibility: 'hidden',
        duration: 0.2,
        ease: "power4.in",
        delay: tempsDeDelay
        })
    gsap.from(newInput, {
        visibility: 'hidden',
        duration: 0.2,
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
        Mon niveau dans les différents langages :
    </p>
`
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
