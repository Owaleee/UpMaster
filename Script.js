const songname = document.getElementById("songname");
const bandname = document.getElementById("bandname");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const back = document.getElementById("back");
const likebutton = document.getElementById("like")
const currentprogress = document.getElementById('currentprogress');
const progresscontainer = document.getElementById('progresscontainer');
const shuffleButton = document.getElementById('embaralhar');
const repeatButton = document.getElementById('repeat');
const songTime = document.getElementById("song-time")
const totalTime = document.getElementById("total-time")



const Desejos = {
    songname: "Desejos",
    artist: "-Kayblack",
    file: "01 Kayblack - Desejos",
    liked: false,
};

const Segredos = {
    songname: "Segredos",
    artist: "Kayblack",
    file: "02 Kayblack - Segredo",
    liked: false,
};

const Preferida = {
    songname: "Preferida",
    artist: "Kayblack",
    file: "03 Kayblack - Preferida",
    liked: false,
};

const SalePimenta = {
    songname: "Sal e Pimenta",
    artist: "-Kayblack & Vulgo FK & VEIGH",
    file: "04 Kayblack & Vulgo FK & VEIGH - Sal e Pimenta",
    liked: false,  
};

const Superficial= {
    songname: "Superficial",
    artist: "Kayblack",
    file: "05 Kayblack - Superficial",
    liked: false,
};

const Melhorso= {
    songname: "Melhor só",
    artist: "Kayblack",
    file: "06 Kayblack & Baco Exu do Blues - Melhor só",
    liked: false,
};

const Lavie= {
    songname: "C'EST LA VIE",
    artist: "Kayblack",
    file: "07 Kayblack - C'EST LA VIE",
    liked: false,
};

const Agro= {
    songname: "Nosso Quadro",
    artist: "...",
    file: "AgroPlay-Verão-Nosso-Quadro-_anacastelaoficial_M4A_128K_",
    liked: false,
};

const Chegouaudio= {
    songname: "Chegou um áudio",
    artist: "...",
    file: "CHEGOU-UM-ÁUDIO-ZÉ-VAQUEIRO_M4A_128K_",
    liked: false,
};

const Amoratual= {
    songname: "Amor Atual",
    artist: "...",
    file: "Henrique e Juliano - Amor Atual(Letra) (128 kbps)",
    liked: false,
};

const Msonhos= {
    songname: "Milhão de Sonhos",
    artist: "Mc Kevin",
    file: "01 - Milhão de Sonhos_44419850_44430081",
    liked: false,
};

const Almapura= {
    songname: "Alma pura",
    artist: "Mc Kevin",
    file: "02 - Alma Pura_44419851_44430082",
    liked: false,
};

const Grana= {
    songname: "Grana",
    artist: "Mc Kevin",
    file: "03 - Grana_44419852_44430083",
    liked: false,
};

const Inspiração= {
    songname: "Inspiração",
    artist: "Mc Kevin",
    file: "04 - Inspiração_44419853_44430084",
    liked: false,
};

const Palhaco= {
    songname: "Palhaço",
    artist: "Mc Kevin",
    file: "05 - Palhaço_44419854_44430085",
    liked: false,
};

const Ppresente= {
    songname: "Passado e presente",
    artist: "Mc Kevin",
    file: "06 - Passado e Presente_44419855_44430086",
    liked: false,
};

const Sistema= {
    songname: "Sistema",
    artist: "Mc Kevin",
    file: "07 - Sistema_44419856_44430087",
    liked: false,
};

const Traficando= {
    songname: "Tô Traficando Meus Sentimentos",
    artist: "Mc Kevin",
    file: "08 - Tô Traficando Meus Sentimentos_44419857_44430088",
    liked: false,
};

const Trilha= {
    songname: "Trilha",
    artist: "Mc Kevin",
    file: "09 - Trilha_44419858_44430089",
    liked: false,
};

const VidaLonga= {
    songname: "VidaLonga",
    artist: "Mc Kevin",
    file: "10 - Vida Longa_44419859_44430090",
    liked: false,
};

const cmafia= {
    songname: "Conexões de Máfia",
    artist: "Matuê - feat. Rich the Kid",
    file: "Matuê - Conexões de Máfia feat. Rich the Kid (128 kbps)",
    liked: false,
};

const Obico= {
    songname: "Os Bico Tão Se Perguntando",
    artist: "MC PH",
    file: "MC PH - Os Bico Tão Se Perguntando (Clipe Oficial) (GR6 Explode) (128 kbps)",
    liked: false,
};

const maciçado= {
    songname: "Maciçado",
    artist: "MC Kako",
    file: "MC Kako - Maciçado (DJ Boy e DJ GM) [Clipe Oficial] (128 kbps)",
    liked: false,
};

const Nforgando= {
    songname: "Nóis ta Forgano",
    artist: "DEREK",
    file: "4. DEREK - Nóis ta Forgano (feat. Kyan) [Official Audio] (128 kbps)",
    liked: false,
};

