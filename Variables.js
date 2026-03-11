/*The below lines show examples of variables in JS */
/*Below is the explanation of variable
var x = 5; //variable
var y = 6;
var a = 'aswin';
alert(a+' the number is '+(x+y));

var nameofvariable;
nameofvariable = 'aswin';
alert(nameofvariable);
*/
//Lets see an example below for variables
var netPriceOfShoes = 100;
var netPriceOfTV = 959;
var VAT = 23;
var calculatedVAT = (1+VAT * 1/100);


var grossPriceOfShoes = netPriceOfShoes * calculatedVAT;
var grossPriceOfTV = netPriceOfTV * calculatedVAT;

alert('The gross price of shoes is '+grossPriceOfShoes+ ' and the gross price of Tv is '+grossPriceOfTV);

//lets see constant keyword
//It allows us to change value of frist but cant change later

const PI = 3.124159;

PI = 3;

alert(PI);