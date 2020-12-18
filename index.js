var readline=require("readline-sync");
var score=0;
var username=readline.question("Enter Your name:");
console.log("Welcome:"+username);

function play(question,answer)
{
  var uanswer=readline.question(question);
  if(uanswer==answer)
  {
    console.log("Right!");
    score+=1;
  }
  else{
    console.log("wrong!");
  }
}

var questions=[{que:"What is my higher secondary board exsm result?",ans:"1086"},{que:"who is my favorite cricketer?",ans:"Dhoni"},{que:"who is my favourite cini-actor?",ans:"Suriya"},{que:"What is my favourite color?",ans:"Green"},{que:"Which car brand I love most?",ans:"BMW"}];
for(i=0;i<questions.length;i++)
{
  play(questions[i].que,questions[i].ans);
}

console.log("Score:",score);
var per=(score/5)*100;
console.log("Close percentage:"+per+"%");