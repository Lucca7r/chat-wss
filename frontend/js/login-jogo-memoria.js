const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");
const form = document.querySelector(".login__form");

const validateInput = ({ target }) => {
	if (target.value.length > 2) {
		button.removeAttribute("disabled");
		return;
	}
	button.setAttribute("disabled", "");
};

const handleSubmit = (event) => {
	event.preventDefault();
	localStorage.setItem("player", input.value);
	window.location = "/frontend/screen/jogo__memoria/game.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);

window.onload = function () {
	const savedPlayer = localStorage.getItem("player");
	if (savedPlayer && savedPlayer.length > 2) {
		input.value = savedPlayer;
		button.removeAttribute("disabled");
	}
};
