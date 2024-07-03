let settingsBtn = document.querySelector(".settings-button");
let myProjectsBtn = document.querySelector(".projects-button");
let CredsBtn = document.querySelector(".Credits-button");
let homeBtn = document.querySelector(".home-button");
let citationsBtn = document.querySelector(".Citations-button");
let LTxtBtn = document.querySelector(".Bigger-Text");
let Text = document.querySelector("body");

settingsBtn.addEventListener("click", function() {
   window.location.href = "settings.html";
});

myProjectsBtn.addEventListener("click", function() {
    window.location.href = "projects.html";
});


citationsBtn.addEventListener("click", function() {
    window.location.href ="ContactInfo.html";
});

homeBtn.addEventListener("click", function() {
    window.location.href = "index.html";
});

CredsBtn.addEventListener("click", function() {
    window.location.href = "Credits.html";
});




