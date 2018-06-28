/*const email = document.getElementById('exampleInputEmail1').value;

const validarEmail = (email) => {
  let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}

 
if(validar_email(email)) {
    alert("El email es correcto");
  } else {
    alert("El email NO es correcto");
  }*/
window.onload = () => {
  let password = document.getElementById('exampleInputPassword1').value;
  const submit = document.getElementById('btn-inicio');

  submit.addEventListener('click', () => {
    
  if (password.length > 8 && typeof password !== 'number') {
    alert ('Debes ingresar una contraseña numérica de hasta 8 caracteres');
  } else {
    document.getElementById('contenedor1').style.display = 'none';
    document.getElementById('contenedor2').style.display = 'block';
  }
});


}

