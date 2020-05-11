
alert("Hello World!");
var a=10;
var b=10;
c=a+b;
console.log(a+b);

var x=5;
var y="ali";
console.log(x+y);

//when a string and number is added in javascript then result is concatenation.
//the result would be 5ali
var a="10";
var b=20;
console.log(a+b);


var a="20";
var b=20;
console.log(a*b);
//In case of multiply or divide there is no concatenation but normal operation is performed.

var a=3;
var b=5;
var c=7;
var d=b-a*c;
console.log(d);

//++a is called preincrement
//a++ is called postincrement.
//--a is called decrement
//a-- is called decrement.

/*var a=5;
b=a++;//post increment.
console.log(b);//
console.log(a);//The value of a is now updated and now its value is 6.
//The output will be 5 not 6.

 var a=5;
 b=++a;
 console.log(b);
 console.log(a);*/
 var x=10;
 var y=x++ + ++x - x + x++ - ++x +x;
 //    10    12    l2   12    14   14 
 console.log(y);

var b=10%3;
console.log(b);

var x=5;
var y=x++ + ++x +x + --x + x-- -x;
console.log(y);
//     5     7   7     6    6    5  
//x++ can also be written as x=x+1.
//x-- can also be written as x=x-1.


//prompts(user input is taken in javascript through prompt.)

/*var a=prompt("Enter Your age","Your age is");
                               //It will come in placeholder.
alert(a);*/

/*var a=prompt("Enter value","value");
                               //It will come in placeholder.
alert(a);
b=25+a;
console.log("The Out put is"+"" +b);
//prompt by default take input in the form of string
//inorder to make it integer we write + before the prompt to convert it into the integer. 


var a=+prompt("Enter value","value");
                               //It will come in placeholder.
alert(a);
b=25+a;
console.log("The Output is"+"" +b);
*/


/*var a=+prompt("Enter value","value");
                               //It will come in placeholder.
alert(a);
b=25+a;
document.write("The Output is"+"" +b);*/

/*var age=+prompt("Enter your age");
if(age<17)
{
    document.write("age is less");
}
else
{
    document.write("age is more");

}

var age=+prompt("Enter your age");
var gender=prompt("Entet your gender");
if(gender=='Male'&&age>=18)
{
    alert("you are allowed");
}
else if(gender=='Female'&& age>20)
{
    alert("you are allowed");
}
else
{
    alert("You are not allowed");
}

var a=45;
var b=67;
var x=89;
var y=90;

if(x-y===b-a)
{
    alert("true")
}
else
{
    alert("False")
}
var percent=+prompt("Enter your percentage");
if(percent>=80 && percent<=80)
{
    alert("A");
}
else if(percent>=70 && percent<=80)
{
    alert("B");
}
else
{
    alert("C");
}
*/
// Arrays:

var students=["maryum","Ali","hamza"];
students.splice(1,2,"Bilal");
//0 is the initial index 2 is the total no of elements to be removed from array.
// "Bilal" is the element which is to be placed on index 1.
//splice is used for deleting or removing some elements of the array.
console.log(students)
//
/*
for(i=0;i<students.length;i++)
{
    console.log(students[i]);
}
*/
//Adding and Removing Elements from Array.
var names=[];
names[0]="Maryum"
names[1]="Ali"
names[2]="Hamza"
console.log(names);

//Popping element from the array.Popping will remove the last element from the array.
students.pop();
console.log(students);

//Add the element to the last of the array
students.push("Bilal","Sara");
console.log(students);


//If the item to be removed from the beginning of the array we use shift
students.shift();
console.log(students);

//unshift add the element to the start of the array.

students.unshift("Arfa","Muzammil");
console.log(students);

//slice is used for copying.
var copyStudents=students.slice(1,3);
//here 3 is exclusive. It will slice the elements from the first index till 3rd index.
console.log(copyStudents);