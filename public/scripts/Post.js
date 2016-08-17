// var fs = require('fs');
// var path = require('path');

// //writeToFile("\ntest");
// function writeToFile(text){
//     try {
//         var fs = require('fs');
//         fs.appendFile(path.join(__dirname, '../test.txt'), text);
//         alert("Added line successfully!");
//     }
//     catch(err){
//         alert("Error... " + err);
//     }
// }
function catSelect(cat){
   //alert("Cat selected: " + cat);
   var innerPicture = "<img src='/images/predix_logo.png' alt='predix_logo'>";
   switch(cat){
       case "Melon":
        innerPicture = "<img src='/images/melon_cat.gif' id='selected_picture' alt='cat_01'>";
        break;
       case "Orange":
        innerPicture = "<img src='/images/orange_cats.gif' id='selected_picture' alt='cat_02'>";
        break;
       case "Burger":
        innerPicture = "<img src='/images/burger_cats.gif' id='selected_picture' alt='cat_03'>";
        break;
       case "Ramen":
        innerPicture = "<img src='/images/ramen_cats.gif' id='selected_picture' alt='cat_04'>";
        break;
       case "Santa":
        innerPicture = "<img src='/images/santa_cat.gif' id='selected_picture' alt='cat_05'>";
        break;
       case "Flower":
        innerPicture = "<img src='/images/flower_cat.gif' id='selected_picture' alt='cat_06'>";
        break;
       case "Watermelon":
        innerPicture = "<img src='/images/watermelon_cats.gif' id='selected_picture' alt='cat_07'>";
        break;
       case "Windmill":
        innerPicture = "<img src='/images/windmill_cat.gif' id='selected_picture' alt='cat_07'>";
        break;
       default:
        innerPicture = "<img src='/images/melon_cat.gif' id='selected_picture' alt='cat_08'>";
        break;       
   }
   var messageBox = "<p><br></p><input type='text' id='messagetext' placeholder='Enter Message Here!'/>";
   var zazzle_btn = "<button class='dropbtn' onClick='submitPost()'>Zazzle!</button>";
   document.getElementById("zazzleButton").innerHTML = zazzle_btn;
   document.getElementById("cat_picture").innerHTML = innerPicture;
   document.getElementById("messageArea").innerHTML = messageBox; 
} 

function submitPost(){
    var cat_image = document.getElementById("cat_picture").innerHTML;
    var message_text = document.getElementById("messagetext").value;
    var alt_text = document.getElementById("selected_picture").alt;
    //writeToFile("\nHello, this is cat.");
    //alert("Cat selected: " + cat_image + "\nMessage: " +  message_text + " " + message_text.length + "\nAlt text: " + alt_text);
}

