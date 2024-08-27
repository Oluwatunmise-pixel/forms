var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");

var prev1 = document.getElementById("prev1");
var prev2 = document.getElementById("prev2");
var progress = document.getElementById("progress");

next1.onclick = function () {
    form1.style.left = "-550px";
    form2.style.left = "40px";
    progress.style.width = "240px";
};
prev1.onclick = function () {
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "120px";
};
next2.onclick = function () {
    form2.style.left = "-550px";
    form3.style.left = "40px";
    progress.style.width = "360px";
};
prev2.onclick = function () {
    form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "240px";
};