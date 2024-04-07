const login = document.querySelector(".login");
const loginForm = document.querySelector(".login_form");

const chat = document.querySelector(".chat");
const chatForm = document.querySelector(".chat_form");
const chatInput = document.querySelector(".chat_input");

const chatMessages = document.querySelector(".chat_massage");



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


window.addEventListener("DOMContentLoaded", (event) => {
  var nome = localStorage.getItem("nome");
  user.name = nome;
  console.log(user);
  handleLogin();
});
