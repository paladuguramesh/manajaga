/*** Change Blink Text ***/
$(document).ready(function () {
    var text = ["Sell / Require Property", "Post Free"];
    var counter = 0;
    var elem = document.getElementById("blink_me");
    var inst = setInterval(change, 1000);

    function change() {
        var txt = text[counter];
        if (txt == "Post Free") {

            $('.create-new-post').attr('style', 'background-color: #f08804 !important');

            // elem.classList.add("text-danger");
            elem.style.fontWeight = "bolder";
            elem.style.fontSize = "20px";
            elem.style.color = "#ffffff";

        } else {

            $('.create-new-post').attr('style', 'background-color: #ffffff !important');

            //	elem.classList.remove("text-danger");
            elem.style.fontWeight = "normal";
            elem.style.fontSize = "16px";
            elem.style.color = "#000000";
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
$("#buyer").change(function () {
    $("#agent").prop("checked", false);
    $("#builder").prop("checked", false);
});

$("#agent").change(function () {
    $("#buyer").prop("checked", false);
    $("#builder").prop("checked", false);
});

$("#builder").change(function () {
    $("#buyer").prop("checked", false);
    $("#agent").prop("checked", false);
});
/*** Signup options ***/


/*** Post/Required Property options ***/
$("#PostProperty").prop("checked", true);

$("#property-details-post").show();
$("#property-details-require").hide();

$("#form-postproperty").show();
$("#form-requiredproperty").hide();

$("#property-info-title").text("Post Property");

$("#gallery-section").show();


$("#post-section").hide();
$("#require-section").hide();

$("#post-sale").show();
$("#post-rent").hide();
$("#post-pg").hide();

$("#require-buy-rent").hide();
$("#require-pg").hide();

$("#property-details-subtitile").text("For");

$("#post-require-property-title").text("Post Property");

$("#gallery-step").show();
$("#step-4").show();

$("#PostProperty").change(function () {
    $("#RequiredProperty").prop("checked", false);

    $("#form-postproperty").show();
    $("#form-requiredproperty").hide();

    ///
    $("#property-details-post").show();
    $("#property-details-require").hide();

    $("#post-section").show();
    $("#require-section").hide();

    $("#property-info-title").text("Post Property");
    $("#gallery-section").show();
    $("#property-details-subtitile").text("For");

    $("#post-require-property-title").text("Post Property");

    $("#gallery-step").show();
    $("#step-4").show();
    $('#step-4').css('display', 'none');
});

$("#RequiredProperty").change(function () {
    $("#PostProperty").prop("checked", false);

    $("#form-postproperty").hide();
    $("#form-requiredproperty").show();

    ///
    $("#property-details-post").hide();
    $("#property-details-require").show();

    $("#post-section").hide();
    $("#require-section").show();

    $("#property-info-title").text("Require Property");

    $("#gallery-section").hide();
    $("#property-details-subtitile").text("To");

    $("#post-require-property-title").text("Require Property");

    $("#gallery-step").hide();
    $("#step-4").hide();
    $('#step-4').css('display', 'none');

});
/*** Post / Required Property options ***/

/*** Property Details Post ***/
$("#Sale").change(function () {
    $("#Rent").prop("checked", false);
    $("#PG").prop("checked", false);

    $("#property-info-subtitle").text("Sale");

    $("#post-section").show();
    $("#require-section").hide();

    $("#post-sale").show();
    $("#post-rent").hide();
    $("#post-pg").hide();

    InitializePostSaleRent();
});

$("#Rent").change(function () {
    $("#Sale").prop("checked", false);
    $("#PG").prop("checked", false);

    $("#property-info-subtitle").text("Rent");

    $("#post-section").show();
    $("#require-section").hide();

    $("#post-sale").hide();
    $("#post-rent").show();
    $("#post-pg").hide();

    InitializePostSaleRent();
});

$("#PG").change(function () {
    $("#Sale").prop("checked", false);
    $("#Rent").prop("checked", false);

    $("#property-info-subtitle").text("Paying Guest");

    $("#post-section").show();
    $("#require-section").hide();

    $("#post-sale").hide();
    $("#post-rent").hide();
    $("#post-pg").show();
});
/*** Property Details Post***/


/*** Property Details Req ***/
$("#ReqBuy").change(function () {
    $("#ReqRent").prop("checked", false);
    $("#ReqPG").prop("checked", false);

    $("#property-info-subtitle").text("Buy");

    $("#post-section").hide();
    $("#require-section").show();

    InitializeRequireBuyRent();
    $("#require-buy-rent").show();
    $("#require-pg").hide();
});

$("#ReqRent").change(function () {
    $("#ReqBuy").prop("checked", false);
    $("#ReqPG").prop("checked", false);

    $("#property-info-subtitle").text("Rent");

    $("#post-section").hide();
    $("#require-section").show();

    InitializeRequireBuyRent();
    $("#require-buy-rent").show();
    $("#require-pg").hide();
});

$("#ReqPG").change(function () {
    $("#ReqBuy").prop("checked", false);
    $("#ReqRent").prop("checked", false);

    $("#property-info-subtitle").text("Paying Guest");

    $("#post-section").hide();
    $("#require-section").show();

    $("#require-buy-rent").hide();
    $("#require-pg").show();
});
/*** Property Details Post***/



/*** Post Property options ***/
$("#pp_owner").change(function () {
    $("#pp_builder").prop("checked", false);
    $("#pp_broker").prop("checked", false);
    $("#pp_all").prop("checked", false);
});

$("#pp_builder").change(function () {
    $("#pp_owner").prop("checked", false);
    $("#pp_broker").prop("checked", false);
    $("#pp_all").prop("checked", false);
});

$("#pp_broker").change(function () {
    $("#pp_owner").prop("checked", false);
    $("#pp_builder").prop("checked", false);
    $("#pp_all").prop("checked", false);
});
$("#pp_all").change(function () {
    $("#pp_owner").prop("checked", false);
    $("#pp_builder").prop("checked", false);
    $("#pp_broker").prop("checked", false);
});
/*** Post Property options ***/


/*** Trade Type ***/
$("#NewProperty").change(function () {
    $("#Resale").prop("checked", false);
});

$("#Resale").change(function () {
    $("#NewProperty").prop("checked", false);
});
/*** Trade Type ***/



/*** Possession ***/
$("#UnderConstruction").change(function () {
    $("#ReadyToMove").prop("checked", false);
});

$("#ReadyToMove").change(function () {
    $("#UnderConstruction").prop("checked", false);
});
/*** Possession ***/


/*** Parking Available ***/
$("#ParkingYes").change(function () {
    $("#ParkingNo").prop("checked", false);
    $("#req-available-parking").show();
});

$("#ParkingNo").change(function () {
    $("#ParkingYes").prop("checked", false);
    $("#req-available-parking").hide();
});
/*** Parking Available ***/

/*** Post Parking Available ***/
$("#PostParkingYes").change(function () {
    $("#PostParkingNo").prop("checked", false);
    $("#post-available-parking").show();
});

$("#PostParkingNo").change(function () {
    $("#PostParkingYes").prop("checked", false);
    $("#post-available-parking").hide();
});
/*** Post Parking Available ***/

/*** OtherRoom ***/
$("#OtherRoomYes").change(function () {
    $("#OtherRoomNo").prop("checked", false);
    $("#req-roomname").show();
});

$("#OtherRoomNo").change(function () {
    $("#OtherRoomYes").prop("checked", false);
    $("#req-roomname").hide();
});
/*** OtherRoom ***/

/*** TimingRestrictions ***/
$("#pg-timerest-val").hide();
$("#TimingRestrictionsYes").change(function () {
    $("#TimingRestrictionsNo").prop("checked", false);
    $("#pg-timerest-val").show();
});

$("#TimingRestrictionsNo").change(function () {
    $("#TimingRestrictionsYes").prop("checked", false);
    $("#pg-timerest-val").hide();
});
/*** OtherRoom ***/

$("#pg-date-val").hide();
function pgAvailableStatusChange(val){
    var availableStatus = val.value;

    if(availableStatus == "Date") {
        $("#pg-date-val").show();
    } else {
        $("#pg-date-val").hide();
    }
}


$("#pg-furniture-desc").hide();
function pgFurnitureChange(val){
    var furnitureDesc = val.value;

    if(furnitureDesc == "Furnished") {
        $("#pg-furniture-desc").show();
    } else if(furnitureDesc == "SemiFurnished") {
        $("#pg-furniture-desc").show();
    } else {
        $("#pg-furniture-desc").hide();
    }
}

$("#post-furniture-desc").hide();
function postFurnitureChange(val){
    var furnitureDesc = val.value;

    if(furnitureDesc == "Furnished") {
        $("#post-furniture-desc").show();
    } else if(furnitureDesc == "SemiFurnished") {
        $("#post-furniture-desc").show();
    } else {
        $("#post-furniture-desc").hide();
    }
}

function InitializeRequireBuyRent(){

    $("#req-bedrooms").hide();
    $("#req-bathrooms").hide();
    $("#req-floorno").hide();
    $("#req-area").hide();
    $("#req-face").hide();
    $("#req-furniture").hide();
    $("#req-opensides").hide();
    $("#req-tradetype").hide();
    $("#req-permission").hide();
    $("#req-rent-purpose").hide();
    $("#req-cshop").hide();
    $("#req-gcommunity").hide();
    $("#req-parking").hide();
    $("#req-poojaroom").hide();
    $("#req-otherroom").hide();
    $("#req-roomname").hide();
    $("#req-possession").hide();
    $("#req-expprice").hide();
    $("#req-responsefrom").hide();
    $("#req-available-parking").hide();
    $("#req-plot-facing-mainroad").hide();
    $("#req-lrs").hide();
    $("#req-venture").hide();
    $("#req-waterfacility").hide();
    $("#req-BoundaryWith").hide();
    $("#req-totalfloors").hide();
    $("#req-warehousefacing").hide();

}

function requireBuyRentPropertTypeChange(sel){
    var ptype = sel.value;

    InitializeRequireBuyRent();

    if(ptype == "Agriculture Land") {

        $("#req-area").show();
        $("#req-face").show();
        $("#req-expprice").show();
        $("#req-waterfacility").show();
        $("#req-opensides").show();
        $("#req-BoundaryWith").show();
        $("#req-responsefrom").show();

    } else if(ptype == "Apartment") {

        $("#req-bedrooms").show();
        $("#req-bathrooms").show();
        $("#req-area").show();
        $("#req-face").show();
        $("#req-tradetype").show();
        $("#req-permission").show();
        $("#req-gcommunity").show();
        $("#req-furniture").show();
        $("#req-opensides").show();
        $("#req-parking").show();
        $("#req-poojaroom").show();
        $("#req-otherroom").show();
        $("#req-possession").show();
        $("#req-expprice").show();
        $("#req-responsefrom").show();

    } else if(ptype == "Commercial Plot") {

        $("#req-area").show();
        $("#req-plot-facing-mainroad").show();
        $("#req-expprice").show();
        $("#req-lrs").show();
        $("#req-permission").show();
        $("#req-waterfacility").show();
        $("#req-opensides").show();
        $("#req-BoundaryWith").show();
        $("#req-responsefrom").show();

    } else if(ptype == "Commercial Shop") {

        $("#req-area").show();
        $("#req-face").show();
        $("#req-expprice").show();
        $("#req-permission").show();
        $("#req-waterfacility").show();
        $("#req-opensides").show();
        $("#req-responsefrom").show();

    } else if(ptype == "PentHouse") {

        $("#req-bedrooms").show();
        $("#req-bathrooms").show();
        $("#req-area").show();
        $("#req-face").show();
        $("#req-tradetype").show();
        $("#req-permission").show();
        $("#req-rent-purpose").show();
        $("#req-gcommunity").show();
        $("#req-furniture").show();
        $("#req-opensides").show();
        $("#req-parking").show();
        $("#req-poojaroom").show();
        $("#req-otherroom").show();
        $("#req-possession").show();
        $("#req-expprice").show();
        $("#req-responsefrom").show();


    } else if(ptype == "Residential House") {

        $("#req-bedrooms").show();
        $("#req-bathrooms").show();
        $("#req-floorno").show();
        $("#req-area").show();
        $("#req-face").show();
        $("#req-tradetype").show();
        $("#req-permission").show();
        $("#req-rent-purpose").show();
        $("#req-cshop").show();
        $("#req-gcommunity").show();
        $("#req-furniture").show();
        $("#req-opensides").show();
        $("#req-parking").show();
        $("#req-poojaroom").show();
        $("#req-otherroom").show();
        $("#req-possession").show();
        $("#req-expprice").show();
        $("#req-responsefrom").show();

    } else if(ptype == "Residential Plot") {

        $("#req-area").show();
        $("#req-plot-facing-mainroad").show();
        $("#req-expprice").show();
        $("#req-lrs").show();
        $("#req-permission").show();
        $("#req-venture").show();
        $("#req-waterfacility").show();
        $("#req-opensides").show();
        $("#req-BoundaryWith").show();
        $("#req-responsefrom").show();


    } else if(ptype == "Warehouse") {

        $("#req-area").show();
        $("#req-totalfloors").show();
        $("#req-warehousefacing").show();
        $("#req-expprice").show();
        $("#req-bathrooms").show();
        $("#req-permission").show();
        $("#req-parking").show();
        $("#req-waterfacility").show();
        $("#req-opensides").show();
        $("#req-furniture").show();
        $("#req-responsefrom").show();

    } 
}

function areaChangeEvent(areaVal){
    var areaSelected = areaVal.value;
    
    $("#area-length").text(areaSelected);

    if(areaSelected == "Sq-ft") {

       

        $("#area-length").attr("placeholder", "ft");
        $("#area-bredth").attr("placeholder", "ft");

    } else if(areaSelected == "Sq-yrd") {

        $("#area-length").attr("placeholder", "yrd");
        $("#area-bredth").attr("placeholder", "yrd");

    } else if(areaSelected == "Sq-m") {

        $("#area-length").attr("placeholder", "m");
        $("#area-bredth").attr("placeholder", "m");

    } else {

        $("#area-length").attr("placeholder", "Length");
        $("#area-bredth").attr("placeholder", "Breadth");


    }

}

function InitializePostSaleRent(){

    $("#post-bedrooms").hide();
    $("#post-bathrooms").hide();
    $("#post-floorno").hide();
    $("#post-area").hide();
    $("#post-face").hide();
    $("#post-furniture").hide();
    $("#post-opensides").hide();
    $("#post-tradetype").hide();
    $("#post-permission").hide();
    $("#post-rent-purpose").hide();
    $("#post-cshop").hide();
    $("#post-gcommunity").hide();
    $("#post-parking").hide();
    $("#post-poojaroom").hide();
    $("#post-otherroom").hide();
    $("#post-roomname").hide();
    $("#post-possession").hide();
    $("#post-expprice").hide();
    $("#post-responsefrom").hide();
    $("#post-available-parking").hide();
    $("#post-plot-facing-mainroad").hide();
    $("#post-lrs").hide();
    $("#post-venture").hide();
    $("#post-waterfacility").hide();
    $("#post-BoundaryWith").hide();
    $("#post-totalfloors").hide();
    $("#post-warehousefacing").hide();
    
    $("#post-responsefrom").hide();
    $("#post-totalprice").hide();
    $("#post-balconies").hide();
    $("#post-buildingage").hide();

    $("#post-leaseyears").hide();
    $("#post-rent-details").hide();
    
    $("#post-commonbathroom").hide();
    $("#post-attachedbathroom").hide();
    
    
    $("#post-balcony").hide();
    $("#post-commonarea").hide();
    $("#post-cc-cameras").hide();
    $("#post-watchmen").hide();
    $("#post-pets-allowed").hide();
    $("#post-available-for").hide();
    $("#post-available-status").hide();
    $("#post-water").hide();
   
    $("#post-Bathroom").hide();
    $("#post-Cafeteria").hide();
    $("#post-lrs").hide();
    $("#pos-BoundaryWith").hide();
    $("#post-now-under-lease").hide();
    $("#post-acres").hide();
    $("#post-land-to-main-road-distance").hide();
    $("#post-soiltype").hide();
}

// Post - Sale
  function postPropertyTypeChangeSale(val){

        var ptype = val.value;

        InitializePostSaleRent();

        if(ptype == "Agriculture Land") {

            $("#post-face").show();
            $("#post-now-under-lease").show();
            $("#post-acres").show();
            $("#post-otherroom").show();
            $("#post-water").show();
            $("#pos-BoundaryWith").show();
            $("#post-land-to-main-road-distance").show();
            $("#post-soiltype").show();
            $("#post-responsefrom").show();
           
        } else if(ptype == "Apartment") {

            $("#post-bedrooms").show();
            $("#post-bathrooms").show();
            $("#post-totalfloors").show();
            $("#post-floorno").show();
            $("#post-area").show();
            $("#post-totalprice").show();
            $("#post-face").show();
            $("#post-opensides").show();
            $("#post-furniture").show();
            $("#post-buildingage").show();
            $("#post-gcommunity").show();
            $("#post-tradetype").show();
            $("#post-permission").show();
            $("#post-parking").show();
            $("#post-poojaroom").show();
            $("#post-otherroom").show();
            $("#post-possession").show();
            $("#post-venture").show();
            $("#post-responsefrom").show();

        } else if(ptype == "Commercial Plot") {

            $("#post-face").show();
            $("#post-area").show();
            $("#post-leaseyears").show();
            $("#post-venture").show();
            $("#post-opensides").show();
            $("#pos-BoundaryWith").show();
            $("#post-totalprice").show();
            $("#post-responsefrom").show();

        } else if(ptype == "Commercial Shop") {

            $("#post-totalfloors").show();
            $("#post-floorno").show();
            $("#post-area").show();
            $("#post-totalprice").show();
            $("#post-buildingage").show();
            $("#post-otherroom").show();
            $("#post-bathrooms").show();
            $("#post-furniture").show();
            $("#post-tradetype").show();
            $("#post-possession").show();
            $("#post-parking").show();
            $("#post-face").show();
            $("#post-responsefrom").show();

        } else if(ptype == "Industrial Land") {

            $("#post-face").show();
            $("#post-leaseyears").show();
            $("#post-venture").show();
            $("#post-permission").show();
            $("#post-opensides").show();
            $("#post-totalprice").show();
            $("#post-responsefrom").show();

        } else if(ptype == "Individual House") {

            $("#post-bedrooms").show();
            $("#post-bathrooms").show();
            $("#post-totalfloors").show();
            $("#post-area").show();
            $("#post-totalprice").show();
            $("#post-poojaroom").show();
            $("#post-otherroom").show();
            $("#post-furniture").show();
            $("#post-face").show();
            $("#post-opensides").show();
            $("#post-balcony").show();
            $("#post-tradetype").show();
            $("#post-permission").show();
            $("#post-possession").show();
            $("#post-parking").show();
            $("#post-buildingage").show();
            $("#post-gcommunity").show();
            $("#post-responsefrom").show();

        } else if(ptype == "Office Space") {

            $("#post-totalfloors").show();
            $("#post-floorno").show();
            $("#post-area").show();
            $("#post-buildingage").show();
            $("#post-bathrooms").show();
            $("#post-furniture").show();
            $("#post-tradetype").show();
            $("#post-parking").show();
            $("#post-face").show();
            $("#post-leaseyears").show();
            $("#post-Cafeteria").show();
            $("#post-opensides").show();
            $("#post-possession").show();
            $("#post-totalprice").show();
            $("#post-responsefrom").show();
    

        } else if(ptype == "Pent House") {

            $("#post-bedrooms").show();
            $("#post-bathrooms").show();
            $("#post-area").show();
            $("#post-totalprice").show();
            $("#post-poojaroom").show();
            $("#post-otherroom").show();
            $("#post-buildingage").show();
            $("#post-furniture").show();
            $("#post-balconies").show();
            $("#post-opensides").show();
            $("#post-tradetype").show();
            $("#post-possession").show();
            $("#post-permission").show();
            $("#post-parking").show();
            $("#post-face").show();
            $("#post-gcommunity").show();
            $("#post-responsefrom").show();

        } else if(ptype == "Residential Plot") {

            $("#post-face").show();
            $("#post-area").show();
            $("#post-venture").show();
            $("#post-opensides").show();
            $("#post-responsefrom").show();
            $("#post-lrs").show();
            $("#pos-BoundaryWith").show();
            $("#post-totalprice").show();

        } else if(ptype == "Ware House") {

            $("#post-Bathroom").show();
            $("#post-totalprice").show();
            $("#post-totalfloors").show();
            $("#post-floorno").show();
            $("#post-area").show();
            $("#post-buildingage").show();
            $("#post-furniture").show();
            $("#post-tradetype").show();
            $("#post-permission").show();
            $("#post-parking").show();
            $("#post-face").show();
            $("#post-opensides").show();
            $("#post-responsefrom").show();

        } 

  }

// Post - Rent
  function postPropertyTypeChangeRent(val){

    var ptype = val.value;

    InitializePostSaleRent();

     if(ptype == "Apartment") {

        $("#post-bedrooms").show();
        $("#post-bathrooms").show();
        $("#post-totalfloors").show();
        $("#post-floorno").show();
        $("#post-commonbathroom").show();
        $("#post-attachedbathroom").show();
        $("#post-area").show();
        $("#post-poojaroom").show();
        $("#post-otherroom").show();
        $("#post-opensides").show();
        $("#post-available-for").show();
        $("#post-buildingage").show();
        $("#post-available-status").show();
        $("#post-face").show();
        $("#post-totalprice").show();
        $("#post-responsefrom").show();
        $("#post-furniture").show();
        $("#post-leaseyears").show();
        $("#post-rent-details").show();
        $("#post-balcony").show();
        $("#post-commonarea").show();
        $("#post-cc-cameras").show();
        $("#post-watchmen").show();
        $("#post-pets-allowed").show();
        $("#post-water").show();
       
       
    } else if(ptype == "Commercial Plot") {

        $("#post-face").show();
        $("#post-area").show();
        $("#post-available-status").show();
        $("#post-opensides").show();
        $("#post-commonarea").show();
        $("#post-Bathroom").show();
        $("#post-cc-cameras").show();
        $("#post-watchmen").show();
        $("#post-water").show();
        $("#post-rent-details").show();
        $("#post-responsefrom").show();

    } else if(ptype == "Commercial Shop") {

        $("#post-totalfloors").show();
        $("#post-floorno").show();
        $("#post-area").show();
        $("#post-available-status").show();
        $("#post-face").show();
        $("#post-water").show();
        $("#post-Bathroom").show();
        $("#post-permission").show();
        $("#post-opensides").show();
        $("#post-furniture").show();
        $("#post-cc-cameras").show();
        $("#post-watchmen").show();
        $("#post-leaseyears").show();
        $("#post-rent-details").show();
        $("#post-responsefrom").show();


    } else if(ptype == "Farm House") {

        $("#post-totalfloors").show();
        $("#post-floorno").show();
        $("#post-bedrooms").show();
        $("#post-bathrooms").show();
        $("#post-commonbathroom").show();
        $("#post-attachedbathroom").show();
        $("#post-area").show();
        $("#post-poojaroom").show();
        $("#post-otherroom").show();
        $("#post-available-for").show();
        $("#post-buildingage").show();
        $("#post-available-status").show();
        $("#post-face").show();
        $("#post-opensides").show();
        $("#post-commonarea").show();
        $("#post-water").show();
        $("#post-pets-allowed").show();
        $("#post-furniture").show();
        $("#post-cc-cameras").show();
        $("#post-watchmen").show();
        $("#post-rent-details").show();
        $("#post-responsefrom").show();


    } else if(ptype == "Industrial Land") {

        $("#post-face").show();
        $("#post-area").show();
        $("#post-leaseyears").hide();
        $("#post-venture").show();
        $("#post-opensides").show();
        $("#post-permission").show();
        $("#post-water").show();
        $("#post-Bathroom").show();
        $("#post-rent-details").show();
        $("#post-responsefrom").show();

    } else if(ptype == "Individual House") {

        $("#post-bedrooms").show();
        $("#post-bathrooms").show();
        $("#post-totalfloors").show();
        $("#post-floorno").show();
        $("#post-commonbathroom").show();
        $("#post-attachedbathroom").show();
        $("#post-area").show();
        $("#post-poojaroom").show();
        $("#post-otherroom").show();
        $("#post-opensides").show();
        $("#post-available-for").show();
        $("#post-buildingage").show();
        $("#post-available-status").show();
        $("#post-face").show();
        $("#post-totalprice").show();
        $("#post-responsefrom").show();
        $("#post-furniture").show();
        $("#post-leaseyears").show();
        $("#post-rent-details").show();
        $("#post-balcony").show();
        $("#post-commonarea").show();
        $("#post-cc-cameras").show();
        $("#post-watchmen").show();
        $("#post-pets-allowed").show();
        $("#post-water").show();

    } else if(ptype == "Office Space") {

        $("#post-totalfloors").show();
        $("#post-floorno").show();
        $("#post-area").show();
        $("#post-available-status").show();
        $("#post-face").show();
        $("#post-water").show();
        $("#post-Bathroom").show();
        $("#post-Cafeteria").show();
        $("#post-opensides").show();
        $("#post-furniture").show();
        $("#post-cc-cameras").show();
        $("#post-watchmen").show();
        $("#post-rent-details").show();
        $("#post-responsefrom").show();

    } else if(ptype == "Pent House") {

        $("#post-totalfloors").show();
        $("#post-face").show();
        $("#post-venture").show();
        $("#post-opensides").show();
        $("#post-rent-details").show();
        $("#post-responsefrom").show();

    } else if(ptype == "Residential Plot") {

        $("#post-face").show();
        $("#post-area").show();
        $("#post-water").show();
        $("#post-venture").show();
        $("#post-opensides").show();
        $("#post-totalprice").show();
        $("#post-responsefrom").show();

    } else if(ptype == "Ware House") {

        $("#post-totalfloors").show();
        $("#post-floorno").show();
        $("#post-face").show();
        $("#post-area").show();
        $("#post-available-status").show();
        $("#post-opensides").show();
        $("#post-commonarea").show();
        $("#post-Bathroom").show();
        $("#post-water").show();
        $("#post-permission").show();
        $("#post-cc-cameras").show();
        $("#post-watchmen").show();
        $("#post-rent-details").show();
        $("#post-responsefrom").show();

    } 

}