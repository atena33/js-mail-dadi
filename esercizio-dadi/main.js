 // Gioco dei dadi, chi fa di più vince.
var msg;
 // Lo user lancia il dado
 var user =  Math.floor(Math.random() * 6 + 1);
 alert ("Il tuo numero è " + user)

 // il Pc lancia il dado
var pc =  Math.floor(Math.random() * 6 + 1);
alert ("Il numero del tuo avversario è " + pc);


 // Verificare chi vince
 if (user > pc) {
    msg = "Hai vinto!";
  }
  else if (user < pc) {
    msg = "Hai perso!";
  }
  else {
    msg = "Avete pareggiato!"
  }

 //  Output

  document.getElementById('risultato').innerHTML = msg;
