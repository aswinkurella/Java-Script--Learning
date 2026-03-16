//objects using document object
/*
var div = document.getElementById("test");

div.innerHTML = "This is a new text";
alert(div);


//lets create one object

var person = {
    name:"Aswin",
    surname:"kurella"
};

alert(person.name);

div.innerHTML = person;

// we cna create our own menthods as well

var person1 = {
    name:"Aswin",
    surname:"kurella",
    age:3,
    isadult:function(){
        if(this.age<10)
            return false;
        return true;
    },
    toString:function(){
        return this.name + "" + this.surname;
    }
};

alert(person1.name);

div.innerHTML = person1;
*/
//if we want to create second person how can we do for an object
//functions wil acts as a constructors itself
function person(name,surname,age)
{
    this.name = name;
    this.age = age;
    this.surname = surname;
    this.isadult = function(){
        if(this.age<10)
            return false;
        return true;
    }
    this.toString = function(){
        return this.name + "" + this.surname;
    };
}

var x = new person("Aswin","kurella","20");
var y = new person("Aswin1","kurella1","20");
var z = new person("Aswin2","kurella2","20");
alert(x.name);
alert(x.age);
alert(x.surname);

var div = document.getElementById("test");

div.innerHTML = x + "<br>" +y + "<br>" + z;

//how to access proeprties 

x.something = 5;

div.innerHTML = x.something + "<br>" +y.something + "<br>" + z.something;
//In above we can access until x only for below to amke it access across y and z then  define inside person function constructor then we can access for entire x,y,z objects

//There is an other way also where we can make it like above instead of editing function which is propetotype lests see below example

person.prototype.something = 5;

div.innerHTML = x.something + "<br>" +y.something + "<br>" + z.something;

