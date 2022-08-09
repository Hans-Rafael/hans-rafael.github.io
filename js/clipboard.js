
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");
  /* Select the text field */
  copyText.select();
  /* Copy the text inside the text field */
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  var uno = document.getElementById("on");
  if(uno.innerHTML == "Copiar/copy"){
      uno.innerHTML = "Copiar/copy";
  } else {
      uno.innerHTML = "Copiado/copied";
  }
} 
function myFunction2() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");
  /* Select the text field */
  copyText.select();
  /* Copy the text inside the text field */
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  var uno = document.getElementById("on2");
  if(uno.innerHTML == "Copiar/copy"){
      uno.innerHTML = "Copiar/copy";
  } else {
      uno.innerHTML = "Copiado/copied";
  }
} 

function myTlfFunction() {
  /* Get the text field */
  var copyInf = document.getElementById("myInput2");
  /* Select the text field */
  copyInf.select();
  /* Copy the text inside the text field */
  copyInf.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyInf.value);
  var un = document.getElementById("cop"); 
  if(un.innerHTML == "Copiar/copy"){
      un.innerHTML = "Copiado/copied";
  }else {
      un.innerHTML = "Copiado/copied";
  }
} 