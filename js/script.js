
const modoAulaBtn = document.getElementById("modoAulaBtn");
const materiaBtn = document.getElementById("materiaBtn");
const gerarResumoBtn = document.getElementById("gerarResumoBtn");
const resultadoResumo = document.getElementById("resultadoResumo");

modoAulaBtn.addEventListener("click", function(){

    alert("Modo aula ativado com sucesso!");

});

materiaBtn.addEventListener("click", function(){

    const materia = prompt("Qual matéria deseja organizar?");

    if(materia){

        alert("Matéria " + materia + " organizada com sucesso!");

    }

});

gerarResumoBtn.addEventListener("click", function(){

    resultadoResumo.style.display = "block";

    resultadoResumo.innerHTML = "Gerando resumo inteligente...";

    setTimeout(function(){

        resultadoResumo.innerHTML = `
        <h3>Resumo da Aula</h3>

        <p>
        A IA identificou os principais tópicos da aula:
        OCR, visão computacional, automação e geração
        automática de flashcards.
        </p>
        `;

    }, 2000);

});

const imagens = [
    "https://picsum.photos/600/400?1",
    "https://picsum.photos/600/400?2",
    "https://picsum.photos/600/400?3"
];

let indice = 0;

const slide = document.getElementById("slide");

setInterval(function(){

    indice++;

    if(indice >= imagens.length){

        indice = 0;

    }

    slide.src = imagens[indice];

}, 3000);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;

    const senha = document.getElementById("senha").value;

    if(email === "" || senha === ""){

        alert("Preencha todos os campos.");

        return;

    }

    if(!email.includes("@")){

        alert("Digite um email válido.");

        return;

    }

    if(senha.length < 6){

        alert("A senha deve ter no mínimo 6 caracteres.");

        return;

    }

    alert("Login realizado com sucesso!");

});

const gerarFlashcardBtn = document.getElementById("gerarFlashcardBtn");
const flashcardsContainer = document.getElementById("flashcardsContainer");

const flashcards = [
    "O que é OCR?",
    "Como a IA ajuda nos estudos?",
    "Qual a função da correção automática?",
    "Por que organizar por matéria?"
];

let flashcardIndice = 0;

if (gerarFlashcardBtn) {
    gerarFlashcardBtn.addEventListener("click", function () {
        const card = document.createElement("article");
        card.classList.add("mini-card");

        card.innerHTML = `
            <h3>Flashcard</h3>
            <p>${flashcards[flashcardIndice]}</p>
        `;

        flashcardsContainer.appendChild(card);

        flashcardIndice++;

        if (flashcardIndice >= flashcards.length) {
            flashcardIndice = 0;
        }
    });
}

const inputBusca = document.getElementById("inputBusca");
const buscarBtn = document.getElementById("buscarBtn");
const resultadoBusca = document.getElementById("resultadoBusca");

if (buscarBtn) {
    buscarBtn.addEventListener("click", function () {
        const termo = inputBusca.value.trim();

        if (termo === "") {
            resultadoBusca.textContent = "Digite algo para buscar.";
            return;
        }

        resultadoBusca.textContent = `Resultado encontrado para: ${termo}`;
    });
}

const capturarConteudoBtn = document.getElementById("capturarConteudoBtn");
const contadorCapturas = document.getElementById("contadorCapturas");

let totalCapturas = 0;

if (capturarConteudoBtn) {
    capturarConteudoBtn.addEventListener("click", function () {
        totalCapturas++;
        contadorCapturas.textContent = totalCapturas;
        alert("Conteúdo capturado com sucesso!");
    });
}