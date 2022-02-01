const container = document.querySelector('.container');
const fourmiRange = document.querySelector('input')
const affichageValueInp = document.querySelector('.valueInp2')
let toutesLesDivs;
let positionfourmie = 1814;
let iteration = 0;
const affichage = document.querySelector('.iterationP');
let startValue = true;
let fourmiId;
let vitesseFourmi;


function creationGrille(){

    let indexAttr = 0;

    for(i = 0; i < 3696; i++){

        if(i > 3630){
            const bloc = document.createElement('div');
            bloc.setAttribute('data-bord', 'true');
            bloc.setAttribute('data-white', 'true');
            container.append(bloc);
        } else if(indexAttr === 0){
            const bloc = document.createElement('div');
            bloc.setAttribute('data-bord', 'true');
            bloc.setAttribute('data-white', 'true');
            container.append(bloc);
            indexAttr++;
        } else if(indexAttr === 65) {
            const bloc = document.createElement('div');
            bloc.setAttribute('data-bord', 'true');
            bloc.setAttribute('data-white', 'true');
            container.append(bloc);
            indexAttr = 0;
        } else {
            const bloc = document.createElement('div');
            bloc.setAttribute('data-white', 'true');
            container.append(bloc);
            indexAttr++;
        }
    }

    toutesLesDivs = document.querySelectorAll('.container div');
    console.log(toutesLesDivs);
    toutesLesDivs[positionfourmie].classList.add('fourmie', 'top');
    toutesLesDivs[positionfourmie].setAttribute('data-position', 'top')
}


creationGrille();

