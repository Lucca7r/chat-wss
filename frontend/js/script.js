const login = document.querySelector(".login");
const loginForm = document.querySelector(".login_form");

const chat = document.querySelector(".chat");
const chatForm = document.querySelector(".chat_form");
const chatInput = document.querySelector(".chat_input");

const chatMessages = document.querySelector(".chat_massage");

/* chat do geral */
const geralChat = document.querySelector(".geral-chat");
var chatValue = document.querySelector(".chat_input");


let chatAtivo = false;

const user = { id: "", name: "", color: "" };
let websocket;

const createMessageYou = (content) => {
  const div = document.createElement("div");

  div.innerHTML = content;
  div.classList.add("message_you");
  return div;
};

const createMessageOther = (content, sender, senderColor) => {
  const div = document.createElement("div");
  const span = document.createElement("span");

  div.classList.add("message_other");
  span.classList.add("message_send");
  span.style.color = senderColor;

  div.appendChild(span);

  span.innerHTML = sender;
  div.innerHTML += content;

  return div;
};

const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * color.length);
  return color[randomColor];
};

const scrollScreen = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

const processMessage = ({ data }) => {
  const { userId, userName, userColor, conteudo } = JSON.parse(data);

  const message =
    userId === user.id
      ? createMessageYou(conteudo)
      : createMessageOther(conteudo, userName, userColor);

  chatMessages.appendChild(message);
  scrollScreen();
};

const handleLogin = (event) => {
  user.id = crypto.randomUUID();
  user.color = getRandomColor();

  websocket = new WebSocket("ws://localhost:8080");
  websocket.onmessage = processMessage;
};

const sendMessage = (event) => {
  event.preventDefault();

  const message = {
    userId: user.id,
    userName: user.name,
    userColor: user.color,
    conteudo: chatInput.value,
  };

  websocket.send(JSON.stringify(message));

  chatValue.value = "";
};

document.addEventListener("DOMContentLoaded", function () {
  const chatGeralElement = document.getElementById("chat-geral");
  if (chatGeralElement) {
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

document.addEventListener("click", function (event) {
  if (chatAtivo) {
    event.preventDefault();
    
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  var nome = localStorage.getItem("nome");
  user.name = nome;
  console.log(user);
  handleLogin();
});
