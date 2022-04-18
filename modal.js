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

const fermemodalbtn = document.querySelector(".close");

fermemodalbtn.addEventListener("click",fermermodal);

let modal1 =  document.querySelector('.bground');
console.log(modal1);

function fermermodal()
{
 modal1.style.display = "none";
}

// Balises formulaire
const formulaire = document.forms["reserve"];
const nom1 = document.getElementById("last");
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
const cgu =  document.getElementById("checkbox1");
const submitform = document.getElementById("submit1");
const merci = document.querySelector(".merci");

//regex
const regname = /^[a-zA-Z-\s]+$/;
const regmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
const regbirth = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;


//mise en place formulaire


formulaire.addEventListener("submit",submit);

function submit(e)
{
  e.preventDefault();

  //prénom et nom nom à 2 lettre minimum

  if(prenom.value.length<2 || regname.test(prenom.value) == false)
  {
    errormsg(prenom);
  } else{
    errormsghide(prenom);

  }

  if((nom1.value.length<2) || regname.test(nom1.value) == false)
  {
    errormsg(nom1);
  } else{
    errormsghide(nom1);
  }



    //vérification email
    if(regmail.test(email.value))
    {
      errormsghide(email);
    }else{
      errormsg(email);
    }

    //vérification date de naissance
    if(regbirth.test(datenaissance.value))
    {
       errormsghide(datenaissance);
    }else{
       errormsg(datenaissance);
    }




    //vérif location1
    if((newyork.checked) || (sanfrancisco.checked) || (seattle.checked) || (chicago.checked) || (boston.checked) || (portland.checked)){
      errormsghide(location1)
    }else{
      errormsg(location1)
    }

    //vérif cgu
    if(!cgu.checked){
      errormsg(cgu);
    }else{
      errormsghide(cgu);
    }

    // vérif nombre de tournois
    if((tournoi.value>98)  || (tournoi.value === "")){
      errormsg(tournoi)
    }else{
      errormsghide(tournoi)
    }

    //vérification toute condition ay clic pour soumission form
  submitform.addEventListener("click",function()
  {
      if( cgu.checked && tournoi.value && ((newyork.checked) || (sanfrancisco.checked) || (seattle.checked) || (chicago.checked) || (boston.checked) || (portland.checked)) && datenaissance.value && email.value && event.target.value )
      {
      showmerci();

      }else{
      hidemerci();
    }

  });






}
formulaire.reset();



//event input du nom et prénom
prenom.addEventListener("input",firstletter);
function firstletter(event)
{
  if(event.target.value.length<2 || regname.test(event.target.value) == false){
    errormsg(prenom);
  } else{
    errormsghide(prenom);
  }
}

nom1.addEventListener("input",lastletter);
function lastletter(event)
{
  if((event.target.value.length<2) || regname.test(event.target.value) == false){
    errormsg(nom1);

  } else{
    errormsghide(nom1);

  }
}

//fonctions d'erreur message
function errormsg(elt){
  elt.closest(".formData").dataset.errorVisible = "true";
}
function errormsghide(elt){
  elt.closest(".formData").dataset.errorVisible = "false";
}

//fonctions affichage erreur message
function showmerci(){
  formulaire.style.display = "none";
  merci.style.display = "flex";
}
function hidemerci(){
  merci.style.display = "";
  formulaire.style.display = "block";

}
