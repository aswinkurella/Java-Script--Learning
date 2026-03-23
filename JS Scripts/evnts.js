//events
/*
var result = document.getElementById("result");

result.onmouseclick = function (){
    alert("test");
}
    */
//changing color 
/*
   function changeColor()
   {
    this.style.color = "red";
    this.className = "change-color";
   }
   function changeColorOut()
   {
    this.style.color = "black";
    this.removeAttribute("class");
   }
var result = document.getElementById("result");

result.onmouseover = changeColor;
result.onmouseout = changeColorOut;
*/
//samll exercise
/*
var result = document.getElementById("result");
var inc = document.getElementById("increase");
var dec = document.getElementById("decrease");

function changesize()
{
    result.style.fontSize = "90px";
}

inc.onmouseover = changesize;
function decreasesize()
{
    result.style.fontSize = "50px";
}

dec.onmouseover = decreasesize;
*/

//on-load event
/*
function changeColor()
   {
    this.style.color = "red";
    this.className = "change-color";
   }
   function changeColorOut()
   {
    this.style.color = "black";
    this.removeAttribute("class");
   }
window.onload  = function()
{
    var result = document.getElementById("result");
    result.onmouseover = changeColor;
    result.onmouseout = changeColorOut;
}

//why we need on load is while loading script if we forgot defer or sometimes if it is not working we should do onload to load the script nad functions wthi this option even in html if we dont define it will work as expected
*/
//addevent,removeevent
/*
var result = document.getElementById("result");
function changeColor()
   {
    this.style.color = "red";
    this.className = "change-color";
   }
   function changeColorOut()
   {
    this.style.color = "black";
    this.removeAttribute("class");
   }
    function IncreaseSize()
   {
    var x = parseInt(window.getComputedStyle(this).getPropertyValue("font-size"));
    this.style.fontSize = (++x) + "px";
   }
    function DecreaseSize()
   {
    this.style.fontSize = "30px";
   }
   
result.addEventListener("mouseover",changeColor);
result.addEventListener("mouseout",changeColorOut);
result.addEventListener("mouseover",IncreaseSize);
//result.addEventListener("mouseout",DecreaseSize);

//using remove listner
var stop = document.getElementById("stop");

stop.addEventListener("click",function()
{
    result.removeEventListener("mouseover",IncreaseSize);
}
);
*/
/*
//lets see how keys will work
function doSomething(e)
{
    var tmp = document.getElementById("tmp");
    tmp.innerHTML = e.altKey;
}
window.onload = function ()
{
    var result = document.getElementById("result");
    result.onmouseover = doSomething;
}
*/
 //keycode,clientx,clienty 
 //lets createa tooltip
/*
function doSomething(event)
{   var e = event || window.event;
    var tmp = document.getElementById("tmp");
    tmp.innerHTML = e;

    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "block";
    tooltip.style.left = e.clientX +"px";
    tooltip.style.right = e.clientY +"px";
}
window.onload = function ()
{
    var result = document.getElementById("result");
    result.onmouseover = doSomething;
}

*/

//Propagation of events:
/*
function doSomething(event,eventObj)
{
    var e = event || window.event;
    var SrcElement = e.target || e.SrcElement;

    var tmp = document.getElementById("tmp");
    tmp.innerHTML = "Source of event: "+ SrcElement.tagName + "<br>event assigned to tag: "+eventObj.tagName;
}
window.onload = function()
{
    var result = document.getElementById("result");
    var bolded = document.getElementById("bolded");
    var button = document.getElementById("button");
    result.onmousemove = function(event)
    {
        doSomething(event,this);
    }
}
*/
/*
function doSomething(event,eventObj)
{
    var e = event || window.event;
    var SrcElement = e.target || e.SrcElement;

    var tmp = document.getElementById("tmp");
    tmp.innerHTML = "Source of event: "+ SrcElement.tagName + "<br>event assigned to tag: "+eventObj.tagName;
}
window.onload = function()
{
    var result = document.getElementById("result");
    var bolded = document.getElementById("bolded");
    var button = document.getElementById("button");
    result.onclick = function(event)
    {
        alert("result");
        doSomething(event,this);
    }
    bolded.onclick = function(event)
    {
        alert("bolded");
    }
    button.onclick = function(event)
    {
        alert("button");
        event.stopPropagation();
    }
}
//in above cases if we use event.stoppropagation it wont invoke parent alert as it invoke only child alert but if we dont define it will invoke both
*/
//lets see validation of email address
/*
window.onload = function()
{
    var email = document.getElementById("email");
    var submitFormbutton = document.querySelector("#newsletter input[type = 'submit']");

    //we should use prervent function to not unsend
    submitFormbutton.onclick =function(e)
    {
        e.preventDefault();

        var newsletter = document.getElementById("newsletter");
        var tmp = document.getElementById("tmp");
        if (email.value === "abc@com")
            newsletter.submit();
        else
            tmp.innerHTML = "Not submitted please retry..!"
    }
}
*/

//lets see an exericse how to jump to top on click
/*
window.onload = function()
{
    var Toptobottom = document.getElementById("toTopButton");
    Toptobottom.onclick = function ()
    {
        window.scrollBy(0,-1 * window.pageYOffset)
    }
}
*/

//Mouse events
/*
window.onload = function()
{
    var sample = document.getElementById("sample");

    sample.onmousedown = function()
    {
        this.onmousemove = function(e)
        {
            this.style.left= e.clientX + "px";
            this.style.top = e.clientY + "px";
        }
    }
}
    */
//lets see time outs

//lets see and example of stowatch

window.onload = function()
{
    
    var buttonstart = document.getElementById("buttonstart");
    var buttonstop = document.getElementById("buttonstop");
    var stopwatchhandler = document.getElementById("stopwatchhandler");
    var IntervalRefId;

    buttonstart.onclick = function()
    {
        if(IntervalRefId)
            clearInterval(IntervalRefId);
        var startingvalue = document.getElementById("startingvalue").value;
        stopwatchhandler.innerHTML = startingvalue;
        setInterval(function(){
            if(startingvalue <=0){
                clearInterval(IntervalRefId);
                return;}
            stopwatchhandler.innerHTML = --startingvalue;
        },1000);
    }
    buttonstop.onclick = function ()
    {
        clearInterval(IntervalRefId);
    }
}