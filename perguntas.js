const perguntas = [
    {
        pergunta: "Quem empurrou Mufasa do penhasco?",
        opcoes: [
            "Oscar",
            "Scar",
            "Simba",
            "Mufasa"
        ],
        resposta: 1 // índice da resposta correta
    },
    {
        pergunta: "Quais dessas alternativas não é uma zona de zootopia?",
        opcoes: [
            "Distrito florestal",
            "Truntalândia",
            "Savanna",
            "Oasislândia"
        ],
        resposta: 3
    },
    {
        pergunta: "A mãe da merida foi transformada em:",
        opcoes: [
            "Urso",
            "Gato",
            "Onça",
            "Leão"
        ],
        resposta: 0
    },
    {
        pergunta: "Em Lightyear, em qual ordem é feito o 'pão do futuro'?",
        opcoes: [
            "Pão, presunto, pão",
            "Presunto, pão, presunto",
            "Pão, presunto, queijo, pão",
            "Presunto, queijo, presunto"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual o nome de experiência do Stitch?",
        opcoes: [
            "502",
            "607",
            "606",
            "626"
        ],
        resposta: 3
    },
    {
        pergunta: "Quantas emoções a Rilley tem?",
        opcoes: [
            "9",
            "10",
            "8",
            "4"
        ],
        resposta: 0
    }
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;

