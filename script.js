const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova jornada. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa jornada pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber, se aprofundar mais e ver como vai ser seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Com essa descoberta, uma professora da escola decidiu fazer uma sequência de aulas para sabermos qual o caminho há escolher. No fim de uma aula ela pede que você escreva um trabalho sobre o esse tema. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a devemos escolher um caminho que dê mais dinheiro ",
                afirmacao: "vai no impulso."
            },
            {
                texto: "Me preocupo com as pessoas que também estão nessa indesiçãora .",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos para discutir ."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar um grupo que representasse o que pensa sobre o futuro. E agora?",
        alternativas: [
            {
                texto: "Criar um grupo utilizando uma plataforma, ou os propios apps.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos atravez dos apps."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo sobre esse tema para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda atraves de uma pesquisa na rua. O problema é que o trabalho está totalmente sem sentido. O que você faz? ",
        alternativas: [
            {
                texto: " uma forma de contribuir com o trabalho, é fazer umas pesquisas pela a internet e tirar suas proprias conclusão.",
                afirmacao: "Infelizmente, isso não foi uma boa ideia, pois a professora queria que voçê fosse a campo."
            },
            {
                texto: "o grupo viu que é mas preciso manter a atenção pois ali nas pesquisar tiveram algumas informação importante, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda revisão e atençao é necessaria. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
