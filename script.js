let hours=document.getElementById("hrs");
let mins=document.getElementById("min");
let sec=document.getElementById("sec");

setInterval(() => {
    
    let currentTime = new Date();  


    hours.innerHTML=(currentTime.getHours());
    mins.innerHTML=(currentTime.getMinutes());
    sec.innerHTML=(currentTime.getSeconds());
    

   if(currentTime.getMinutes()===5)
   {
    let text ="hello wake up "
          
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
   }
}, 1000)

