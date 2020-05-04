//Build a function constructor called Question to describe a question. It includes the question itself, the answers from which the pklayer can choose the correct one, and the correct answer.
//1
var Question = function(question, ans1,ans2,ans3,correctAns)
{
    this.question=question;
    this.answS=[ans1,ans2,ans3];
    this.correctAns = correctAns;
}
//2 create a couple of questions using the constructor
primPreg= new Question("When Columbus arrived to America","1492","1565","1214",0);

secPreg= new Question("What is 2 squared 2?",'2','3','4',2)
console.log(primPreg);

console.log(secPreg);

thirdPreg= new Question('What is 1-1','4','0','-1',1);
console.log(thirdPreg);

//3 store them all inside of an array

setQuestions=[primPreg,secPreg,thirdPreg];

//4 Select one random question and log it on the consol, together with the possible answers. 