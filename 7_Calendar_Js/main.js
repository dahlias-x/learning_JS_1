var btn= document.querySelector("#myBtn");
var userInput = document.querySelector("user-input");
var container = document.querySelector("container");
var body = document.querySelector("body");

var monday = ["EADF65","EADE66","EADE77","FGDR34"];
var tuesday = ["DFG77","FGED33"];
var wednesday = ["HHJJ00","JJGG11","GGLK55"];
var thursday = ["GGWD12","HHJK34","HHJK44"];
var friday = ["no Class yayyyy"]

function sethooverColor(){
    btn.style.background = "#818a80";
}

//when not hoovering restore the normal color
 function setNormalColor(){
     btn.style.background ="";
 }

 btn.addEventListener("mouseover",sethooverColor);
 btn.addEventListener("mouseout",setNaturalColor);
 btn.addEventListener("click", printTimetable);

 function printTimetable ()
 if (userInput.value=="Monday")
 {
    for (var i=0; i < monday.length;i++){
    
        var paraText = document.createElement ("p");
        var paraNode = document.createTextMode(Momnday[i]);
        paraText.appendChild(paraNode);
        container.appendChild(paraText);
    }
 }


 if(userInput.value=="Friday")
 {
     for (var i = 0; i< friday.length; i++){
         var paraText = document.createElement("p");
         var paraNode = document.createTextNode(friday[i]);
         var img = document.createElement("img");
         img.src="welcomeToCodingLebarim.jpg";
         paraText.appendChild(paraNode);
         container.appendChild(paraText);
         paraText.stylecssText="font-size:24px";
         body.appendChild(img);
     }
 }


