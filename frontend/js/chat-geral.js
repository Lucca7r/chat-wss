chatForm = document.getElementById("chat_form");
chatInput = document.querySelector(".chat_input");
chatButton = document.querySelector(".chat_button");

const sendMessage = (event) => {
  event.preventDefault();

  console.log(chatInput.value);
};


chatForm.addEventListener("submit", sendMessage);

