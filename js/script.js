// uselessfacts, cat-facts, cataas(cat as a service), meowfacts
// url useless facts
const factApiUrl = 'https://uselessfacts.jsph.pl';
const keyRandom = '/api/v2/facts/random';
const keyToday = '/api/v2/facts/today';

// url meowfacts
const catFactApiUrl = 'https://meowfacts.herokuapp.com/?lang=por';

// url cataas
const catImgApiUrl = 'https://cataas.com/cat?json=true';
const catImgUrl = 'https://cataas.com';

// url emojos
const emojoUrl = 'https://emojihub.yurace.pro/api/all';
var todosEmoji;
var numEmoji = Math.random() * (1791 - 0) + 0;

// url passaros
const passaroUrl = 'https://shibe.online/api/birds';


const todayFact = document.getElementById('todayFact');
const todayFont = document.getElementById('todayFont');
const randomFact = document.getElementById('randomFact');
const randomFont = document.getElementById('randomFont');
const randomCat = document.getElementById('gatoImg');
const randomCatFact = document.getElementById('gatoFato');
const randomEmojo = document.getElementById('pEmojo');
const randomEmojo2 = document.getElementById('pEmojo2');
const buttonEmojo = document.getElementById('botaoEmojo');
const randomBird = document.getElementById('passaroImg');

const loadPassaro = document.getElementById('loadPassaro');
const figurePassaro = document.getElementById('figurePassaro');
const loadGato = document.getElementById('loadGato');
const figureGato = document.getElementById('divImgGato');

function fatoAleatorio() {
    fetch(factApiUrl + keyRandom)
    .then(Response => Response.json())
    .then(data=>{
        randomFact.innerText = data.text;
    })
}

fetch(factApiUrl + keyToday)
.then(Response => Response.json())
.then(data=>{
    todayFact.innerText = data.text;
})

function gatoAleatorio() {
    fetch(catImgApiUrl)
    .then(Response => Response.json())
    .then(data=>{
        randomCat.src = catImgUrl + data.url
    })
    loadGato.classList.remove('loader-hidden');
    figureGato.classList.add('imgHidden');
}

function gatoFatoAleatorio() {
    fetch(catFactApiUrl)
    .then(Response => Response.json())
    .then(data=>{
        randomCatFact.innerText = data.data[0];
    });
}

fetch(emojoUrl)
    .then(Response => Response.json())
    .then(data=>{
        // console.log(data);
        todosEmoji = data;
        setInterval(
            async function () {
                numEmoji = Math.floor(Math.random() * (1791 - 0) + 0);
                // console.log(todosEmoji[numEmoji]);
                randomEmojo.innerHTML = todosEmoji[numEmoji].htmlCode[0].replace(';', '');
            }, 100);
        setInterval(
            async function () {
                numEmoji = Math.floor(Math.random() * (1791 - 0) + 0);
                // console.log(todosEmoji[numEmoji]);
                randomEmojo2.innerHTML = todosEmoji[numEmoji].htmlCode[0].replace(';', '');
            }, 100);
    });


function passaroAleatorio() {
    fetch(passaroUrl)
        .then(Response => Response.json())
        .then(data=>{
            randomBird.src = data;
        });
    loadPassaro.classList.remove('loader-hidden');
    figurePassaro.classList.add('imgHidden');
}

passaroAleatorio();
fatoAleatorio()
gatoFatoAleatorio();
gatoAleatorio();


randomBird.addEventListener('load', () =>{
    loadPassaro.classList.add('loader-hidden');
    figurePassaro.classList.remove('imgHidden');
});

randomCat.addEventListener('load', () =>{
    loadGato.classList.add('loader-hidden');
    figureGato.classList.remove('imgHidden');
})