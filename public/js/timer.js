// function updateTimer() {
//     future = Date.parse("Mar 05, 2023 17:00:00");
//     now = new Date();
//     diff = future - now;

//     days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     hours = Math.floor(diff / (1000 * 60 * 60));
//     mins = Math.floor(diff / (1000 * 60));
//     secs = Math.floor(diff / 1000);

//     d = days;
//     h = hours - days * 24;
//     m = mins - hours * 60;
//     s = secs - mins * 60;
//     if (h < 10) {
//         h = '0' + h;
//     }
//     if (m < 10) {
//         m = '0' + m;
//     }
//     if (s < 10) {
//         s = '0' + s;
//     }
//     document.getElementById("timerForPS")
//         .innerHTML =
//         '<div>' + 0 + d + '<span>Days</span></div>' +
//         '<div>' + h + '<span>Hours</span></div>' +
//         '<div>' + m + '<span>Minutes</span></div>' +
//         '<div>' + s + '<span>Seconds</span></div>';
// }
// setInterval('updateTimer()', 1000);
// // updateTimer();
// var organizerFPhotoSrc = ["images/team/ft-01.png", "images/team/ft-01.png"];
// var currentF = -1;
// var organizerSPhotoSrc = ["images/team/st-01.png", "images/team/st-02.png", "images/team/st-03.png", "images/team/st-04.png", "images/team/st-05.png"];
// var currentS = -1;
// var organizerSPhoto = document.getElementById("organizerSPhotos");
// var organizerFPhoto = document.getElementById("organizerFPhotos");

// function updateorganizerPhotos() {
//     currentS = (currentS + 1) % organizerSPhotoSrc.length;
//     organizerSPhoto.src = organizerSPhotoSrc[currentS];
//     currentF = (currentF + 1) % organizerFPhotoSrc.length;
//     organizerFPhoto.src = organizerFPhotoSrc[currentF];
// }
// updateorganizerPhotos();
// setInterval('updateorganizerPhotos()', 1500);

// var blankDiv = document.getElementById('blankDiv');
// var header = document.getElementById('header').offsetHeight;
// var homeSection = document.getElementById('home').offsetHeight;

// function setHeight() {
//     blankDiv.style.height = (homeSection - header - 90 * 0.65) + 'px';
// }

// setHeight();

