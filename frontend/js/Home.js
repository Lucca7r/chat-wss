const chatGeral = document.getElementById("chat-geral");
const chatImage = document.getElementById("chat-image");


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

