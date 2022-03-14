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
  alert("ok");
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

// Balise formulaire
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
const submitform = document.querySelector(".btn-submit");

//regex
const regname = /^[a-zA-Z-\s]+$/;
const regmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
const regbirth = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;


//mise en place formulaire


formulaire.addEventListener("submit",submit);

function submit(e)
{
  e.preventDefault();

  //nom à 3 lettre minimum



    prenom.addEventListener("input",firstletter);
    function firstletter(event)
    {
      if(event.target.value.length<2 || regname.test(event.target.value) == false){
        errormsg(prenom);
         /*formData.style.display = "block";*/
      } else{
        errormsghide(prenom);
        //prenom.innerText = event.target.value;
      }
    }

    nom1.addEventListener("input",lastletter);
    function lastletter(event)
    {
      if((event.target.value.length<2) || regname.test(event.target.value) == false){
        errormsg(nom1);
         /*formData.style.display = "block";*/
      } else{
        errormsghide(nom1);
        //nom1.innerText = event.target.value;
      }
    }

    //vérif email
    if(regmail.test(email.value))
    {
      errormsghide(email);
    }else{
      errormsg(email);
    }

    //vérid date de naissance
    if(regbirth.test(datenaissance.value))
    {
      errormsghide(datenaissance);
    }else{
      errormsg(datenaissance);
    }

    //vérif tournois

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
    if((tournoi.value>98)  || (tournoi.value === "")){
      errormsg(tournoi)
    }else{
      errormsghide(tournoi)
    }







/*
  if(prenom.value.length <2 ||regname.test(prenom.value) == false)
  {
    errormsg(prenom);
  } else {
    errormsghide(prenom);
    prenom.innerText = event.target.value;
  }
  */

}

submitform.addEventListener("click",function(){

  alert("ferme");

  modal1.innerHTML = "merci pour votre submission";

});











function errormsg(elt){
  elt.closest(".formData").dataset.errorVisible = "true";
}
function errormsghide(elt){
  elt.closest(".formData").dataset.errorVisible = "false";
}


/*
  const prenom = document.getElementById("first");
  <data-error="Firstname must not be empty."
  data-error-visible="false"

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
