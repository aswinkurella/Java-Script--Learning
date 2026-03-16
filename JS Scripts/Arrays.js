//arrays
/*
var products = ["xthml","php","sql"];
products[3] = "js";
alert(products);
alert(products[2]);
alert("The products length is "+ products.length);
//adding through push object
products.push("typescript");
alert("The length of products post push is "+products.length);
alert("The products post push is "+products);

//associatve arrays
var person = [];
person["name"] = "aswin";
person["age"] - "25";
alert(person.name);
alert(person[0]);// we cant access like this in associative array
alert(person["name"]);// we can access like this in associative array

var programmingcourses = document.getElementById("Programmingcourses").getElementsByTagName("li");
alert(programmingcourses[0]);
alert(programmingcourses[0].innerHTML);
alert(programmingcourses[programmingcourses.length-1].innerHTML);
*/
//various array methods
var videos = [
    "PHP",
    "PHP1",
    "PHP2",
    "PHP3",
    "PHP4",
    "PHP5"
];
var numbers = [
    4,98,-45,56,78,-99
];

var x = document.getElementById("result").innerHTML = videos;
//to get line by line join array method
document.getElementById("result").innerHTML = videos.join("<br>");
//length of array
document.getElementById("result").innerHTML = videos.length;
//concatenation
document.getElementById("result").innerHTML = x + numbers;
//pop
document.getElementById("result").innerHTML = videos.pop();
//push
document.getElementById("result").innerHTML = videos.push("python");
//shift
document.getElementById("result").innerHTML = videos.shift();
//unshift
document.getElementById("result").innerHTML = videos.unshift("gen langaugae");
document.getElementById("result").innerHTML = videos;
//sort
document.getElementById("result").innerHTML = videos.sort();
//reverse
document.getElementById("result").innerHTML = numbers.reverse();
document.getElementById("result").innerHTML = videos.reverse();
document.getElementById("result").innerHTML = numbers.sort();
//slicing
document.getElementById("result").innerHTML = videos.slice(2,5);
