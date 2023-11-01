const botoes = document.querySelectorAll(".botao");
const personas = document.querySelectorAll(".persona");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarPersona();

		botao.classList.add("selecionada");
		personas[indice].classList.add("selecionada");
	});
});

function desselecionarPersona() {
	const personaSelecionada = document.querySelector(".persona.selecionada");
	personaSelecionada.classList.remove("selecionada");
}

function desselecionarBotao() {
	const botaoSelecionada = document.querySelector(".botao.selecionada");
	botaoSelecionada.classList.remove("selecionada");
}

