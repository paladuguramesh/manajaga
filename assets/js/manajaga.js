/*** Signup options ***/
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
/*** Signup options ***/





/*** Post/Required Property options ***/
$("#form-postproperty").hide();
$("#form-requiredproperty").hide();

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
/*** Post / Required Property options ***/





/*** Post Property options ***/
$("#pp_owner").change(function(){
 	$("#pp_builder").prop("checked", false);
    $("#pp_broker").prop("checked", false);
    $("#pp_all").prop("checked", false);
});

$("#pp_builder").change(function(){
 	$("#pp_owner").prop("checked", false);
    $("#pp_broker").prop("checked", false);
    $("#pp_all").prop("checked", false);
});

$("#pp_broker").change(function(){
 	$("#pp_owner").prop("checked", false);
    $("#pp_builder").prop("checked", false);
    $("#pp_all").prop("checked", false);
});
$("#pp_all").change(function(){
 	$("#pp_owner").prop("checked", false);
    $("#pp_builder").prop("checked", false);
    $("#pp_broker").prop("checked", false);
});
/*** Post Property options ***/





/*** Trade Type ***/
$("#NewProperty").change(function(){
    $("#Resale").prop("checked", false);
});

$("#Resale").change(function(){
    $("#NewProperty").prop("checked", false);
});
/*** Trade Type ***/





/*** Possession ***/
$("#UnderConstruction").change(function(){
    $("#ReadyToMove").prop("checked", false);
});

$("#ReadyToMove").change(function(){
    $("#UnderConstruction").prop("checked", false);
});
/*** Possession ***/





/*** Parking Available ***/
$("#ParkingYes").change(function(){
    $("#ParkingNo").prop("checked", false);
});

$("#ParkingNo").change(function(){
    $("#ParkingYes").prop("checked", false);
});
/*** Parking Available ***/