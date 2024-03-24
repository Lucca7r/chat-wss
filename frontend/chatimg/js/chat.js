import { processImage } from '../../../backend/image_process/processamentoPB.js';

const chat = document.querySelector(".chat");
const chatForm = document.querySelector(".chat_form");
const chatInput = document.querySelector(".chat_input");


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