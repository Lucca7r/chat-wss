
      // Selecionando elementos do DOM
      const chatForm = document.getElementById("chat_form_img");
      const chatInputFile = document.getElementById("file-upload-input");
      const chatInput = document.querySelector(".chat_input");
      const chatButton = document.querySelector(".chat_button");
      const chatMessages = document.querySelector(".chat_massage");

      chatForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const file = chatInputFile.files[0];

        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.width = 200;

        chatMessages.appendChild(img);

        
      });