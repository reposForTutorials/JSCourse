/* Coding challenge 1
console.log('Coding Challenge 1');

var johnWeight= prompt('Johns weight');

var markWeight = prompt('Mark s Weight');

var johnHeight = prompt('John s weight');

var markHeight = prompt('Mark Height');

var bmiJohn = johnWeight/(johnHeight*johnHeight);

var bmiMark = markWeight/(markHeight*markHeight);

alert('John BMI '+ bmiJohn + 'Mark BMI ' + bmiMark);

var markBiggerThanJohn = bmiMark > bmiJohn;

console.log('Is Mark Bigger than John: '+markBiggerThanJohn)
*/

//Coding Challenge 2
/*
var john1=89;
var john2=120;
var john3=123;

var mike1=116;
var mike2=94;
var mike3 = 123;

var averageJohn=(john1+john2+john3)/3;

var averageMike=(mike1+mike2+mike3)/3;

var averageMary=(97 +134 + 105)/3;

if(averageJohn >= averageMike && averageJohn >= averageMary)
{
    if(averageJohn  === averageMary && )
    console.log("John wins");
}
else if()

*/

//Coding Challenge 3
/*John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is 
between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK*/
/*
Coding challenge 2
bills = [124,48,268];
var tipper = function(monto)
{
    if(monto < 50)
    {
        return monto*0.2;
    }
    else if(monto > 50 && monto < 200)
    {
        return monto *0.15;
    }
    else
    {
        return monto * 0.1;
    }
}

var tips = [];
tips[0]=tipper(bills[0]);
tips.push(tipper(bills[1]));
tips[tips.length] =tipper(bills[2]);

var final = [];
console.log(bills);
console.log(tips);

final.push(tips[0]+bills[0]);
final.push(tips[1]+bills[1]);
final.push(tips[2]+bills[2]);

console.log(final);

*/

/*Coding Challenge 4
*/
/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and 
height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object 
and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name 
he respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in 
    meter).

GOOD LUCK 😀
*/
/*
var john={
    nombre:'John',
    mass: 50,
    height: 1.70,
    bmi_calc : function()
    {
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}
var mike={
    nombre:'Mike',
    mass: 60,
    height:1.8,
    bmi_calc : function()
    {
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}
john.bmi_calc();
mike.bmi_calc();

console.log(john.bmi);
if (john.bmi > mike.bmi)
{
    console.log(john.nombre + ' ' +john.bmi);
}
else if(mike.bmi > john.bmi)
{
    console.log(mike.nombre + ' '+ mike.bmi);
}
else{
    console.log("Draw");
}
*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using 
everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, 
$48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill 
is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the 
tip calculations
4. As an output, create 1) a new array containing all tips, and 
2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

john={
    bills: [124,48,268,180,42],
    tips:[],
    total:[],
    tipper: function()
    {   
        var i;
        for(i = 0;i < this.bills.length;i++)
        {
            if(this.bills[i] < 50)
            {
                this.tips[i]=this.bills[i]*0.2;
                this.total[i]=this.bills[i]+this.tips[i];
            }
            else if(this.bills[i] > 50 && this.bills[i] < 200)
            {
                this.tips[i]=this.bills[i]*0.15;
                this.total[i]=this.bills[i]+this.tips[i];
            }
            else
            {
                this.tips[i]=this.bills[i]*0.1;
                this.total[i]=this.bills[i]+this.tips[i];
            }
        }
    }
    
}
john.tipper();
console.log(john.tips);
console.log(john.total);