
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
    },
    560: {
      slidesPerView: 1,
      slidesPerColumn: 2,
    },
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
    },
    992: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },
  },
});
setInterval(function () {
  setClass();
}, 2000); //number of milliseconds (2000 = 2 seconds)
function setClass() {
  $(".about-top").toggleClass("about-click");
}
// $(".work-video").click(function() {
//     $(".full-video").toggleClass("open");
//     $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
// });
// $(".full-video h3, .full-video a.close-btn").click(function() {
//     $(".full-video").removeClass("open");
//     // $(".youtube-video").get(0).stopVideo();
//     $('.youtube-video').attr('src', $('iframe').attr('src'));
// });
var $cell = $(".card");

//open and close card when clicked on card
$cell.find(".js-expander").click(function () {
  var $thisCell = $(this).closest(".card");
  $(".card").removeClass("is-expanded");
  if ($thisCell.hasClass("is-collapsed")) {
    $cell
      .not($thisCell)
      .removeClass("is-expanded open-box")
      .addClass("is-collapsed")
      .addClass("is-inactive");
    $thisCell
      .removeClass("is-collapsed")
      .addClass("is-expanded open-box");

    if ($cell.not($thisCell).hasClass("is-inactive")) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass("is-inactive");
    }
  } else {
    $thisCell
      .removeClass("is-expanded open-box")
      .addClass("is-collapsed");
    $cell.not($thisCell).removeClass("is-inactive");
  }
});
//close card when click on cross
$cell.find(".back").click(function () {
  var $thisCell = $(this).closest(".card");

  $thisCell
    .removeClass("is-expanded open-box")
    .addClass("is-collapsed");
  $cell.not($thisCell).removeClass("is-inactive");
});

$(".hamburger").on("click", function () {
  if ($(".nav-menu").hasClass("active")) {
    $(".nav-menu").removeClass("active");
    $("body").removeClass("overflow-hidden");
    $("html").removeClass("overflow-hidden");
  } else {
    $(".nav-menu").addClass("active");
    $("body").addClass("overflow-hidden");
    $("html").addClass("overflow-hidden");
  }
});

function openModal(params) {
  $(".content-modal").css("z-index", "2");
  $("#" + params).css("display", "block");
  $("#" + params).css("z-index", "99");
}

function closeModal(params) {
  $(".content-modal").css("z-index", "-1");
  $("#" + params).css("display", "none");
  $("#" + params).css("z-index", "-1");
}

var newsSwiper = new Swiper(".newsSwiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function newsSwiperModal() {
  $(".content-modal-swiper").css("z-index", "2");
  $(".swiper-modal").css("display", "block");
  $(".swiper-modal").css("z-index", "99");
  newsSwiper.update();
}

function closeSwiperModal() {
  $(".content-modal-swiper").css("z-index", "-1");
  $(".swiper-modal").css("display", "none");
  $(".swiper-modal").css("z-index", "-1");
}

var workSwiper = new Swiper(".workSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Check if the user has accepted cookies before
//   if (localStorage.getItem("cookiesAccepted") !== "true") {
//     // Show the cookie popup if not accepted
//     document.getElementById("cookie-popup").style.display = "block";
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  // Check if the user has accepted cookies before
  if (localStorage.getItem("cookiesAccepted") !== "true") {
    // Show the cookie popup if not accepted
    document.getElementById("cookie-popup").style.display = "block";
   
  }else {
    addGtag();
  }

   if(sessionStorage.getItem("cookiesRejected") == "true"){
    document.getElementById("cookie-popup").style.display = "none";
    
  }

  
});

function acceptCookies() {
  // Set a flag in local storage to remember that the user has accepted cookies
  localStorage.setItem("cookiesAccepted", "true");

  // Hide the cookie popup
  document.getElementById("cookie-popup").style.display = "none";
  addGtag();
}

function closePopup() {
  // Hide the cookie popup without storing in local storage
  sessionStorage.setItem("cookiesRejected", "true");
  document.getElementById("cookie-popup").style.display = "none";
}

function addGtag(){
  let addGoogleAnalytics = document.createElement("script");
  addGoogleAnalytics.setAttribute("src","https://www.googletagmanager.com/gtag/js?id=G-2J3VPQ40BG");
  addGoogleAnalytics.async = "true";
  document.head.appendChild(addGoogleAnalytics);

  let addDataLayer = document.createElement("script");
  let dataLayerData = document.createTextNode("window.dataLayer = window.dataLayer || []; \n function gtag(){dataLayer.push(arguments);} \n gtag('js', new Date()); \n gtag('config', 'G-2J3VPQ40BG');");
  addDataLayer.appendChild(dataLayerData);
  document.head.appendChild(addDataLayer);
}

function closePlaylistPopup() {
  var popup = document.getElementById("playlistPopup");
  popup.style.display = "none";
}

function openYoutubePlaylist() {
  // Change the source of the iframe to your YouTube playlist link
  var playlistEmbed = document.getElementById("playlistEmbed");
  playlistEmbed.src = "https://www.youtube.com/embed/videoseries?list=PL5tTOkSiz4uden7XYVkFMP1ZAgcPd0Bx0";

  // Show the YouTube player
  document.getElementById("youtubePlayer").style.display = "block";
  document.getElementById("closeyoutube").style.display = "block";
  // Apply blur effect to the body
  document.body.classList.add("blur");

  var popup = document.getElementById("playlistPopup");
  popup.style.display = "none";
}

function closeYoutubePlaylist() {

  // Change the source of the iframe to your YouTube playlist link
  var playlistEmbed = document.getElementById("playlistEmbed");
  playlistEmbed.src = "";
  // Hide the YouTube player
  document.getElementById("youtubePlayer").style.display = "none";
  document.getElementById("closeyoutube").style.display = "none";
  // Remove blur effect from the body
  document.body.classList.remove("blur");

  var popup = document.getElementById("playlistPopup");
  popup.style.display = "none";
  
}

document.addEventListener("DOMContentLoaded", function () {
  // Check if the user has accepted cookies before
  if (localStorage.getItem("cookiesAccepted") !== "true") {
    // Show the cookie popup if not accepted
    document.getElementById("cookie-popup").style.display = "block";
   
  }else {
    addGtag();
  }

   if(sessionStorage.getItem("cookiesRejected") == "true"){
    document.getElementById("cookie-popup").style.display = "none";
    
  }

  
});

function acceptCookies() {
  // Set a flag in local storage to remember that the user has accepted cookies
  localStorage.setItem("cookiesAccepted", "true");

  // Hide the cookie popup
  document.getElementById("cookie-popup").style.display = "none";

  addGtag();
  

}

function closePopup() {
  // Hide the cookie popup without storing in local storage
  sessionStorage.setItem("cookiesRejected", "true");
  document.getElementById("cookie-popup").style.display = "none";
}