// Signup options
$("#buyer").change(function(){
    $("#agent").prop("checked", false);
    $("#builder").prop("checked", false);
});

$("#agent").change(function(){
    $("#buyer").prop("checked", false);
    $("#builder").prop("checked", false);
});

$("#builder").change(function(){
    $("#buyer").prop("checked", false);
    $("#agent").prop("checked", false);
});
// Signup options