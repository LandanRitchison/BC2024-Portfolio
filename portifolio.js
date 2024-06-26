let settingsBtn = document.querySelector(".settings-button");
let myProjectsBtn = document.querySelector(".projects-button");
let aboutMeBtn = document.querySelector(".about-button");
let homeBtn = document.querySelector(".home-button");
let citationsBtn = document.querySelector(".Citations-button");


settingsBtn.addEventListener("click", function() {
   window.location.href = "settings.html";
});

myProjectsBtn.addEventListener("click", function() {
    window.location.href = "projects.html";
});

aboutMeBtn.addEventListener("click", function(){
    window.location.href = "aboutMe.html";
});

citationsBtn.addEventListener("click", function() {
    window.location.href ="citation.html";
});

homeBtn.addEventListener("click", function() {
    window.location.href = "index.html";
});