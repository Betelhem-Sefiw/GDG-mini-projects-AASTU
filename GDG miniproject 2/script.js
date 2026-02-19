document.getElementById("start").onclick= function(){
let score=0;
let sleep=prompt("How many hours do you sleep? ");
sleep= Number(sleep);
if(sleep>=4){
    score++;
}
let music= prompt(" Do you enjoy music?  (yes or no) ");
if(music.toLowerCase()==="yes"){
    score++;
}
let tired= prompt(" Do you get tired? (yes or no) ");
if(tired.toLowerCase()==="yes"){
    score++;
}
let eat= prompt("Do you enjoy eating? (yes or no) " )
    if(eat.toLowerCase()==="yes"){
        score++;
    }
let shower=prompt("Do you take a shower? (yes or no) ")
if(shower.toLowerCase()==="yes"){
        score++;
    }

if (score>=5){
    console.log( "You are definitely human!");
    alert( "You are definitely human!");
}
else if(score>=2){
    console.log("Half human, half robot")
    alert("Half human, half robot")
}
else{
    console.log("Robot detected!")
    alert("Robot detected!")
}  
}


