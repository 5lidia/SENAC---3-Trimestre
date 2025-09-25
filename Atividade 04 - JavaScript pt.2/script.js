let numerosecreto; //o número que o jogador precisa advinhar
let contadorDeChances = 1; //Começa a primeira chance
const MAX_CHANCES = 10; //Número máximo de chances

const campoPalpite = document.querySeletor ('#campoPalipite');
const botaoEnviarPalpite = document.querySeletor ('.palpites-anteriores');
const botaoReniciar = document.querySeletor ('#botaoReniciar');

const mensagemElenment = document.querySeletor ('.mensagem');
const palpitesAnterioresElement = document.querySeletor ('.palpites-anteriores');
const dicasElement =  document.querySeletor ('.dica');
const chancesRestantesElement = document.querySeletor ('#chancesRestantes')

let listaDePalpites = []; {
    //Gerar um novo número secreto (entre 1 e 100)
    //Math.random() gera um número entre 0 (inclusive) e 1 (exclusive)
    //Multiplicamos por 100 para ter um número entre 0 e 99,99...
    //Adicionamos 1 para ter entre 1 e 100,99...
    //Math.floor () arrendonda para o menor inteiro, então teremos entre 1 e 100.
    numeroSecreto = Math.floor(Math.random()*100)+1;
    console.log('Número Secreto (apenas para teste):', numeroSecreto); //Ajuda no debug
}
