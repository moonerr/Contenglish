
var playerId;//could be one of p1, p2, p3, p4
var voteId;

// choose player
function displayData(elem) {

    if (ishiden("step2")) {
        refresh();
        playerId = $(elem).attr("id");
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

    if (isshown("vote")) {
        voteId = $(elem).attr("id");
        hide("pointer");
        hide("callforvoting");
        var elemId = document.getElementById(voteId).lastElementChild.id;
        show(elemId);
        show("v1");
        show("v2");
        show("v3");
        show("win");
        show("guess");
        show("know");
    }
    
    
}

//get the number
//var currentId = parseInt(playerId.slice(1));
var currentId = parseInt(String(playerId).charAt(1));// number 1,2,3,4

var turnlist = ["audio/1.mp3", "audio/2.mp3", "audio/3.mp3", "audio/4.mp3"];
var playerlist = ["player 1", "player 2", "player 3", "player 4"];
var openingList = ["o1", "o2", "o3", "o4"];
var endingList = ["e1", "e2", "e3", "e4"];
var voiceList = ["voice1", "voice2", "voice3", "voice4"];



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
    document.getElementById("playernum").firstChild.textContent = str;
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
    var status = document.getElementById(idname).style.display;
    if (status == "none") {
        return true;
    }
    else {
        return false;
    }
}
//return true when is shown
function isshown(idname) {
    var status = document.getElementById(idname).style.display;
    if (status == "block") {
        return true;
    }
    else {
        return false;
    }
}
//excute after overlay display for 1s
function roundstart() {
    hide("overlay");
    //show the timer
    show("timer");
    show("operations");
    show("turns");
}



function timer(seconds) {

    // timer 
    var timeLeft = seconds;

    //plyer voice begin
    opening(); 

    var turnsTimer = setInterval(counting, 1000);
   // var timerloop = setInterval(timer(seconds), seconds * 1000);
    // for counting down function to set the interval
    function counting() {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        var voiceDutration = document.getElementById(voiceId).duration;

       // document.getElementById("o1").innerHTML = openingId;
        if (timeLeft <= 0 || timeLeft <= seconds - voiceDutration ) {
            //clearInterval(turnsTimer);

            playsound('audio/ding.mp3');
            ending();
            turnId++;
            timeLeft = seconds;
            setTimeout(turnsTimer, 1000);
            openingId = openingList[turnId - 1];
            endingId = endingList[turnId - 1];
            voiceId = voiceList[turnId - 1];
            setTimeout(opening, 1000);
            //opening();
            
        } 

        if (isshown('e4')) {
            clearInterval(turnsTimer);
            setTimeout(show("vote"), 5000);
        }
    }

}



//execute when player click 'Go'
function start() {

    //hide the tutorial
    hide("tutorial");

    //show the round number
    show("overlay");
    // show the game processor   
    window.setTimeout(roundstart, 1000);

    timer(31);
    
    
}

//document.getElementById("o1").innerHTML = currentId;
//console.log(typeof undeclaredVariable);
//document.getElementById("o1").innerHTML = typeof currentId;
var turnId = 1;//number 1,2,3,4
var openingId = openingList[turnId - 1];
var endingId = endingList[turnId - 1];
var voiceId = voiceList[turnId - 1];
/*
var openingId = "o" + turnId.toString();
var voiceId = "voice" + turnId.toString();
var endingId = "e" + turnId.toString();
*/


function opening() {

    // show opening
    show(openingId);
    show(voiceId);
    //play player voice
    //playsound(turnlist[number]);
    playAudio(voiceId);
}

function ending() {
    show(endingId);
}


var playing = false;

$(voiceId).on('playing', function () {
    playing = true;
})

$(voiceId).on('ended', function () {
    playing = false;
})


var voice = document.getElementById(voiceId);
voice.onended = function () {
    show(endingId);
};


//for play any audio file from resources
function playsound(filename) {
    var voice = new Audio(filename);
    voice.play();
}

//for playing any linked audio file in HTML
function playAudio(voiceId) {
    document.getElementById(voiceId).play();
}

// pause voice function
function pausevoice(aud) {
    aud.pause();
    alert("")
}

function suspect() {
    playsound('audio/ohhh.mp3');
}