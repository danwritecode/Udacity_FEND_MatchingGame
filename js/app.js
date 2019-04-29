function shuffleImgs() {
    imgs = ["img/003-compass.png", "img/003-compass.png", "img/013-airplane.png", "img/013-airplane.png",
            "img/015-mountain.png", "img/015-mountain.png", "img/022-steering-wheel.png", "img/022-steering-wheel.png",
            "img/035-barbecue.png", "img/035-barbecue.png", "img/037-drink.png", "img/037-drink.png", "img/039-hot-air-balloon.png",
            "img/039-hot-air-balloon.png", "img/040-ship.png", "img/040-ship.png"];
    imgsShuffled = shuffle(imgs);
    localStorage["img1"] = imgsShuffled[0];
    localStorage["img2"] = imgsShuffled[1];
    localStorage["img3"] = imgsShuffled[2];
    localStorage["img4"] = imgsShuffled[3];
    localStorage["img5"] = imgsShuffled[4];
    localStorage["img6"] = imgsShuffled[5];
    localStorage["img7"] = imgsShuffled[6];
    localStorage["img8"] = imgsShuffled[7];
    localStorage["img9"] = imgsShuffled[8];
    localStorage["img10"] = imgsShuffled[9];
    localStorage["img11"] = imgsShuffled[10];
    localStorage["img12"] = imgsShuffled[11];
    localStorage["img13"] = imgsShuffled[12];
    localStorage["img14"] = imgsShuffled[13];
    localStorage["img15"] = imgsShuffled[14];
    localStorage["img16"] = imgsShuffled[15];
}

function swapImg(imgEId) {
    document.getElementById(imgEId).src = localStorage["img" + imgEId];
    if (localStorage["clickNum"] === "1") {
        localStorage["compImg1"] = localStorage["img" + imgEId]
    }

    if (localStorage["clickNum"] === "2") {
        localStorage["compImg2"] = localStorage["img" + imgEId]
    }
}

var matchCount = 0;
var imgsSelected = [];
var movesMade = 0;

