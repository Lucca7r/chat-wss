let chatAtivo = false;


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
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
 
  
  