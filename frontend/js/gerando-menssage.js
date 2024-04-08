const login = document.querySelector(".login");
const loginForm = document.querySelector(".login_form");

const chat = document.querySelector(".chat");
const chatForm = document.querySelector(".chat_form");
const chatInput = document.querySelector(".chat_input");

const chatMessages = document.querySelector(".chat_massage");



let chatAtivo = false;



window.addEventListener("DOMContentLoaded", (event) => {
  var nome = localStorage.getItem("nome");
  user.name = nome;
  console.log(user);
  handleLogin();
});
