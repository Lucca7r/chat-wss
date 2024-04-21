//import '../css/home-screen.css';
const chatGeral = document.getElementById("chat-geral");
const chatImage = document.getElementById("chat-image");
const jogo__memoria = document.getElementById("chat-jogos");
const nomeSpan = document.getElementById("nome_user");
const player_musica = document.getElementById("player_musica");
const calculadora = document.getElementById("calculadora");

const photoUser = document.getElementById("img-user");

let id = "vFrH132ECKUv6ZMMAlavcCLxGpV5BNWKZ08GaSy8ahg";
let url = `https://api.unsplash.com/photos/random?client_id=${id}&query=animals`;

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		let img = data.urls.regular;
		photoUser.innerHTML = `<img id="img_user" src="${img}" alt="user" />`;
	});



chatGeral.addEventListener("click", function (event) {
	event.preventDefault();
	toggleMenu();
	fetch("chat_geral.html")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("conteudo").innerHTML = data;
			executeScriptInContent();
		})
		.catch((error) => {
			console.error("Error:", error);
		});
});

chatImage.addEventListener("click", function (event) {
	event.preventDefault();
	toggleMenu();
	fetch("../chat-image/chat_image.html")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("conteudo").innerHTML = data;
			executeScriptInContent();
		})
		.catch((error) => {
			console.error("Error:", error);
		});
});

jogo__memoria.addEventListener("click", function (event) {
	event.preventDefault();
	toggleMenu();
	fetch("../jogo__memoria/jogo__memoria.html")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("conteudo").innerHTML = data;
			executeScriptInContent();
		})
		.catch((error) => {
			console.error("Error:", error);
		});
});

player_musica.addEventListener("click", function (event) {
	event.preventDefault();
	toggleMenu();
	fetch("../player_musica/player_musica.html")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("conteudo").innerHTML = data;
			executeScriptInContent();
		})
		.catch((error) => {
			console.error("Error:", error);
		});
});

calculadora.addEventListener("click", function (event) {
  event.preventDefault();
  fetch("../calculadora/calculadora.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("conteudo").innerHTML = data;
      executeScriptInContent2();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function executeScriptInContent() {
	const scripts = document
		.getElementById("conteudo")
		.getElementsByTagName("script");
	for (let i = 0; i < scripts.length; i++) {
		eval(scripts[i].innerText); // Avalia o conteúdo do script
	}
}

function executeScriptInContent2(data) {
  const scripts = document.getElementById("conteudo").getElementsByTagName("script");
  for (let i = 0; i < scripts.length; i++) {
    const script = document.createElement("script");
    script.text = scripts[i].innerText;
    document.body.appendChild(script).parentNode.removeChild(script);
  }
}


window.addEventListener("DOMContentLoaded", (event) => {
	var nome = sessionStorage.getItem("nome");

	nomeSpan.innerHTML = nome;

	console.log(nome);
});

function toggleMenu() {
    var menu = document.getElementById('menu');
    var conteudo = document.getElementById('conteudo');
    var screenWidth = window.innerWidth; // Get the current screen width

    if (screenWidth <= 425) { // Check if the screen width is 425 pixels or less
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
            conteudo.style.display = 'flex';
        } else {
            menu.style.display = 'flex';
            menu.style.flexDirection = 'column';
            conteudo.style.display = 'none';
        }
    }
}

document.getElementById('menu-toggle').addEventListener('click', function () {
	var menu = document.getElementById('menu');
	var conteudo = document.getElementById('conteudo');
	if (menu.style.display === 'flex') {
		menu.style.display = 'none';
		conteudo.style.display = 'flex';
	} else {
		menu.style.display = 'flex';
		menu.style.flexDirection = 'column';
		conteudo.style.display = 'none';
	}
});

document.addEventListener("DOMContentLoaded", function () {
	M.toast({ html: "bem vindo ao super chat 👾📸", classes: "rounded" });
  });