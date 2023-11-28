
function openLightbox(imageSrc) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightbox-image");

    lightboxImage.src = imageSrc;
    lightbox.style.display = "block";
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}


var thumbnails = document.querySelectorAll(".thumbnail a");
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function(event) {
        event.preventDefault();
        var imageUrl = this.getAttribute("href");
        openLightbox(imageUrl);
    });
});
