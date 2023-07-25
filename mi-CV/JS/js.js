var section = document.getElementById("header__banner");
var profile = document.getElementById("header__profile");

function changeBanner() {
  section.style.backgroundImage = "url('/Challenges/Challenge-2-portafolio-repositorio-base/mi-CV/imgs/banners/banner-943866_1920.jpg')";
  profile.style.color = "#173753";
}

//change lengeage

function changeToEspanol() {
  window.location.href = 'http://127.0.0.1:5500/ONE--main/Challenges/Challenge-2-portafolio-repositorio-base/mi-CV/index-espa%C3%B1ol.html';
}

function changeToEnglish(){
  window.history.back();
}

//burger nav

let menu = document.getElementById("menu");

function toggleMenu() {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}


