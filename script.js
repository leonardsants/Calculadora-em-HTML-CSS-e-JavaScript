const resultado = document.getElementById("resultado");
const botoes = document.querySelectorAll(".botao");

let expressao = "";

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const valor = botao.textContent;

        switch (valor) {
            case "AC":
                limpar();
                break;

            case "=":
                calcular();
                break;

            case "%":
                porcentagem();
                break;

            default:
                inserir(valor);
        }
    });
});

function inserir(valor) {
    expressao += valor;
    resultado.innerHTML = expressao;
}

function limpar() {
    expressao = "";
    resultado.innerHTML = "0";
}

function calcular() {
    try {
        const res = Function(`return ${expressao}`)();
        resultado.innerHTML = res;
        expressao = String(res);
    } catch {
        resultado.innerHTML = "Erro";
        expressao = "";
    }
}

function porcentagem() {
    try {
        if (expressao.trim() !== "") {
            const res = eval(expressao) / 100;
            resultado.innerHTML = res;
            expressao = String(res);
        }
    } catch {
        resultado.innerHTML = "Erro";
        expressao = "";
    }
}