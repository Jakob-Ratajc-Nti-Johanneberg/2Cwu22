

  function replace( hide, hide2, hide3,  show ) {
    document.getElementById(hide).style.display="none";
    document.getElementById(show).style.display="inline-flex";
    document.getElementById(hide2).style.display="none";
    document.getElementById(hide3).style.display="none";
  }


  function hidediv(hide, show, show2 ,show3){
    document.getElementById(hide).style.display="none";
    document.getElementById(show).style.display="inline-flex";
    document.getElementById(show2).style.display="inline-flex";
    document.getElementById(show3).style.display="inline-flex";
  }

  var button = document.querySelector("#hamburger");
  var menu = document.querySelector("#navigation");



  button.addEventListener("click", () =>{
    if (menu.style.display === "none"){
      menu.style.display = "flex";
      button.innerHTML = "Close";
    }
    else{
      menu.style.display = "none";
      button.innerHTML = "Menu";
    }
  })