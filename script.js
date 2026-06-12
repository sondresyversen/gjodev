"use strict";

const hjem = document.getElementById("hjem");
const omgjødev = document.getElementById("omGjøDev");
const prosjekter = document.getElementById("prosjekter");
const kontaktmeg = document.getElementById("kontaktmeg");
const logo = document.getElementById("logo");
const menuOpenClose = document.getElementById("openclose");
const nav = document.getElementById("nav");
const navBtn = document.getElementById("h");
const navBtn1 = document.getElementById("h1");
const navBtn2 = document.getElementById("h2");
const navBtn3 = document.getElementById("h3");

hjem.addEventListener("click", function(){
    window.location.href = "/"
})

omgjødev.addEventListener("click", function(){
    window.location.href = "/omgjødev.html"
})

prosjekter.addEventListener("click", function(){
    window.location.href = "/prosjekter.html"
})

kontaktmeg.addEventListener("click", function(){
    window.location.href = "/kontaktmeg.html"
})

navBtn.addEventListener("click", function(){
    window.location.href = "/"
})

navBtn1.addEventListener("click", function(){
    window.location.href = "/omgjødev.html"
})

navBtn2.addEventListener("click", function(){
    window.location.href = "/prosjekter.html"
})

navBtn3.addEventListener("click", function(){
    window.location.href = "/kontaktmeg.html"
})


logo.addEventListener("click", function(){
    window.location.href = "/"
})

menuOpenClose.addEventListener("click", function() {
    if (menuOpenClose.classList.contains("fa-bars")) {
        menuOpenClose.classList.replace("fa-bars", "fa-xmark");
        nav.style.height = '140vh';
        nav.style.position = "fixed";
        nav.style.zIndex = "20";
        navBtn.style.display = "inline-block";
        navBtn1.style.display = "inline-block";
        navBtn2.style.display = "inline-block";
        navBtn3.style.display = "inline-block";
    } else if (menuOpenClose.classList.contains("fa-xmark")) {
        menuOpenClose.classList.replace("fa-xmark", "fa-bars");
        nav.style.height = '80px';
        nav.style.position = "relative";
        nav.style.zIndex = "0";
        navBtn.style.display = "none";
        navBtn1.style.display = "none";
        navBtn2.style.display = "none";
        navBtn3.style.display = "none";
    }
});