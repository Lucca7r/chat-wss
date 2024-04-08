let chatAtivo = false;
let existe = false;

const user = { id: "", name: "", color: "" };

let websocket;

document.addEventListener("DOMContentLoaded", function () {
  const chatGeralElement = document.getElementById("chat-geral");
  if (!chatAtivo) {
    chatGeralElement.addEventListener("click", function (event) {
      event.preventDefault();
      loadContent("chat_geral.html");
      chatAtivo = true;
    });
  }
});

if (!chatAtivo) {
  function loadContent(page) {
    fetch(page)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("conteudo").innerHTML = data;
        existe = true;
        connectWebsocket();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

const connectWebsocket = () => {
  websocket = new WebSocket("ws://localhost:8080");
};

document.addEventListener("click", (event) => {

  if (existe) {
    chatForm = document.getElementById("chat_form");
    chatInput = document.querySelector(".chat_input");
    chatButton = document.querySelector(".chat_button");

    /*mensagens */ 
    const chatMessages = document.querySelector(".chat_massage");

    let websocket;
    const connectWebsocket = () => {
      websocket = new WebSocket("ws://localhost:8080");
    };


    const createMessageYou = (content) => {
      const div = document.createElement("div");
    
      div.innerHTML = content;
      div.classList.add("message_you");
      return div;
    };

    const processMessage = ({ data }) => {
      const {
        userName,
        conteudo,
      } = JSON.parse(data);

      const element = createMessageYou(conteudo);

      chatMessages.appendChild(element);
    };

    websocket.addEventListener("open", (event) => {
      const enviarMensagem = (event) => {
        event.preventDefault();
        const message = {
          userName: user.name,
          conteudo: chatInput.value,
        };

        websocket.send(JSON.stringify(message));

        websocket.onmessage = processMessage;
        chatInput.value = "";
      };
      chatForm.addEventListener("submit", enviarMensagem);
    });

   
}});

window.addEventListener("DOMContentLoaded", (event) => {
  var nome = localStorage.getItem("nome");
  user.name = nome;
});