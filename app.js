function openPopup(imageUrl) {
    var popup = document.getElementById("popup");
    var popupImg = document.getElementById("popupImg");
    popupImg.src = imageUrl;
    popup.style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
