/*$("section").wrap("<div>")  //wraps every section element inside a div

$("section").unwrap()  //unwrap() removes the immediate parent element

$("section").wrapAll("<div>") //wrapAll() puts one empty div around all section elements*/

var wrapper="<div class='wrapper'>";
var button=$(".button");
var wrapped=true;

button[0].onclick=function(){ //onclick is a javascript method. So [0] is must
    if(wrapped)
    {
         $("section").unwrap(); //removes <div class="wrapper">
         wrapped=false;
        button.text("Wrap") //text() is a jQuery method. SO variable name without [] array index
    }
    else
    {
        $("section").wrapAll(wrapper); //adds <div class="wrapper">
        wrapped=true;
        button.text("Unwrap")
    }
    
};
/*
wrap()-wraps all matched elements individually
unwrap()-unwraps all matched element
wrapAll()-wraps all elements combined with 1 single element



*/