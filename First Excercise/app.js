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