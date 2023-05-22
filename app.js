var score = 20  
function guessMyNumber(){
    var num = Math.round(Math.random()*5)
    var user_number = +(document.getElementById("number").value);
    if (num===user_number){
        alert("You win!!!!")
             score = score +1
             
             document.getElementById("result").value = score; 
    }
    else{
        alert("ÿou loss!")
        score= score-1        
        document.getElementById("result").value = score; 
    }
}