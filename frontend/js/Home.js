const chatGeral = document.getElementById("chat-geral");


chatGeral.addEventListener('click', function (event) 
   {
    event.preventDefault();
    fetch('chat_geral.html')
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("conteudo").innerHTML = data;
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  })

