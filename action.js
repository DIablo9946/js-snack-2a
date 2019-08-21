// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e
// una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
//
// fate prima funzionare il tutto e poi il “generetore di nomi+cognomi”
// sarà una function con 2 argomernti, ovvero prendere gli array nomi e
// cognomi come valori all’esecuzione della funzione.

var listanom = ["Paolo", "Marco", "Filippo", "Simone", "Giuseppe"];
var listacogn = ["Paretti", "Chiusi", "Gratti", "DiLeo", "Caprese"];

var falsalista = [];

var falnom = Math.floor(Math.random() * listanom.length);
var falcogn = Math.floor(Math.random() * listacogn.length);

console.log(listanom[falnom]);
console.log(listacogn[falcogn]);

falsalista.push(listanom[falnom]);
falsalista.push(listacogn[falcogn]);

console.log(falsalista);
