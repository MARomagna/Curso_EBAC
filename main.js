document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector("#name");
  const usernameElement = document.querySelector("#username");
  const avatarElement = document.querySelector("#avatar");
  const repositorioElement = document.querySelector("#repositorio");
  const followersElement = document.querySelector("#followers");
  const followingElement = document.querySelector("#following");
  const linkElement = document.querySelector("#link");
  fetch(`https://api.github.com/users/MARomagna`)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      nameElement.innerText = json.name;
      usernameElement.innerText = json.login;
      avatarElement.src = json.avatar_url;
      repositorioElement.innerText = json.public_repos;
      followersElement.innerText = json.followers;
      followingElement.innerText = json.following;
      linkElement.href = json.html_url;
    });
});
