$(document).ready(function(){
    $("tbody tr:even").css("background", "#F2FAFE");
    $("tbody tr:odd").css("background", "#E7F1FF");
});

function openOverlay(){
    document.getElementById('timetable-overlay').style.display = 'flex';
}

function closeOverlay(){
    document.getElementById('timetable-overlay').style.display = 'none';
}