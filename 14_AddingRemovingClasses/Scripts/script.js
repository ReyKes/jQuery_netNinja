$("header .wrapper").removeClass("wrapper");
$("header > div").addClass("wrapper");

var button=$("#lead-banner a");

button[0].onclick=function()
{
    $("#points-of-sale").toggleClass("open");
    return false;
    
}

/*
removeClass()->removes a class from matched elements

addClass()-> adds a class to the matched elements

toggleClass-> toggles the class on and off on their matched elements

*/