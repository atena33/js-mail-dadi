 // Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;
var msg;
var check = false;
 // Chiedi all'utente la sua email
 var mailUser = prompt("Scrivi la tua email");

 // Lista delle mail di chi può accedere
 var mailList = ["aaaa@email.com", "bbbb@email.com", "cccc@email.com", "dddd@email.com", "eeee@email.com"];

 // Controlla che la mail dell'utente sia nella lista
 for (var i = 0; i < mailList.length; i++) {
   mailList[i];
   if (mailUser === mailList[i]) {
    check = true;
   }
  }

if (check) {
  msg = "Benvenuto";
}
else {
  msg = "Accesso negato";
}

 console.log(mailList);


 // Stampa

 document.getElementById('risultato').innerHTML = msg;