function compareImgs(imgEId) {
    for (var i = 0; i <= 16; i++) {
        if (imgEId === imgsSelected[i]) {
            swal("You already selected this block!");
            return;
        }
    }

    clickTrack(imgEId);
    swapImg(imgEId);

    if (localStorage["clickNum"] === "1") {
        imgsSelected.push(imgEId);
    }


    if (localStorage["eID1"] === localStorage["eID2"]) {
        swal("You can't select the same element twice")
        document.getElementById(localStorage["eID1"]).src = "img/blankbox.png";
        document.getElementById(localStorage["eID2"]).src = "img/blankbox.png";
        localStorage.setItem("eID1", null);
        localStorage.setItem("eID2", null);
    }
    else if (localStorage["compImg1"] !== undefined && localStorage["compImg2"] !== undefined && localStorage["clickNum"] === "2") {
        movesMade++;
        incrimentMovesMade();
        //check if there is a match
        if (localStorage["compImg1"] === localStorage["compImg2"]) {
            localStorage.setItem("compImg1", null);
            localStorage.setItem("compImg2", null);
            localStorage.setItem("eID1", null);
            localStorage.setItem("eID2", null);
            matchCount++;
            imgsSelected.push(imgEId);
        }
        //when there is not a match reset images
        else {
            localStorage.setItem("compImg1", null);
            localStorage.setItem("compImg2", null);
            document.getElementById(localStorage["eID1"]).src = "img/blankbox.png";
            document.getElementById(localStorage["eID2"]).src = "img/blankbox.png";
            localStorage.setItem("eID1", null);
            localStorage.setItem("eID2", null);
            imgsSelected.pop();
        }
    }

    if(matchCount === 8) {
        openModal();
        clearInterval(timer);
        
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


function clickTrack(imgEId) {
    if (localStorage["clickNum"] === null || localStorage["clickNum"] === undefined) {
        localStorage["clickNum"] = 1;
        localStorage["eID1"] = imgEId;
    }

    else if (localStorage["clickNum"] === "1") {
        localStorage["clickNum"] = 2;
        localStorage["eID2"] = imgEId;
    }

    else if (localStorage["clickNum"] === "2") {
        localStorage["clickNum"] = 1;
        localStorage["eID1"] = imgEId;
    }
}

function incrimentMovesMade() {
    //update moves made element
    document.getElementById("movesMade").innerHTML = "Moves Made: " + movesMade;

    //logic for updating the 5 star scoring system based on moves made. 
    starOne = document.getElementById("starOne");
    starTwo = document.getElementById("starTwo");
    starThree = document.getElementById("starThree");
    starFour = document.getElementById("starFour");
    starFive = document.getElementById("starFive");
    //4 stars
    if (movesMade > 16 && movesMade <= 20) {starOne.className = "fa fa-star";}
    //3 stars
    else if (movesMade > 20 && movesMade <= 24) {
        starOne.className = "fa fa-star";
        starTwo.className = "fa fa-star";
    }
    //2 stars
    else if (movesMade > 24 && movesMade <= 28) {
        starOne.className = "fa fa-star";
        starTwo.className = "fa fa-star";
        starThree.className = "fa fa-star";
    }
    //1 star
    else if (movesMade > 28 && movesMade <= 32) {
        starOne.className = "fa fa-star";
        starTwo.className = "fa fa-star";
        starThree.className = "fa fa-star";
        starFour.className = "fa fa-star";
    }
    //0 stars
    else if (movesMade > 32) {
        starOne.className = "fa fa-star";
        starTwo.className = "fa fa-star";
        starThree.className = "fa fa-star";
        starFour.className = "fa fa-star";
        starFive.className = "fa fa-star";
    }
}

function clearCache() {
    window.localStorage.clear();
}


// Get the modal
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//Get the restart button
var restartBttn = document.getElementById('restartGame');

// When the user clicks on the button, open the modal 
function openModal() {
    modal.style.display = "block";
    document.getElementById("finalSeconds").innerHTML = seconds;
    document.getElementById("finalMinutes").innerHTML = minutes;

    starOne = document.getElementById("starOne_Modal");
    starTwo = document.getElementById("starTwo_Modal");
    starThree = document.getElementById("starThree_Modal");
    starFour = document.getElementById("starFour_Modal");
    starFive = document.getElementById("starFive_Modal");

    //4 stars
    if (movesMade > 16 && movesMade <= 20) {starOne.className = "fa fa-star";}
    //3 stars
    else if (movesMade > 20 && movesMade <= 24) {
        starOne.className = "fa fa-star";
        starTwo.className = "fa fa-star";
    }
    //2 stars
    else if (movesMade > 24 && movesMade <= 28) {
        starOne.className = "fa fa-star";
        starTwo.className = "fa fa-star";
        starThree.className = "fa fa-star";
    }
    //1 star
    else if (movesMade > 28 && movesMade <= 32) {
        starOne.className = "fa fa-star";
        starTwo.className = "fa fa-star";
        starThree.className = "fa fa-star";
        starFour.className = "fa fa-star";
    }
    //0 stars
    else if (movesMade > 32) {
        starOne.className = "fa fa-star";
        starTwo.className = "fa fa-star";
        starThree.className = "fa fa-star";
        starFour.className = "fa fa-star";
        starFive.className = "fa fa-star";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

restartBttn.onclick = function() {
    location.reload();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var secTemp = 0;
var secPerm = 0
var seconds = 0;
var minutes = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
var timer = setInterval( function(){
    $("#seconds").html(pad(++secTemp%60));
    $("#minutes").html(pad(parseInt(secTemp/60,10)));
    seconds = pad(++secPerm%60);
    minutes = pad(parseInt(secPerm/60,10));
}, 1000);