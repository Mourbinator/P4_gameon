function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//nom à 3 lettre

const nom1 = document.querySelector("Nom");
nom1.addEventListener("input",function(troisletter){

  function troisletter(event){
    if(event.target.value<3){
      console.log("veuillez entrer au moins 3 lettres pour le nom")
    } else{
      nom1.innerHTML = event.target.value;
    }
  }

/*
  if (nom1.value.length<3){
    nom1.length = "veuillez entrer au moins 3 lettres pour le nom";
      }
      else {
        nom1.innerHTML = event.target.value;
      }
      */

});

//si value <3 metre le msg  sinon disparaitre ,
//data atribute de type error , mettre à l'input un data error
//data error();
