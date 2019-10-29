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


// Post / Required Property options
$("#PostProperty").change(function(){
    $("#RequiredProperty").prop("checked", false);
    
    $("#form-postproperty").show();
    $("#form-requiredproperty").hide();
});

$("#RequiredProperty").change(function(){
    $("#PostProperty").prop("checked", false);
    
    $("#form-postproperty").hide();
    $("#form-requiredproperty").show();
});
// Post / Required Property options