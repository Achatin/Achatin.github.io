function dotScroll() {
    let element = document.getElementById("container");
    let y = element.scrollTop;

    let notice = document.getElementById("notice");
    if(y > 100) {
        notice.style.opacity = 0;
        notice.style.transition = "opacity 0.5s";
    }
}


function toContact() {

    var elmntToView = document.getElementById("contact");
    elmntToView.scrollIntoView({behavior: "smooth"}); 

}


function carouselRpi() {
    
    var myIndex = 0;
    var interval;
    
    function startSlide(){

        var i;
        var x = document.getElementsByClassName("hidden Rpi");

        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
            myIndex++;
            if (myIndex > x.length) {myIndex = 1}    
            x[myIndex-1].style.display = "block";
            interval = setTimeout(startSlide, 3000); // Change image every 3 seconds

    }

    
    function stopSlide(){

        clearTimeout(interval);

        document.getElementById("slideRpi1").style.display = "none";
        document.getElementById("slideRpi2").style.display = "none";
        document.getElementById("slideRpi3").style.display = "none";

    }

    document.getElementById("previewRpi").addEventListener('mouseenter', startSlide);
    document.getElementById("previewRpi").addEventListener('mouseleave', stopSlide);
}


function carouselWD() {
    
    var myIndex = 0;
    var interval;
    
    function startSlide(){

        var i;
        var x = document.getElementsByClassName("hidden rounded-xl shadow-xl WD");

        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
            myIndex++;
            if (myIndex > x.length) {myIndex = 1}    
            x[myIndex-1].style.display = "block";
            interval = setTimeout(startSlide, 3000); // Change image every 3 seconds

    }

    
function stopSlide(){

        clearTimeout(interval);

        document.getElementById("slideWD1").style.display = "none";
        document.getElementById("slideWD2").style.display = "none";
        document.getElementById("slideWD3").style.display = "none";

    }

    document.getElementById("previewWD").addEventListener('mouseenter', startSlide);
    document.getElementById("previewWD").addEventListener('mouseleave', stopSlide);
}


function carouselCoding() {
    
    var myIndex = 0;
    var interval;
    
    function startSlide(){

        var i;
        var x = document.getElementsByClassName("hidden rounded-xl shadow-xl Coding");

        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
            myIndex++;
            if (myIndex > x.length) {myIndex = 1}    
            x[myIndex-1].style.display = "block";
            interval = setTimeout(startSlide, 3000); // Change image every 3 seconds

    }

    
function stopSlide(){

        clearTimeout(interval);

        document.getElementById("slideCoding1").style.display = "none";
        document.getElementById("slideCoding2").style.display = "none";
        document.getElementById("slideCoding3").style.display = "none";
        document.getElementById("slideCoding4").style.display = "none";
        document.getElementById("slideCoding5").style.display = "none";
        document.getElementById("slideCoding6").style.display = "none";
        document.getElementById("slideCoding7").style.display = "none";

    }

    document.getElementById("previewCoding").addEventListener('mouseenter', startSlide);
    document.getElementById("previewCoding").addEventListener('mouseleave', stopSlide);
}
