function getTime(){
    var currenttime = moment().format('MMM Do, YYYY, HH:mm a');
    $("#currentDay").html(currenttime);
        setTimeout(getTime, 1000);
}

$(document).ready(function() {
    getTime();

    var getHour = moment().format("HH");

    $(".saveBtn").click(function (event) {
        event.preventDefault();     
        var id = $(this).parent().attr("id");
        var note = $(this).siblings(".description").val();
        localStorage.setItem(id, note);
    });

    // $("#TA7").val(localStorage.getItem("07"));
    
    $(".time-block").each(function () {
        var idp = $(this).attr("id");
        var idc = $(this).children("textarea").attr("id");
        auxGet = localStorage.getItem(idp)
        aux = '#'+idc+'';
        $(aux).val(auxGet);
    });
    

    $(".time-block").each(function () {
        var hour = $(this).attr("id");

        if (getHour == hour) {
          $(this).addClass("present");
        } 
        else if (getHour < hour) {
          $(this).removeClass("present");
          $(this).addClass("future");
        } 
        else if (getHour > hour) {
          $(this).removeClass("future");
          $(this).addClass("past");
        }
    });

});



    