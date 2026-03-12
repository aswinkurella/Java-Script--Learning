var a = 6
var b = 7

if (a > b){
    alert(a+" is bigger than "+b)
}
else if (a < b){
    alert(a +" is lower than "+b)
}
else{
    alert(a + " is equal to "+b)
}

//if we dont keep curly brackets it takes as the next line and executes 

//lets see about shorand condtitional operator called ?:

var x =2;
var y=9;
//using shorthand opertaor
b = x>y?x:y
alert(b);
//using regular one
if(x>y){
    alert(x)
}
else{
    alert(y)
}

//switch statements:

var dayofweek=1;
switch(dayofweek){
    case 1:
        alert("Monday");
        break
    case 2:
        alert("tuesday");
        break
    case 3:
        alert("wednseday");
        break
    default:
        alert("this is not day of a week");
}