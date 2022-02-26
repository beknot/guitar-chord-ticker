console.log('Starting js'); //console.log(x);
let guitarChord = ['Am','A','C','Em','E','D','Dm'];
timer = setInterval(function(){
   rndInt = Math.floor(Math.random() * guitarChord.length);
   chord = guitarChord[rndInt];
   getGuitarChord(chord);
   console.log('['+rndInt+'] '+chord);
},7000);
let count = 1;
let color1 = "red";
let color2 = "black";
let color = color1;
ticker = setInterval(() => {
   if(count>7) { count = 1; color = (color==color2) ? color1: color2;  }
   document.getElementById('sp'+count).innerHTML = '____'; 
   document.getElementById('sp'+count).style.color = color; //console.log(count+' '+color);
   count++; 
}, 1000);
function getGuitarChord(chord) {
   document.getElementById('chord-now').innerHTML = chord; 
}