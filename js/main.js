

 // let email = document.getElementById('email').value;

 function isValidEmail() { 
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(); 
}


const validarPassword = (password) => {
  if (typeof password === 'number') {
    console.log('contraseña es numérica');
    let passwordString = password.toString();
    if (passwordString.length < 8) {
      console.log('contraseña válida');
  return true;
    }
  } else {
    console.log('contraseña inválida');
  return false;
  }
}


  const inicio = document.getElementById('btn-inicio');

  inicio.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    console.log(email);
    
    /*const password = document.getElementById('password').value;
    if (isValidEmail(email) && validarPassword(password)) {*/
    document.getElementById('contenedor1').style.display = 'none';
    document.getElementById('contenedor2').style.display = 'block';
    //}
  });

  const perfil = document.getElementById('perfil');

  perfil.addEventListener('click', () => {
    console.log('funciona');
    document.getElementById('contenedor2').style.display = 'none';
    document.getElementById('contenedor3').style.display = 'block'; 
  })





