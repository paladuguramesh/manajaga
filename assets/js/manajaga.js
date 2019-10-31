/*** Change Blink Text ***/
$( document ).ready(function() {
	var text = ["Post / Require Property", "Free"];
	var counter = 0;
	var elem = document.getElementById("blink_me");
	var inst = setInterval(change, 1000);

	function change() {
		var txt = text[counter];
		if(txt == "Free") {
			 
			 
			 
			 $('.create-new-post').attr('style', 'background-color: #f1d600 !important');
			 
			 elem.classList.add("text-danger");
			 elem.style.fontWeight = "bolder";
			 elem.style.fontSize = "20px";
			 
		} else {
		 	
			
			
			$('.create-new-post').attr('style', 'background-color: #ffffff !important');
			
			elem.classList.remove("text-danger");
		 	elem.style.fontWeight = "normal";
		 	elem.style.fontSize = "16px";
			
		}
  		elem.innerHTML = txt;
  		counter++;
  		if (counter >= text.length) {
    		counter = 0;
  		}
	}
});
/*** Change Blink Text ***/





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
$("#form-postproperty").show();
$("#PostProperty").prop("checked", true);
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