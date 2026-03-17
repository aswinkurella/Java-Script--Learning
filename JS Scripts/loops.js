//loops
var videos = [
    "PHP",
    "PHP1",
    "PHP2",
    "PHP3",
    "PHP4",
    "PHP5",
    "js"
];
var result = document.getElementById("result");
/*
//while loop
var i = 0;
while(i<videos.length)
{
    if(videos[i]=="PHP4")
        result.innerHTML +="heelllo breking as this is php4";
    result.innerHTML += videos[i] + "<br>";
    i++;
}
    */

//writing loop inside function:
/*
function PrintResult(listelement)
{
    var PC = document.getElementById(listelement).getElementsByTagName("li");
    var i =0;
    while(i<PC.length)
    {
         result.innerHTML += PC[i].innerHTML+"<br>";
       
        i++;
    }
}

PrintResult("webcourses");
*/

//do-while example
/*
var i = 7896;
do{
    result.innerHTML += videos[0];
}
while(i<videos.length){
    result.innerHTML += videos[i];
    i++;
}
    */

//for loops
/*
for(var i=0; i<5;i++)
{
    document.getElementById("result").innerHTML += i + "<br>";
}
//using real time example
for(var i=0; i<videos.length;i++)
{
    document.getElementById("result").innerHTML += videos[i] + "<br>";
}
//break and continue
for(var i=0; i<videos.length;i++)
{
    if(videos[i] == "PHP3")
        break;
    document.getElementById("result").innerHTML += videos[i] + "<br>";
}

for(var i=0; i<videos.length;i++)
{
    if(videos[i] == "PHP3")
        continue;
    document.getElementById("result").innerHTML += videos[i] + "<br>";
}
    */
//for-in loops
/*
for (var x in videos)
{
    alert(videos[x]);
}
//if we use for array we cant know index and all etc..,
*/
//Lets see an exericse of storing an aruguments of objects:

function add()
{
    alert(arguments.length);
}

var x = add(1,2,34,56);
var y = add(1,2,34,56,8797,777);

//even we can pass index vbvalue and get the results

//how can we make sum of arguments

function add1(){
    var sum = 0;
    for(var x in arguments)
    {
        sum += arguments[x];
    }
    return sum;
}
var sum2 = add1(1,2,34,56);
alert(sum2);    
