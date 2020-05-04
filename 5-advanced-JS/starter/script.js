//Function Constructor
/*
var john=
{
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name,yearOfBirth,job)
{
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job = job;
    //this.calculateAge=function(){
    ///    console.log(2016 - this.yearOfBirth);
    //}


}

Person.prototype.calculateAge=
    function(){
        console.log(2016-this.yearOfBirth);
    }

//You modify the prototype in this way.
Person.prototype.lastName = 'Smith';
    var jane = new Person('Jane',1969,'designer');
var john = new Person('John', 1990, 'teacher'); //instantiation

john.calculateAge();

console.log(john.lastName);

*/

//Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2016-this.yearofBirth);
    }
};

var john = Object.create(personProto);

john.name='John';
john.yearofBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,{ name: {value:'Jane'},yearofBirth:{value:1969}, job:{value:'designer'}});

*/

// passing functions as parameters to functions
/*
var years = [1990,1965,1937,2005,1998];

function arrayCalc (arr,fn)
{
    var arrRes=[];
    for(var i = 0; i < arr.length;i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes; 
}

function calculateAge(el)
{
    return 2016-el;
}

var ages = arrayCalc(years,calculateAge);

console.log(ages);

function isFullAge(el)
{
    return el >= 18;
}

var fullAges = arrayCalc(ages,isFullAge);
 
console.log(fullAges);
*/

//Functions returning functions
/*
function interviewQuestion(job)
{
    if(job === 'designer')
    {
        return function(name)
        { 
            console.log(name + ' can u please explain what UX desing is?');
        }
    }
    else
    {
        return function(name)
        {
            console.log('What subjects do you teach'+ name);
        }
    }
}
var teacherQuestion= interviewQuestion('teacher');

 teacherQuestion('John');

 */

/// IIFE
/*
function game()
{
    var score = Math.random() * 10;
    console.log(score >=5);
    
}
game();

(function () {
        var score = Math.random() * 10;
        console.log(score >=5);
})();
*/

// Closures
/*
function retirement(retirementAge){
    var a = 'years left until retirement.';
    return function(yearOfBirth)
    {
        var age = 2016 - yearOfBirght;
        console.log((retirementAge - age)+ a);
    }
}

var retirementUS= retirement(66);
retirementUS(1990);

retirement(66)(1990);

*/

//Closure exercise
/*
function interviewQuestion(job){
    return function(name)
    {
        if(job === 'designer')
        {
            console.log(name + ' can u please explain what UX desing is?');
            
        }
        else
        {
            console.log('What subjects do you teach'+ name);
            
        }
    }
}

interviewQuestion('desi')('Ale');
*/

//Bind, call and apply

var john = {
    name:'john',
    age:26,
    job:'teacher',
    presentation:function(style,timeofDay)
    {
        if(style === 'formal')
        {
            console.log('good '+timeofDay+', I am '+this.name);
        }
        else if(style ==='friendly')
        {
            console.log('hey good '+timeofDay);
        }
    }
};
//john.presentation('formal','morning');


var emily={
    name:'Emily',
    age:35,
    job: 'designer'
};
//john.presentation.call(emily,'formal','afternoon');

var johnFriendly = 
john.presentation.bind(john,'friendly');

johnFriendly('morning');
 
  