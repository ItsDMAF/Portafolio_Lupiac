function openPopup(imageUrl) {
    var popup = document.getElementById("popup");
    var popupImg = document.getElementById("popupImg");
    popupImg.src = imageUrl;
    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function sendemail (){
    var name = document.getElementById("nombrearea");
    var email = document.getElementById("emailarea");
    var message = document.getElementById("mensajearea");
    var nameFlag = true;

    if (emailFlag == true ){
        //Send message
    } else {
        //Display message incorrect email.
    }
}