



function displayData(elem) {

    var playerId = $(elem).attr("id");
    document.getElementById(playerId).style.backgroundColor = "greenyellow";
    if (playerId == "p3") {
        document.getElementById("normal").style.display = "none";
        document.getElementById("spy").style.display = "block";
    }
    else {
        document.getElementById("spy").style.display = "none";
        document.getElementById("normal").style.display = "block";
    }
   
}


