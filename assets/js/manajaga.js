/*** Change Blink Text ***/
$(document).ready(function () {
    var text = ["Post / Require Property", "Free"];
    var counter = 0;
    var elem = document.getElementById("blink_me");
    var inst = setInterval(change, 1000);

    function change() {
        var txt = text[counter];
        if (txt == "Free") {

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
$("#form-postproperty").show();
$("#PostProperty").prop("checked", true);
$("#form-requiredproperty").hide();

$("#property-info-title").text("Post Property");
$("#property-details-post").show();
$("#gallery-section").show();
$("#property-details-require").hide();

$("#post-section").hide();
$("#require-section").hide();

$("#post-sale").show();
$("#post-rent").hide();
$("#post-pg").hide();

$("#require-buy").hide();
$("#require-rent").hide();
$("#require-pg").show();

$("#property-details-subtitile").text("For");


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

    $("#require-buy").show();
    $("#require-rent").hide();
    $("#require-pg").hide();
});

$("#ReqRent").change(function () {
    $("#ReqBuy").prop("checked", false);
    $("#ReqPG").prop("checked", false);

    $("#property-info-subtitle").text("Rent");

    $("#post-section").hide();
    $("#require-section").show();

    $("#require-buy").hide();
    $("#require-rent").show();
    $("#require-pg").hide();
});

$("#ReqPG").change(function () {
    $("#ReqBuy").prop("checked", false);
    $("#ReqRent").prop("checked", false);

    $("#property-info-subtitle").text("Paying Guest");

    $("#post-section").hide();
    $("#require-section").show();

    $("#require-buy").hide();
    $("#require-rent").hide();
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
});

$("#ParkingNo").change(function () {
    $("#ParkingYes").prop("checked", false);
});
/*** Parking Available ***/