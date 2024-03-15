const login = document.querySelector(".login");
const loginForm = document.querySelector(".login_form");
const loginInput = document.querySelector(".login_input");

const chat = document.querySelector(".chat");
const chatForm = document.querySelector(".chat_form");
const chatInput = document.querySelector(".chat_input");

const chatMessages = document.querySelector(".chat_massage");

const user = { id: "", name: "", color: "" };

let websocket;

const createMessageYou = (content) => {
  const div = document.createElement("div");

  div.classList.add("message_you");

  div.innerHTML = content;

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
  event.preventDefault();
  user.name = loginInput.value;
  user.id = crypto.randomUUID();
  user.color = getRandomColor();

  login.style.display = "none";
  chat.style.display = "flex";

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

  chatInput.value = "";
};

loginForm.addEventListener("submit", handleLogin);
chatForm.addEventListener("submit", sendMessage);
