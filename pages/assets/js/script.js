/* ----------------------- js file for Projects and Assignments Page ----------------------- */

// $(window).on('load', function () {
//     $('#loader,#extra-div').fadeOut(1000);
//     $('body').children(':not(#loader,#extra-div)').fadeIn(3000);
// });
//
// $(document).ready(function () {
//     $('body').children(':not(#loader,#extra-div)').css('display', 'none');
// });

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

/* ------------------------ Projects Page -------------------- */
$('#btnProject1').on('click', function () {
    $("#btnProject1>a").attr("target", "_blank");
    $("#btnProject1>a").attr("href", "https://github.com/Dilshan-Dekumpitiya/Production-and-By-Product-Fuel-Management-System-Using-Layerd-Architecture");
});

$('#btnProject2').on('click', function () {
    $("#btnProject2>a").attr("target", "_blank");
    $("#btnProject2>a").attr("href", "https://github.com/Dilshan-Dekumpitiya/Hostel-Management-System-Using-Hibernate");
});

$('#btnProject3').on('click', function () {
    $("#btnProject3>a").attr("target", "_blank");
    $("#btnProject3>a").attr("href", "https://github.com/Dilshan-Dekumpitiya/Group-Chat-App-Using-Java-Socket-Programming");
});

$('#btnProject4').on('click', function () {
    $("#btnProject4>a").attr("target", "_blank");
    $("#btnProject4>a").attr("href", "https://github.com/Dilshan-Dekumpitiya/QR-Code-Generator-Using-JavaFX");
});

$('#btnProject5').on('click', function () {
    $("#btnProject5>a").attr("target", "_blank");
    $("#btnProject5>a").attr("href", "https://github.com/Dilshan-Dekumpitiya/Connect-Four-Game-Using-JavaFX");
});

$('#btnAllProjects').on('click', function () {
    // $('.display_desktop_projects').css('display', 'none');
    $('.display_desktop_projects').hide();

    // $('.display_all_projects').css('display', 'flex');
    $('.display_all_projects').show();

    $('#btnAllProjects').css({
        "color": "#fff",
        "background": "#007bff",
        "transition": "all 0.3s ease"
    });

    $('#btnDesktop, #btnWeb').css({
        "color": "#007bff",
        "background": "transparent",
        "transition": "all 0.3s ease",
        "border-radius": "50px",
        "border": "2px solid #007bff"
    });
});

$('#btnDesktop').on('click', function () {
    // $('.display_all_projects').css('display', 'none');
    $('.display_all_projects').hide();

    // $('.display_desktop_projects').css('display', 'flex');
    $('.display_desktop_projects').show();

    $('#btnDesktop').css({
        "color": "#fff",
        "background": "#007bff",
        "transition": "all 0.3s ease"
    });

    $('#btnAllProjects, #btnWeb').css({
        "color": "#007bff",
        "background": "transparent",
        "transition": "all 0.3s ease",
        "border-radius": "50px",
        "border": "2px solid #007bff"
    });
});

$('#btnWeb').on('click', function () {
    // $('.display_all_projects').css('display', 'none');
    $('.display_all_projects').hide();

    // $('.display_desktop_projects').css('display', 'none');
    $('.display_desktop_projects').hide();

    $('#btnWeb').css({
        "color": "#fff",
        "background": "#007bff",
        "transition": "all 0.3s ease"
    });

    $('#btnAllProjects, #btnDesktop').css({
        "color": "#007bff",
        "background": "transparent",
        "transition": "all 0.3s ease",
        "border-radius": "50px",
        "border": "2px solid #007bff"
    });
});


