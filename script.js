var yourName = "Srimon";
var friendsName = "Saima"; 
$("body").css("font-family","papyrus");
$("body").css("background-color","#ffe5ec"); 
$(".received").css("background-color", "pink");
$(".received").css("font-family", "garamond");
$(".received").css("color", "white");
$(".sent").css("background-color", "pink");
$(".sent").css("font-family", "garamond");


$(".sent").show();
$(".input").click(function(){
    var yourMessage= $(".your-input").val();
    $(".sent").append("<p>" + yourMessage +"</p>");
});


$(".input2").click(function(){
    var friendMessage= $(".friend-input").val();
    $(".received").append("<p>" + friendMessage +"</p>");
	$('#counter').text(Number($('#counter').text())+1);
});



//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}