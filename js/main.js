const email = document.getElementById('exampleInputEmail1').value;

const validarEmail = (email) => {
  let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}

 
if(validar_email(email)) {
    alert("El email es correcto");
  } else {
    alert("El email NO es correcto");
  }

