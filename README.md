LINK SLIDE projeto paralelismo: https://www.canva.com/design/DAGEZo8KEo4/wQBQqieZjLHJbaTPehZlOA/edit?utm_content=DAGEZo8KEo4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

<h1 align="center">📝 CHAT-WSS 📝</h1>

<p align="center">
<img src="./assets/gifCapa.gif" alt="capa do projeto" width="700"><br>


<p align="center">Projeto desenvolvido em JavaScript e Node.js<br> 
</p>

<p align="center">
  <a href="#-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#colaboradores">Colaboradores</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>


# 📝 Descrição

Este projeto foi feito para uma atividade acadêmica. Ele conta com um chat geral, uma conexão websocket, um jogo da memória, um player de música, um processamento de imagem para escala de cinza, utilizando o servidor Node para servir a imagem processada para o usuário, e uma calculadora.
tambem contando com a API da unsplash para servi imagens random

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Javascript
- HTML & CSS
- Boostrap & materialize
- API unsplash
- Node.JS
- Websocket
- Git e Github

## 💻 Projeto
<span> 

  
<p align="center">
  <strong>Tela Inicial</strong><br><br>
<img src="./assets" alt="Tela de de start do projeto rodando" width="600">
  <br><br>
Este código representa a tela inicial de uma aplicação de gerenciamento de tarefas. Nela, o usuário encontra duas opções: cadastrar-se e entrar na plataforma. 

A interface é composta por elementos gráficos como botões e etiquetas, posicionados de maneira organizada. O botão "cadastrar-se" e "entrar" têm funcionalidades associadas que direcionam o usuário para outras telas da aplicação.

Há também a presença de um botão com ícone do GitHub que, quando clicado, abre uma página web do repositório da aplicação nesta plataforma.

Todo o código é estruturado em classes e métodos. O método principal é responsável por iniciar a tela inicial da aplicação.
<br>
 </p>
<br>

##
<br>
<p align="center">
  <strong>Tela de login</strong><br>
<img src="./assets/telaLogin.png" alt="tela de login da aplicação" width="600">
  <br><br>

  Este código representa a tela de login de uma aplicação. Nela, o usuário deve digitar seu nome de usuário e senha para acessar a plataforma.

A tela é composta por elementos gráficos como um campo para digitar o nome de usuário, uma caixa para digitar a senha e um botão "entrar" para submeter as informações e realizar o login.

Ao clicar no botão "entrar", o sistema verifica se as informações são válidas, comparando-as com os dados armazenados no banco de dados. Se o login for bem-sucedido, o usuário é direcionado para a tela que exibe todas as suas tarefas. Caso contrário, é exibida uma mensagem de erro informando que o usuário ou senha estão incorretos.

Todo o código é estruturado em classes e métodos. A classe `LoginScreen` herda as funcionalidades de um JFrame e possui um construtor que inicializa seus componentes. Há também os métodos `initComponents()` que cria todos os elementos gráficos presentes na interface e `checkIfUserExists()` que verifica os dados de login no banco de dados.

O método principal é responsável por iniciar a tela de login da aplicação.

<br>
</p>
<br>

##

<p align="center">
   <strong>Tela de inscrever-se</strong><br>
<img src="./assets/telaNovoUsuario.png" alt="" width="600">
  <br><br>

  Quando o usuário clica no botão "Cadastrar", a aplicação verifica se os campos "Nome", "Nickname" e "Senha" foram preenchidos corretamente. Caso esses campos apresentem algum erro, a aplicação exibe uma mensagem de erro alertando o usuário para corrigir o erro. Caso contrário, a aplicação cria um novo objeto do tipo "Usuário" com as informações fornecidas pelo usuário e insere essas informações em um banco de dados usando a classe BDD. 

Finalmente, uma mensagem de sucesso é exibida na tela e o usuário é redirecionado para a tela de login. 

<br>
</p>
<br>

##


<p align="center">
  <strong>Tela com lista de tarefas</strong><br>
<img src="./assets/telaTarefasLista.png" alt="" width="600">
<br><br>
A tela é composta por uma lista de tarefas, cada uma com uma caixa de seleção, uma data de início, uma data de término, um nome, uma prioridade e um botão "Delete" para excluir a tarefa.

A classe `TasksScreen` é a janela principal da aplicação, que exibe a lista de tarefas do usuário identificado pelo parâmetro `id`. A classe `subPanel` é uma classe interna que define cada item da lista de tarefas, com uma caixa de seleção, uma data de início, uma data de término, um nome, uma prioridade e um botão "Delete" para excluir a tarefa. A lista de tarefas é carregada através do método `printarTarefas`, que obtém as tarefas do usuário a partir do banco de dados usando a classe `BDD` e cria um novo `subPanel` para cada tarefa.

O método `initComponents` é responsável por definir a aparência da tela, criando os componentes gráficos (botões, rótulos, áreas de texto) e organizando-os usando o `BoxLayout`.

Ao clicar no botão "Criar Nova Tarefa", a tela de criação de uma nova tarefa é aberta e é possível adicionar uma nova tarefa na lista.
  
<br>
</p>
<br>

##


<p align="center">
  <strong>Tela com lista de tarefas</strong><br>
<img src="./assets/TelaNovaTarefa.png" alt="" width="600">
<br><br>
  Ao abrir a tela, o usuário se depara com uma interface gráfica, que contém diversos elementos como rótulos, campos de texto, botão etc. Esses elementos foram criados utilizando a biblioteca gráfica Swing. 

O painel secundário contém um campo para o nome da tarefa, que o usuário digita no campo de texto jTextField1. Há também um espaço para descrever a tarefa, usando a área de texto jTextArea1. Outros campos permitem inserir a data de início e término da tarefa. Existem ainda botões que permitem que o usuário escolha a prioridade da tarefa entre Baixa, Média, Alta e Urgente.

O código define especificações dos elementos gráficos, como fonte e cor, e também o formato de data que o usuário deve inserir. Algumas funcionalidades são definidas, como a resposta do sistema quando o usuário clica em botões ou em campos específicos do menu.

De um modo geral, esse código define a interface com a qual o usuário interage para criar novas tarefas, e é essencial para o uso correto da aplicação.
  <br>
</p>
<br>

##

<p align="center">
  <strong>Tela confirmações de excluisão</strong><br>
<img src="./assets/telaExcluirT.png" alt="" width="600">
    <br>
</p>
<br>

  
</span>

## 🤝Colaboradores


- Colaboradores que fizeram parte do projeto.
<br><br>

     -  [@Lorrana Nasareth](https://github.com/LorranaNS)
    <br><br>
     -  [@Luan Medrado](https://github.com/LuanMedrado8)
        <br><br>
     -  [@Guilherme Braga](https://github.com/guiibrag4)
        <br><br>
        
 

