// $(function () {
//   $(".box1").css({
//     "background-color": "#0000FF",
//     height: "100px",
//   });
// });

// $(function () {
//   $(".box1").show();
//   $(".box1").css({ "background-color": "#0000ff" });
// });

// $(function () {
//   $(".box1").hide();
// });

// $(function () {
//   $(".box1").mouseover(function () {
//     $(".box1").css({ "background-color": "#0000ff" });
//   });
//   $(".box1").mouseout(function () {
//     $(".box1").css({ "background-color": "#ff0000" });
//   });
// });

// $(function () {
//   $(".box1").mouseover(function () {
//     $(".box1").addClass("box1-ext");
//   });
//   $(".box1").mouseout(function () {
//     $(".box1").removeClass("box1-ext");
//   });
// });

// $(function () {
//   $(".box1").on("click", function () {
//     $(".box1").addClass("box1-ext");
//   });
//   $(".box1").mouseout(function () {
//     $(".box1").removeClass("box1-ext");
//   });
// });

// $(function () {
//   $(".box1").on("click", function () {
//     $(this).slideUp();
//   });
// });

// $(function () {
//   $("button").on("click", function () {
//     $("ul").children().css("color", "red");
//   });
// });

$(function () {
  $(".menu-trigger").on("click", function (event) {
    $(this).toggleClass("active");
    $("#sp-menu").fadeToggle();
    event.preventDefault();
  });
});
