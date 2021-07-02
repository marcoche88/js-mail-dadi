/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.
*/

/*
1- crea array di email
2- chiedi mail a utente
3- cotrolla se email è presente nella lista
4-stampa messagio
*/

// MAIL

var emails = ["luca@mail.it", "giovanni@mail.it", "maria@mail.com", "ale15@mail.it"];
console.table(emails);
var existMail = false;
var login = document.getElementById("mail-login");

// input utente
var userMail = prompt("Inserisci la tua mail").trim().toLowerCase();
console.log(userMail);

// validazione

if (!userMail) {
    window.location.reload();
} 

// controllare se e-mail è presente nell'array
for (i = 0; i < emails.length; i++) {
    console.log(emails[i]);

    if (emails[i] === userMail) {
        existMail = true;
    }
}

// stampa messaggio
if (existMail == true) {
    login.innerHTML = "E-mail corretta. Accesso effettuato";
} else {
    login.innerHTML = "E-mail non valida";
}