function showDiv(div) {
    let selectDiv = document.querySelector('.'+div+'');
    let fade = document.querySelector('.fade');
    selectDiv.classList.add('enable');
    fade.classList.add('shadow');
}

function hideDiv(div) {
    let selectDiv = document.querySelector('.'+div+'');
    let fade = document.querySelector('.fade');
    selectDiv.classList.remove('enable');
    fade.classList.remove('shadow');
    let button =  document.querySelector('.validate');
    button.classList.remove('enable')
}

function removeFade() {
    let selectDiv = document.querySelector('.enable');
    let fade = document.querySelector('.fade');
    selectDiv.classList.remove('enable');
    fade.classList.remove('shadow');
    let button =  document.querySelector('.validate');
    button.classList.remove('enable')
}


async function screenNav(screen) {
    let main = document.querySelector('#app');
    let activeItem = document.querySelector('.active');
    activeItem.classList.remove('active')

    let toAtivate = document.getElementById(screen);
    toAtivate.classList.add('active');

    let response = await fetch('screen/'+screen+'.html');
    let json = await response.text();
    main.innerHTML = json;

}
async function cardNav(card) {
    let popcard = document.querySelector('.pop-card');

    let response = await fetch('card/'+card+'.html');
    let json = await response.text();
    popcard.innerHTML = json;
    showDiv('pop-card');

    let button =  document.querySelector('.validate');
    button.classList.add('enable')

}


/* App Init */
screenNav('home'); 