/* ------------------------ Assignments Page -------------------- */
for (let i = 1; i < 19; i++) {
    $('#btnAssignment-' + i).on('click', function () {
        let pressedBtnID = this.id;
        switch (pressedBtnID) {
            case "btnAssignment-1":
                $("#btnAssignment-1>a").attr({
                    "target": "_blank",
                    "href": "../assignments/CSS/Basics/case_01/index.html"
                });
                break;

            case "btnAssignment-2":
                $("#btnAssignment-2>a").attr({
                    "target": "_blank",
                    "href": "../assignments/CSS/Basics/case_02/index.html"
                });
                break;

            case "btnAssignment-3":
                $("#btnAssignment-3>a").attr({
                    "target": "_blank",
                    "href": "../assignments/CSS/Basics/case_03/index.html"
                });
                break;

            case "btnAssignment-4":
                $("#btnAssignment-4>a").attr({
                    "target": "_blank",
                    "href": "../assignments/CSS/Basics/case_04/index.html"
                });
                break;

            case "btnAssignment-5":
                $("#btnAssignment-5>a").attr({
                    "target": "_blank",
                    "href": "../assignments/CSS/Basics/case_05/index.html"
                });
                break;

            case "btnAssignment-6":
                $("#btnAssignment-6>a").attr({
                    "target": "_blank",
                    "href": "../assignments/CSS/Basics/case_06/index.html"
                });
                break;

            case "btnAssignment-7":
                $("#btnAssignment-7>a").attr({
                    "target": "_blank",
                    "href": "../assignments/CSS/Transitions/case_01/index.html"
                });
                break;

            case "btnAssignment-8":
                $("#btnAssignment-8>a").attr({
                    "target": "_blank",
                    "href": "../assignments/CSS/Transitions/case_02/index.html"
                });
                break;

            case "btnAssignment-9":
                $("#btnAssignment-9>a").attr({
                    "target": "_blank",
                    "href": "../assignments/CSS/Animations/case_01/index.html"
                });
                break;

            case "btnAssignment-10":
                $("#btnAssignment-10>a").attr({
                    "target": "_blank",
                    "href": "../assignments/CSS/Animations/case_02/index.html"
                });
                break;

            case "btnAssignment-11":
                $("#btnAssignment-11>a").attr({
                    "target": "_blank",
                    "href": "../assignments/CSS/Animations/case_03/index.html"
                });
                break;

            case "btnAssignment-12":
                $("#btnAssignment-12>a").attr({
                    "target": "_blank",
                    "href": "../assignments/CSS/Animations/case_04/index.html"
                });
                break;

            case "btnAssignment-13":
                $("#btnAssignment-13>a").attr({
                    "target": "_blank",
                    "href": "../assignments/CSS/Frameworks/POS/index.html"
                });
                break;

            case "btnAssignment-14":
                $("#btnAssignment-14>a").attr({
                    "target": "_blank",
                    "href": "../assignments/JS/Calculator/index.html"
                });
                break;

            case "btnAssignment-15":
                $("#btnAssignment-15>a").attr({
                    "target": "_blank",
                    "href": "../assignments/JS/POS/index.html"
                });
                break;

            case "btnAssignment-16":
                $("#btnAssignment-16>a").attr({
                    "target": "_blank",
                    "href": "../assignments/JS/Que/index.html"
                });
                break;

            case "btnAssignment-17":
                $("#btnAssignment-17>a").attr({
                    "target": "_blank",
                    "href": "../assignments/JS/Knight/index.html"
                });
                break;

            case "btnAssignment-18":
                $("#btnAssignment-18>a").attr({
                    "target": "_blank",
                    "href": "../assignments/JS/Game/index.html"
                });
                break;

            default:
                break;
        }
    });
}

$('#btnAllAssignments').on('click', function () {
    // $('.display_desktop_projects').css('display', 'none');
    $('.display_css_assignments').hide();
    $('.display_js_assignments').hide();

    // $('.display_all_projects').css('display', 'flex');
    $('.display_all_assignments').show();

    $('#btnAllAssignments').css({
        "color": "#fff",
        "background": "#007bff",
        "transition": "all 0.3s ease"
    });

    $('#btnCSS, #btnJS').css({
        "color": "#007bff",
        "background": "transparent",
        "transition": "all 0.3s ease",
        "border-radius": "50px",
        "border": "2px solid #007bff"
    });
});

$('#btnCSS').on('click', function () {
    // $('.display_all_projects').css('display', 'none');
    $('.display_all_assignments').hide();
    $('.display_js_assignments').hide();

    // $('.display_desktop_projects').css('display', 'flex');
    $('.display_css_assignments').show();

    $('#btnCSS').css({
        "color": "#fff",
        "background": "#007bff",
        "transition": "all 0.3s ease"
    });

    $('#btnAllAssignments, #btnJS').css({
        "color": "#007bff",
        "background": "transparent",
        "transition": "all 0.3s ease",
        "border-radius": "50px",
        "border": "2px solid #007bff"
    });
});

$('#btnJS').on('click', function () {
    // $('.display_all_projects').css('display', 'none');
    $('.display_all_assignments').hide();
    $('.display_css_assignments').hide();

    // $('.display_desktop_projects').css('display', 'none');
    $('.display_js_assignments').show();

    $('#btnJS').css({
        "color": "#fff",
        "background": "#007bff",
        "transition": "all 0.3s ease"
    });

    $('#btnAllAssignments, #btnCSS').css({
        "color": "#007bff",
        "background": "transparent",
        "transition": "all 0.3s ease",
        "border-radius": "50px",
        "border": "2px solid #007bff"
    });

    $('#assignments_page').css('height', '722px');
});