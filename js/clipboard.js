
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
  if(uno.innerHTML == "Copiar"){
      uno.innerHTML = "Copiado";
  }else {
      uno.innerHTML = "Copiar";
  }
} 
function myTlfFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput2");
  /* Select the text field */
  copyText.select();
  /* Copy the text inside the text field */
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  var uno = document.getElementById("cop");
  if(uno.innerHTML == "Copiar"){
      uno.innerHTML = "Copiado";
  }else {
      uno.innerHTML = "Copiar";
  }
} 