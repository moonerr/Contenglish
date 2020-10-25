


// choose player
function displayData(elem) {


    refresh();
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

    hide("step1");
    
    rewrite(elem);

    show("step2");
    
}

// set all the player block to white
function refresh() {
    var list = document.getElementsByClassName("player");
    var i;
    for (i = 0; i < list.length; i++) {
        list[i].style.backgroundColor = "white";
    }
    //document.getElementsByClassName("player")[0].style.backgroundColor = "white";
}
// display chosen number in each playernum class
function rewrite(elem) {
    var str = $(elem).text();
    document.getElementById("playernum").textContent = str;
}
// show an iterm
function show(idname) {
    document.getElementById(idname).style.display = "block";
}
// hide an item
function hide(idname) {
    document.getElementById(idname).style.display = "none";
}
// return true when is hiden
function ishiden(idname) {
    var status = document.getElementById(idname).style.display
    if (status == "none") {
        return true
    }
    else {
        return false
    }
}
//excute after overlay display for 1s
function roundstart() {
    hide("overlay");
    //show the timer
    show("timer");
    show("turns");
}


//execute when player click 'Go'
function start() {
    
    //hide the tutorial
    hide("tutorial");

    //show the round number
    show("overlay");
    // show the game processor   
    window.setTimeout(roundstart, 1000);

    var playerid = document.getElementById(" ");

    //playerturn(turnlist[0]);
    for (var i = 0; i < turnlist.length; i++) {
        playerturn(i);
    }



}



var turnlist = ["audio/1.mp3", "audio/2.mp3", "audio/3.mp3", "audio/4.mp3"];
var playerlist = ["player 1", "player 2", "player 3", "player 4"];
var currentplayer = document.getElementById("playernum").textContent;




function playerturn(number) {



    // timer 
    var timeLeft = 30;
        var turnsTimer = setInterval(counting, 1000);
        // for counting down function to set the interval
        function counting() {
            timeLeft--;
            document.getElementById("timer").textContent = timeLeft;

            /*if (timeLeft == 5) {
                var audio = new Audio('audio/timerding.mp3');
                audio.play();
            }*/

            if (timeLeft <= 0) {
                clearInterval(turnsTimer);

                playsound('audio/ding.mp3');
            }
    }
    //play player1 voice
    playsound(turnlist[number]);

    // show process
    document.getElementsByClassName("turn")[number].innerHTML = playerlist[number] + "finished his/her turn";
}













//for play any audio file
function playsound(filename) {
    var voice = new Audio(filename);
    voice.play();
}

// pause voice function
function pausevoice(aud) {
    aud.pause();
    alert("")
}