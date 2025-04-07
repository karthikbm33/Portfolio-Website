const words = ["tuned"];
let index=0;
const wordElement=document.getElementById("word");

function typeWord(){
    wordElement.textContent="";
    const word =words[index];
    let i=0;
    const typingInterval = setInterval(()=>{
        if(i<word.length){
            wordElement.textContent +=word.charAt(i);
            i++;
        }else{
            clearInterval(typingInterval);
        }
    }, 100);
}

setInterval(typeWord, 2500);