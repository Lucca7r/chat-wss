const chatGeral = document.getElementById("chat-geral");


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

  function executeScriptInContent() {
    const scripts = document.getElementById("conteudo").getElementsByTagName("script");
    for (let i = 0; i < scripts.length; i++) {
      eval(scripts[i].innerText); // Avalia o conteúdo do script
    }
  }


