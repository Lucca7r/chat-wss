const photoUser = document.getElementById("photo-user");
const username = document.getElementById("floatingInput");
const checkbox = document.getElementById("flexCheckDefault");

let id = "vFrH132ECKUv6ZMMAlavcCLxGpV5BNWKZ08GaSy8ahg";
let url = `https://api.unsplash.com/photos/random?client_id=${id}&query=animals`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let img = data.urls.regular;
    photoUser.innerHTML = `<img id="img_user" src="${img}" alt="user" />`;
  });

document
  .querySelector(".login_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var nome = document.getElementById("floatingInput").value;
    sessionStorage.setItem("nome", nome);
    window.location.href = "/frontend/screen/Home/home-pag.html";
    console.log(nome);
  });

window.onload = function () {
  var savedName = localStorage.getItem("nome");
  if (savedName) {
    username.value = savedName;
    checkbox.checked = true;
  }
};

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    localStorage.setItem("nome", username.value);
  } else {
    localStorage.removeItem("nome");
  }
});

document.getElementById('menu-toggle').addEventListener('click', function () {
	var menu = document.getElementById('menu');
	if (menu.style.display === 'flex') {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'flex';
		menu.style.flexDirection = 'column';
	}
});