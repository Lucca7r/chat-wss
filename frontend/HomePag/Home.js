let chatAtivo = false;
const chatInput = document.querySelector(".chat_input");

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
      console.log("chat")
    }
  });
  
  