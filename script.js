
console.log("Welcome to my portfolio!");


const year = new Date().getFullYear();

document.getElementById("year").textContent = year;

const welcomeButton = document.getElementById("welcomeBtn");

welcomeButton.addEventListener("click", function() {

    alert("Welcome to my portfolio! Thanks for visiting.");

});


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("You clicked: " + link.textContent);

    });

});