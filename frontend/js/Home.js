// Select the chat_geral element
const chatGeral = document.getElementById("#chat-geral");


chatGeral.addEventListener('click', function() {
  
  const chatContent = document.getElementById('conteudo');


  if (chatContent.innerHTML === '') {
   
    fetch('chat.html')
      .then(response => response.text())
      .then(data => {
   
        chatContent.innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading chat content:', error);

      });
  }
});