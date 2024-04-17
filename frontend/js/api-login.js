const photoUser = document.getElementById("photo-user");

      let id = "vFrH132ECKUv6ZMMAlavcCLxGpV5BNWKZ08GaSy8ahg";
      let url = `https://api.unsplash.com/photos/random?client_id=${id}&query=space`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let img = data.urls.regular;
          photoUser.innerHTML = `<img id="img_user" src="${img}" alt="user" />`;
        });

        document.querySelector('.login_form').addEventListener('submit', function(event) {
            event.preventDefault();
            var nome = document.getElementById('nome').value;
            sessionStorage.setItem('nome', nome);
            window.location.href = '/frontend/screen/Home/home-pag.html';
            console.log(nome);
        });