function  voyagefourmie(){


        if(toutesLesDivs[positionfourmie].getAttribute('data-bord') === 'true'){
            clearInterval(fourmiId);
        }
    // POUR LES CASES BLANCHES
        else if(toutesLesDivs[positionfourmie].getAttribute('data-position') === 'top' && toutesLesDivs[positionfourmie].getAttribute('data-white') === 'true'){

            toutesLesDivs[positionfourmie].removeAttribute('data-white');
            toutesLesDivs[positionfourmie].setAttribute('data-black', 'true');
            toutesLesDivs[positionfourmie].removeAttribute('data-position');
            toutesLesDivs[positionfourmie].classList.remove('fourmie');
            toutesLesDivs[positionfourmie].classList.remove('top');
            positionfourmie +=1;
            toutesLesDivs[positionfourmie - 1].style.background = '#3D2600';
            toutesLesDivs[positionfourmie].setAttribute('data-position', 'right')
            toutesLesDivs[positionfourmie].classList.add('right');
            toutesLesDivs[positionfourmie].style.background = ""
            toutesLesDivs[positionfourmie].classList.add('fourmie');
            iteration++;


        } else if(toutesLesDivs[positionfourmie].getAttribute('data-position') === 'right' && toutesLesDivs[positionfourmie].getAttribute('data-white') === 'true'){

            toutesLesDivs[positionfourmie].removeAttribute('data-white');
            toutesLesDivs[positionfourmie].setAttribute('data-black', 'true');
            toutesLesDivs[positionfourmie].removeAttribute('data-position');
            toutesLesDivs[positionfourmie].classList.remove('fourmie');
            toutesLesDivs[positionfourmie].classList.remove('right');
            positionfourmie +=66;
            toutesLesDivs[positionfourmie - 66].style.background = '#3D2600';
            toutesLesDivs[positionfourmie].setAttribute('data-position', 'bottom')
            toutesLesDivs[positionfourmie].classList.add('bottom');
            toutesLesDivs[positionfourmie].style.background = ""
            toutesLesDivs[positionfourmie].classList.add('fourmie');
            iteration++;


        } else if(toutesLesDivs[positionfourmie].getAttribute('data-position') === 'bottom' && toutesLesDivs[positionfourmie].getAttribute('data-white') === 'true'){

            toutesLesDivs[positionfourmie].removeAttribute('data-white');
            toutesLesDivs[positionfourmie].setAttribute('data-black', 'true');
            toutesLesDivs[positionfourmie].removeAttribute('data-position');
            toutesLesDivs[positionfourmie].classList.remove('fourmie');
            toutesLesDivs[positionfourmie].classList.remove('bottom');
            positionfourmie -=1;
            toutesLesDivs[positionfourmie + 1].style.background = '#3D2600';
            toutesLesDivs[positionfourmie].setAttribute('data-position', 'left')
            toutesLesDivs[positionfourmie].classList.add('left');
            toutesLesDivs[positionfourmie].style.background = ""
            toutesLesDivs[positionfourmie].classList.add('fourmie');
            iteration++;


        } else if(toutesLesDivs[positionfourmie].getAttribute('data-position') === 'left' && toutesLesDivs[positionfourmie].getAttribute('data-white') === 'true'){

            toutesLesDivs[positionfourmie].removeAttribute('data-white');
            toutesLesDivs[positionfourmie].setAttribute('data-black', 'true');
            toutesLesDivs[positionfourmie].removeAttribute('data-position');
            toutesLesDivs[positionfourmie].classList.remove('fourmie');
            toutesLesDivs[positionfourmie].classList.remove('left');
            positionfourmie -=66;
            toutesLesDivs[positionfourmie + 66].style.background = '#3D2600';
            toutesLesDivs[positionfourmie].setAttribute('data-position', 'top')
            toutesLesDivs[positionfourmie].classList.add('top');
            toutesLesDivs[positionfourmie].style.background = ""
            toutesLesDivs[positionfourmie].classList.add('fourmie');
            iteration++;


        } else if(toutesLesDivs[positionfourmie].getAttribute('data-position') === 'top' && toutesLesDivs[positionfourmie].getAttribute('data-black') === 'true'){

            // pour les cases noires

            toutesLesDivs[positionfourmie].removeAttribute('data-black');
            toutesLesDivs[positionfourmie].setAttribute('data-white', 'true');
            toutesLesDivs[positionfourmie].removeAttribute('data-position');
            toutesLesDivs[positionfourmie].classList.remove('fourmie');
            toutesLesDivs[positionfourmie].classList.remove('top');
            positionfourmie -=1;
            toutesLesDivs[positionfourmie + 1].style.background = '#ece6d9';
            toutesLesDivs[positionfourmie].setAttribute('data-position', 'left')
            toutesLesDivs[positionfourmie].classList.add('left');
            toutesLesDivs[positionfourmie].style.background = ""
            toutesLesDivs[positionfourmie].classList.add('fourmie');
            iteration++;


        } else if(toutesLesDivs[positionfourmie].getAttribute('data-position') === 'left' && toutesLesDivs[positionfourmie].getAttribute('data-black') === 'true'){

            toutesLesDivs[positionfourmie].removeAttribute('data-black');
            toutesLesDivs[positionfourmie].setAttribute('data-white', 'true');
            toutesLesDivs[positionfourmie].removeAttribute('data-position');
            toutesLesDivs[positionfourmie].classList.remove('fourmie');
            toutesLesDivs[positionfourmie].classList.remove('left');
            positionfourmie +=66;
            toutesLesDivs[positionfourmie - 66].style.background = '#ece6d9';
            toutesLesDivs[positionfourmie].setAttribute('data-position', 'bottom')
            toutesLesDivs[positionfourmie].classList.add('bottom');
            toutesLesDivs[positionfourmie].style.background = ""
            toutesLesDivs[positionfourmie].classList.add('fourmie');
            iteration++;


        } else if(toutesLesDivs[positionfourmie].getAttribute('data-position') === 'bottom' && toutesLesDivs[positionfourmie].getAttribute('data-black') === 'true'){

            toutesLesDivs[positionfourmie].removeAttribute('data-black');
            toutesLesDivs[positionfourmie].setAttribute('data-white', 'true');
            toutesLesDivs[positionfourmie].removeAttribute('data-position');
            toutesLesDivs[positionfourmie].classList.remove('fourmie');
            toutesLesDivs[positionfourmie].classList.remove('bottom');
            positionfourmie +=1;
            toutesLesDivs[positionfourmie - 1].style.background = '#ece6d9';
            toutesLesDivs[positionfourmie].setAttribute('data-position', 'right')
            toutesLesDivs[positionfourmie].classList.add('right');
            toutesLesDivs[positionfourmie].style.background = ""
            toutesLesDivs[positionfourmie].classList.add('fourmie');
            iteration++;


        } else if(toutesLesDivs[positionfourmie].getAttribute('data-position') === 'right' && toutesLesDivs[positionfourmie].getAttribute('data-black') === 'true'){

            toutesLesDivs[positionfourmie].removeAttribute('data-black');
            toutesLesDivs[positionfourmie].setAttribute('data-white', 'true');
            toutesLesDivs[positionfourmie].removeAttribute('data-position');
            toutesLesDivs[positionfourmie].classList.remove('fourmie');
            toutesLesDivs[positionfourmie].classList.remove('right');
            positionfourmie -=66;
            toutesLesDivs[positionfourmie + 66].style.background = '#ece6d9';
            toutesLesDivs[positionfourmie].setAttribute('data-position', 'top')
            toutesLesDivs[positionfourmie].classList.add('top');
            toutesLesDivs[positionfourmie].style.background = ""
            toutesLesDivs[positionfourmie].classList.add('fourmie');
            iteration++;

        }


    affichage.textContent = `itération : ${iteration}`;





};




    fourmiRange.addEventListener('input', () =>{
        vitesseFourmi = fourmiRange.value;
        affichageValueInp.textContent = `${vitesseFourmi}/ms`
    });



function start(e){

    if(e.keyCode === 32 && startValue){

    fourmiId = setInterval(() => {
    voyagefourmie();}, `${vitesseFourmi}`);
    startValue = false;

    } else if(e.keyCode === 32 && !startValue){
        clearInterval(fourmiId);
        startValue = true;
    }


}

document.addEventListener("keyup", start);