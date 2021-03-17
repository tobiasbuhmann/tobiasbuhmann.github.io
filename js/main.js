function validateRegistration() {
  if (document.registrierung.vorname.value == "") {
    alert("Eingabefehler");
    document.registrierung.vorname.focus();
    return false;
  }
  if (document.registrierung.nachname.value == "") {
    alert("Eingabefehler");
    document.registrierung.nachname.focus();
    return false;
  }
  if (document.registrierung.adresse.value == "") {
    alert("Eingabefehler");
    document.registrierung.adresse.focus();
    return false;
  }
  if (document.registrierung.herkunftsland.value == "-1") {
    alert("Eingabefehler");
    document.registrierung.herkunftsland.focus();
    return false;
  }
  if (document.registrierung.userID.value == "") {
    alert("Eingabefehler");
    document.registrierung.userID.focus();
    return false;
  }
  if (document.registrierung.mail.value == "") {
    alert("Eingabefehler");
    document.registrierung.mail.focus();
    return false;
  } else if (document.registrierung.mail.value != "") {
    validateMail();
  }
  if (document.registrierung.passwort.value == "") {
    alert("Eingabefehler");
    document.registrierung.passwort.focus();
    return false;
  }
  if (document.registrierung.passwortBest.value == "") {
    alert("Eingabefehler");
    document.registrierung.passwortBest.focus();
    return false;
  }
  if (
    document.registrierung.passwort.value &&
    document.registrierung.passwortBest.value != ""
  ) {
    validateMail();
  }
  if (document.registrierung.studiengang.value == "-1") {
    alert("Eingabefehler");
    document.registrierung.studiengang.focus();
    return false;
  }
  if (document.registrierung.studienjahr.value == "-1") {
    alert("Eingabefehler");
    document.registrierung.studienjahr.focus();
    return false;
  }
  return true;
}

function validateMail() {
  var mail = document.registrierung.mail.value;
  atPos = mail.indexOf("@");
  dotPos = mail.lastIndexOf(".");

  if (atPos < 1 || dotPos - atPos < 2) {
    alert("Gültige E-Mail eingeben");
    document.registrierung.mail.focus();
    return false;
  }
}