let IsPlaying = false;
let isShuffled = false;
let repeatOn = false;
const originalPlaylist = JSON.parse(localStorage.getItem('playlist')) ?? [Desejos, Segredos,Preferida, SalePimenta, Superficial, Melhorso, Lavie, Agro, Chegouaudio, Amoratual,Msonhos,Msonhos,Almapura,
Grana,Inspiração,Palhaco,Ppresente,Sistema,Traficando,Trilha,VidaLonga,cmafia,Obico,maciçado,Nforgando];
let sortedPlaylist = [...originalPlaylist];
let index = 0;


function playsong() {
    play.querySelector('.bi').classList.remove('bi-play-circle')
    play.querySelector('.bi').classList.add('bi-pause-circle')
    song.play();
    IsPlaying = true
}
function pausesong() {
    play.querySelector('.bi').classList.add('bi-play-circle')
    play.querySelector('.bi').classList.remove('bi-pause-circle')
    song.pause();
    IsPlaying = false
}



function playPausedecider() {
    if (IsPlaying === true) {
        pausesong();
    }
    else {
        playsong();
    }
}
function likeButtonRender() {
    if (sortedPlaylist[index].liked === true) {
        likebutton.querySelector('.bi').classList.remove('bi-heart');
        likebutton.querySelector('.bi').classList.add('bi-heart-fill');
        likebutton.classList.add('button-active');
    }
    else {
        likebutton.querySelector('.bi').classList.add('bi-heart');
        likebutton.querySelector('.bi').classList.remove('bi-heart-fill');
        likebutton.classList.add('button-active');
    }
};

function inicializarmusica() {
    cover.src = `./imagens/gengar-gif-5.gif`;
    song.src = `./songs/${sortedPlaylist[index].file}.mp3`;
    songname.innerText = sortedPlaylist[index].songname;
    bandname.innerText = sortedPlaylist[index].artist;
    likeButtonRender();
};

function backsong() {
    if (index === 0) {
        index = sortedPlaylist.length - 1;
    }
    else {
        index -= 1;
    }
    inicializarmusica();
    playsong();
};


function nextsong() {
    if (index === sortedPlaylist.length - 1) {
        index = 0;
    }
    else {
        index += 1;
    }
    inicializarmusica();
    playsong();
}

function UpdateProgress() {
    const barWidth = (song.currentTime / song.duration) * 100;
    currentprogress.style.setProperty('--progress', `${barWidth}%`);
    songTime.innerText = toHHMMSS(song.currentTime);
}

function jumpTo(event) {
    const width = progresscontainer.clientWidth;
    const clickposition = event.offsetX
    const jumpToTime = (clickposition / width) * song.duration;
    song.currentTime = jumpToTime;

}

function shuffleArray(preShuffleArray) {
    const size = preShuffleArray.length;
    let currentIndex = size - 1;
    while (currentIndex > 0) {
        let randomIndex = Math.floor(Math.random() * size);
        let aux = preShuffleArray[currentIndex];
        preShuffleArray[currentIndex] = preShuffleArray[randomIndex];
        preShuffleArray[randomIndex] = aux;
        currentIndex -= 1;
    }
}

function shuffleButtonClicked() {
    if (isShuffled === false) {
        isShuffled = true;
        shuffleArray(sortedPlaylist);
        shuffleButton.classList.add('button-active')
    }
    else {
        isShuffled = false;
        sortedPlaylist = [...originalPlaylist];
        shuffleButton.classList.remove('button-active')
    }
}

function repeatButtonClicked() {
    if (repeatOn === false) {
        repeatOn = true;
        repeatButton.classList.add('button-active');
    }
    else {
        repeatOn = false
        repeatButton.classList.remove("button-active");
    }
}

function nextOrRepeat() {
    if (repeatOn === false) {
        nextsong();
    }
    else {
        playsong();
    }
}

function toHHMMSS(originalNumber) {
    let hours = Math.floor(originalNumber / 3600)
    let min = Math.floor((originalNumber - hours * 3600) / 60);
    let secs = Math.floor(originalNumber - hours * 3600 - min * 60);

    return `${hours.toString().padStart(2, '0')}:${min
        .toString()
        .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

function updateTotalTime() {
    toHHMMSS(song.duration);
    totalTime.innerText = toHHMMSS(song.duration);
}

function likeButtonclicked() {
    if (sortedPlaylist[index].liked === false) {
        sortedPlaylist[index].liked = true
    }
    else {
        sortedPlaylist[index].liked = false;
    }
    likeButtonRender();
    localStorage.setItem('playlist', JSON.stringify(originalPlaylist)
    );
};


inicializarmusica();

play.addEventListener('click', playPausedecider);
back.addEventListener("click", backsong);
next.addEventListener("click", nextsong);
song.addEventListener('timeupdate', UpdateProgress);
song.addEventListener('ended', nextOrRepeat);
song.addEventListener('loadedmetadata', updateTotalTime);
progresscontainer.addEventListener('click', jumpTo);
shuffleButton.addEventListener('click', shuffleButtonClicked);
repeatButton.addEventListener('click', repeatButtonClicked);
likebutton.addEventListener('click', likeButtonclicked);

