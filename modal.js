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

const fermemodalbtn = document.querySelectorAll('#close');
fermemodalbtn.addEventListener("click",fermermodal){
  
function fermermodal
{
  modal-body.style.display = "none";
}
});

const prenom = document.getElementById("first");
const email = document.getElementById("email");
const datenaissance = document.getElementById("birthdate");
const newyork = document.getElementById("location1");
const sanfrancisco = document.getElementById("location2");
const seattle = document.getElementById("location3");
const chicago = document.getElementById("location4");
const boston = document.getElementById("location5");
const portland = document.getElementById("location6");
const tournoi = document.getElementById("quantity");

//nom à 3 lettre minimum

const nom1 = document.getElementById("last");
nom1.addEventListener("input",function(troisletter);


  function troisletter(event)
  {
    if(event.target.value<3){
      console.log("veuillez entrer au moins 3 lettres pour le nom")
    } else{
      nom1.innerText = event.target.value;
    }
  }


/*
  const prenom = document.getElementById("first");
  prenom.addEventListener("input",function(troisletter);
*/

/*
  if (nom1.value.length<3){
    nom1.length = "veuillez entrer au moins 3 lettres pour le nom";
      }
      else {
        nom1.innerHTML = event.target.value;
      }


});
*/






//si value <3 metre le msg  sinon disparaitre ,
//data atribute de type error , mettre à l'input un data error
//data error();
