function enlargeImg(popup, src) {

    document.getElementById("imgsrc").src = src

    popup.style.display = "flex";
}

function closeImg(popup) {
    popup.style.display = "none";
}