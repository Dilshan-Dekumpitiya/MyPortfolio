/* ------------------------------------ My Portfolio js file ------------------------------------------------ */

/* Window = DOM + CSSOM */
// $(window).on('load', function () {
//     $('#loader,#extra-div').fadeOut(1000);
//     $('body').children(':not(#loader,#extra-div)').fadeIn(3000);
// });
//
// $(document).ready(function (){
//     $('body').children(':not(#loader,#extra-div)').css('display','none');
// });

/*$(function (){

});*/

//for the Cursor
$(document).mousemove(function(event) {
    // currentMousePos.x = event.pageX;
    // currentMousePos.y = event.pageY;
    console.log(event.pageY+"----"+event.pageX);

    $('#mainCircle').css({
        'top':event.pageY-20,
        'left':event.pageX-20,
    });

});

/* ------------------------ Projects Section -------------------- */
$("#btnProjectsViewMore").on("click", function () {
    $("#btnProjectsViewMore>a").attr("target", "_blank");
    $("#btnProjectsViewMore>a").attr("href", "pages/projects.html");
});

$('#btnPalmOilProject').on('click', function () {
    $("#btnPalmOilProject>a").attr("target", "_blank");
    $("#btnPalmOilProject>a").attr("href", "https://github.com/Dilshan-Dekumpitiya/Production-and-By-Product-Fuel-Management-System-Using-Layerd-Architecture");
});

$('#btnHostelProject').on('click', function () {
    $("#btnHostelProject>a").attr("target", "_blank");
    $("#btnHostelProject>a").attr("href", "https://github.com/Dilshan-Dekumpitiya/Hostel-Management-System-Using-Hibernate");
});

$('#btnChatAppProject').on('click', function () {
    $("#btnChatAppProject>a").attr("target", "_blank");
    $("#btnChatAppProject>a").attr("href", "https://github.com/Dilshan-Dekumpitiya/Group-Chat-App-Using-Java-Socket-Programming");
});

/* ------------------------ Assignments Section -------------------- */
$("#btnAssignmentsViewMore").on("click", function () {
    $("#btnAssignmentsViewMore>a").attr("target", "_blank");
    $("#btnAssignmentsViewMore>a").attr("href", "pages/assignments.html");
});

$('#btnAssignment-01').on('click', function () {
    $("#btnAssignment-01>a").attr("target", "_blank");
    $("#btnAssignment-01>a").attr("href", "assignments/CSS/Basics/case_01/index.html");
});

$('#btnAssignment-02').on('click', function () {
    $("#btnAssignment-02>a").attr("target", "_blank");
    $("#btnAssignment-02>a").attr("href", "assignments/CSS/Basics/case_02/index.html");
});

$('#btnAssignment-03').on('click', function () {
    $("#btnAssignment-03>a").attr("target", "_blank");
    $("#btnAssignment-03>a").attr("href", "assignments/CSS/Basics/case_03/index.html");
});