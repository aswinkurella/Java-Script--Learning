//how to create functions
/*
function test()
{
    alert("sample");
}
test();
*/
/*
function test()
{
    return 5;
}

alert(test());

function test1()
{
    return "aswin";
}

var a = test1();
alert(a);

//with parameters

function add(x,y)
{
    return x+y;
}
alert(add(2,30));
alert(add('Aswin ', ' good boy'))
*/
/*
function division(x,y)
{
    return x/y;
}
alert(division(5,6));

function divisionbyzero(x,y)
{
    if(y==0)
    {
        alert("y should not be 0 value");
    }
    return x/y;
}
alert(divisionbyzero(5,0));

//In below case it just returns first return
function divisionbyzero(x,y)
{
    if(y==0)
    {
        return "y should not be 0 value";
    }
    return x/y;
}
alert(divisionbyzero(5,10));
*/
//Scope of variables
/*
alert(test());
function test()
{
    return 90;
}

var a = 5;

function test1()
{
    a=3;
    alert(a);
}
test1();
alert("a is now changed and equals to: "+a)

//Now we can change and make global act like global by creating local variable inside function

var b = 6;

function test2(b)
{
    b=9;
    alert(b);
}
test2();
alert("b is now changed and equals to: "+b);

//Now if we close the global at end alert wont get give global value or locla value
//var c = 6;

function test3(c)
{
    c=80;
    alert(c);
}
test3();
alert("c is now changed and equals to: "+c); //wont execute
*/
//Difference between let and var
/*
if(true):
{
    let age = 10;
}
alert(age);//This wont execute as let 
*/
//Lets see same as above using var
/*
if(true)
{
    var age = 10;
}
alert(age); //This will execute
/*
//let can be used until block ends

//hoisting is a mechanism even the scripts wont come to tat line as below example age will be executed before
/*
alert(a);
if(true)
{
    var a = 10;
}
    */
//redeclaration
//if we use let cant use many times same variables but var is different
/*
let b = 10;
let b = 20;
var c = 90;
var c = 50;
*/
//we can change let value using some functions but creating more var take more space

// lets see how to access
/*
let sum = 0;
for (let i = 0; i<10;i++)
{
    sum +=5;
}
alert(sum);
alert(i);//wont execute as let ends for i as defined in block but instead of let if i keep i can access
*/
//functions as expressions and anonymous functions

var x = function test()
{
    alert("sample");
}
x(); //invoking function using variable

//anonymus functions
var y = function()
{
    alert("anonymous sample");
}
y();
//passing through aruguments
var y = function(arg1)
{
    alert("anonymous sample"+ arg1);
}
y(10);
//function as parameter
function test(f)
{
    f(4)
}
test(
    function(x)
    {
        alert("sample testing"+x);
    }
)
//Returning the function

var hi = function(type)
{
    if(type=='boss')
        return function(name){
            alert("Hi bos"+name);
        };
    else
        return function(name){
            alert("Hi" +name);
        };
};

var returnedfunc = hi("boss");
returnedfunc("Aswin");