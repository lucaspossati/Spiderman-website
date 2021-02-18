$(document).ready(function () {
    $(".bx").click(function () {
        $(this).toggleClass("active");
        $(".nav-list").toggleClass("active");
    });
});