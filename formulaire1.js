const infoIcon = '<img src="images/info.png">';
const errorIcon = '<img src="images/bad.png">';
const noerrorIcon = '<img src="images/good.png">';

function onFocusNom() {
  msgNom.innerHTML = `${infoIcon} le nom doit contenir au moins deux caracteres`;
}

function onBlurNom() {
  if (nom.value.length < 2) {
    msgNom.innerHTML = `${errorIcon} le nom doit contenir au moins deux caracteres`;
  } else {
    msgNom.innerHTML = `${noerrorIcon}`;
  }
}

function onFocusPrenom() {
  msgPrenom.innerHTML = `${infoIcon} le prenom doit contenir au moins deux caracteres`;
}

function onBlurPrenom() {
  if (prenom.value.length < 2) {
    msgPrenom.innerHTML = `${errorIcon} le nom doit contenir au moins deux caracteres`;
  } else {
    msgPrenom.innerHTML = `${noerrorIcon}`;
  }
}

function onFocusAge() {
  msgAge.innerHTML = `${infoIcon} le Age doit contenir au moins deux caracteres`;
}

function onBlurAge() {
  if (age.value.length < 2) {
    msgAge.innerHTML = `${errorIcon} l'age doit contenir au moins deux caracteres`;
  } else {
    msgAge.innerHTML = `${noerrorIcon}`;
  }
}

function onFocusPseudo() {
  msgPseudo.innerHTML = `${infoIcon} le Pseudo doit contenir au moins deux caracteres`;
}

function onBlurPseudo() {
  if (pseudo.value.length < 2) {
    msgPseudo.innerHTML = `${errorIcon} le pseudo doit contenir au moins deux caracteres`;
  } else {
    msgPseudo.innerHTML = `${noerrorIcon}`;
  }
}

function onFocusPassword() {
  msgPassword.innerHTML = `${infoIcon} le Password doit contenir au moins deux caracteres`;
}

function onBlurPassword() {
  if (password.value.length < 2) {
    msgPassword.innerHTML = `${errorIcon} le Password doit contenir au moins deux caracteres`;
  } else {
    msgPassword.innerHTML = `${noerrorIcon}`;
  }
}

function onFocusPassword() {
  msgPassword.innerHTML = `${infoIcon} le Password doit contenir au moins deux caracteres`;
}

function onBlurPassword1() {
  if (password1.value.length < 2) {
    msgPassword1.innerHTML = `${errorIcon} le Password doit contenir au moins deux caracteres`;
  } else {
    msgPassword1.innerHTML = `${noerrorIcon}`;
  }
}

function onFocusmail() {
  msgmail.innerHTML = `${infoIcon} il faut cocher la case mail `;
}

function onBlurmail() {
  if (mail.value.length === mail.value.length) {
    msgmail.innerHTML = noerrorIcon;
  }

  //   } else {
  //     msgmail.innerHTML = `${noerrorIcon}`;
  //   }
}

// function onchangepays()
// {
// 	if (msgpays.value == senegal)
// }
