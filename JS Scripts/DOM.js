//Dom lets see how to check and retrive things
/*
var x = document.getElementById("webcourses");
//how to use get attribute
alert(x.getAttribute("id"));
//we can use set attribute,remove attribute
//nodes accessing
var x = document.getElementById("webcourses").childNodes[1].firstChild.nodeValue;
alert(x);
//lets see next sibling
var y = document.getElementById("webcourses").childNodes[1].parentNode;
alert(y);
*/
//query selector
/*
var x = document.querySelectorAll("#webcourses li");
alert(x);
var x = document.querySelectorAll("li");
alert(x[0].innerHTML);
*/
//STYLES IN dom
/*
var x = document.querySelectorAll("#webcourses li");
x[3].style.color = "red";

for (var index in x)
{
    x[index].style.color = "red";
}
*/
//create elements,append child,remove child
/*
var p = document.createElement("p");

p.style.color = "red";
p.className = "test";
p.innerHTML = "something new text";

var body = document.querySelector("body");

body.appendChild(p);

var z = document.querySelector("Programmingcourses");
z.parentNode.removeChild(z);

*/

//lets create a multiplication table
var mt = "";
for (var i = 1; i <11; i++) //i =1;
{
    for (var j = 1; j <=10; j++){//j=1
        mt += i * j + " ";
    }
    mt += "<br>";
}
var result = document.getElementById("result");

result.innerHTML = mt;


