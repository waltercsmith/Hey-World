"use strict"

$(document).ready(function () {
var userOutput =document.getElementById("one").value;
    $("#one").click(function () {
        $("#output").append(userOutput);
    })
})