//  var heightCentimeters = 165;
// if (heightCentimeters > 167)
// {
// console.log("You are tall enough to go on this ride");
// }
// else if (heightCentimeters>=165)
// {
// console.log("Eh....We'll make an exception. Enjoy the ride");
// }
// else if(heightCentimeters<167)
// {
// console.log("Try a diffrent ride");
// }
// else
// {
// console.log("Sorry! you are not tall enough to go on this ride");
// }

// var weather = prompt("what's the weather like today");
// switch (weather)
// { case 'sunny':
// alert("go dor a swim");
// case 'rainy':
// alert("Don't forget your umberalla");
// break;
// case 'snowy':
// alert ("Grab a shovel");
// break;
// default:
// alert("I can't help you there");
// }

// var mark = prompt ("Enter your mark to receive your grade?");

// if(mark>=90)
// {
// alert("congratulations! You obtain an A!");
// }
// else if (mark>=80)
// {
// alert("well done you obtained a B!");
// }
// else if (mark>=70)
// {
// alert("Not bad! You obtained a C");
// }
// else if (mark>=60)
// {
// alert("Hmm... you obtained a D. Better Luck next time!");
// }
// else if (mark>=0&&mark<=59)
// {
// alert("C'mon! You canm do better than obtaining an F ");
// }
// else
// {
// alert("You habe entered an invalid mark");
// }

// for (i=0; i<5;i++)
// {
// console.log (i);
// }

// var i = 1
// while (i<5)
// {
// console.log(i);
// i++;
// }

// var i=1;
// do
// {
// consolee.log(i);
// i++;
// }
// while (i>5);



// for(i=10;i>0;i--)
// {
//  console.log(i);
// }




// var i ;
// for(i=1;i<=20;i++)
// {
// if (i%2)
// {
// console.log(i+"odd") 
// }
// else
// {
// console.log(i+"Even")
// }
// }

// var myArray =["Apple","Orange","Grape","Lemon"];
// var i = 0; //counter
// while (i<myArray.length) //condition to met this löoop to continue,,//lengtzh less than my array
// {
// console.log(myArray[i])

// i++;
// }



// //this is an example of an infinite loop
// do 
// {
// alert("You must be at least 1.2 meters in height top jopin this ride");
// var userHeight = prompt("Please enter your height."); // it wilkll be equal to prompt cause we are capturing  data
// }

// while(userHeight<1.2)// while something is true keep something else in this case entering your height otherwise alert to user enjoy ride
// alert("Enjoy the ride!");





// var myVar ="This is a global variable";
// function checkVarScope()
// {
//     var myVar ="This is a local variable";
//     alert(myVar);
// }

// checkVarSAcope();


// var num1 = 5;
// var num2 =20;
// var result;

// function multiply (firstNumber,secondNumber)
// {
//     return firstNumber*secondNumber;
// }

// result = multiply (num1,num2);
// console.log(result);




// var car= {make:"Porsche", model:"Cayman GT4", colour:"Red"}
// console.log(car.make);

// // we are updateding properties or values of the object
// var car= {make:"Porsche", model:"Cayman GT4", colour:"Red"}
// car.make="KIA";
// car.model="Cerato";
// car.colour="white";
// console.log(car.make); //output KIA


// var car= {make:"Porsche", model:"Cayman GT4", colour:"Red"}//standart function
// function buildCar() // we are signing in function
// {
// car.make="Lexus";
// car.model="LC500";
// car.colour="white";
// console.log("Your "+car.colour+" "+car.make+" "+car.model+" "+"was successfully created"); 
// }
// buildCar();





// function buildCar(make,model,colour) // CONSTRUCTORS They allows us to create diffrent type of objects of the same group
// {
//     this.make= make;
//     this.model= model;
//     this.colour=colour;
//     alert("Your "+this.colour+ " "+this.make+" "+this.model+" "+"was successfully created!");
// }

// var myNewCar = new buildCar("Dodge","Hellcat","silver")





// function buildCar(make,model,colour) // CONSTRUCTORS They allows us to create diffrent type of objects of the same group
// {
//     this.make= make;
//     this.model= model;
//     this.colour=colour;
//     alert("Your "+this.colour+ " "+this.make+" "+this.model+" "+"was successfully created!");
// }
// this.startEngine =  function()
// {
//     alert("Vroom! Your engine has started running");
// }
// this.lightson = function()
// {
//     alert("Your car lights has been turned on");
// }

// var myNewCar = new buildCar("Dodge","Hellcat","silver")

// myNewCar.startEngine();
// myNewCar.lightsOn();



// function buildCar(make,model,colour) // CONSTRUCTORS They allows us to create diffrent type of objects of the same group
// {
//     this.make= make;
//     this.model= model;
//     this.colour=colour;
//     alert("Your "+this.colour+ " "+this.make+" "+this.model+" "+"was successfully created!");
// }
// this.startEngine =  function()
// {
//     alert("Vroom! Your engine has started running");
// }
// this.lightsOn = function()
// {
//     alert("Your car lights has been turned on");
// }

// var myNewCar = new lightsOn("Dodge","Hellcat","silver")

// myNewCar.startEngine();
// myNewCar.lightsOn();