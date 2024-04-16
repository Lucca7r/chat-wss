const chatGeral = document.getElementById("chat-geral");
const chatImage = document.getElementById("chat-image");
const jogo__memoria = document.getElementById("chat-jogos");
const nomeSpan = document.getElementById("nome_user");
const player_musica = document.getElementById("player_musica")

chatGeral.addEventListener('click', function (event) 
   {
    event.preventDefault();
    fetch('chat_geral.html')
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("conteudo").innerHTML = data;
        executeScriptInContent();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  })


chatImage.addEventListener('click', function (event)
    {
      event.preventDefault();
      fetch('../chat-image/chat_image.html')
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("conteudo").innerHTML = data;
          executeScriptInContent();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

  function executeScriptInContent() {
    const scripts = document.getElementById("conteudo").getElementsByTagName("script");
    for (let i = 0; i < scripts.length; i++) {
      eval(scripts[i].innerText); // Avalia o conteúdo do script
    }
  }

  jogo__memoria.addEventListener('click', function(event) {

    
      event.preventDefault();
      fetch('../jogo__memoria/jogo__memoria.html')
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("conteudo").innerHTML = data;
          executeScriptInContent();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

  function executeScriptInContent() {
    const scripts = document.getElementById("conteudo").getElementsByTagName("script");
    for (let i = 0; i < scripts.length; i++) {
      eval(scripts[i].innerText); // Avalia o conteúdo do script
    }
  }

  player_musica.addEventListener('click', function(event) {

    
    event.preventDefault();
    fetch('../player_musica/player_musica.html')
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("conteudo").innerHTML = data;
        executeScriptInContent();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

function executeScriptInContent() {
  const scripts = document.getElementById("conteudo").getElementsByTagName("script");
  for (let i = 0; i < scripts.length; i++) {
    eval(scripts[i].innerText); // Avalia o conteúdo do script
  }
}


  window.addEventListener("DOMContentLoaded", (event) => {
    var nome = sessionStorage.getItem("nome");

    nomeSpan.innerHTML = nome;

    console.log(nome);
  });