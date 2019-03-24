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

function compareImgs(imgEId) {
    if (localStorage["eID1"] === localStorage["eID2"]) {
        swal("You can't select the same element twice")
        document.getElementById(localStorage["eID1"]).src = "img/blankbox.png";
        document.getElementById(localStorage["eID2"]).src = "img/blankbox.png";
        localStorage.setItem("eID1", null);
        localStorage.setItem("eID2", null);
    }
    else if (localStorage["compImg1"] !== undefined && localStorage["compImg2"] !== undefined && localStorage["clickNum"] === "2") {
        
        if (localStorage["compImg1"] === localStorage["compImg2"]) {
            swal({
                title: "Wooooot!",
                text: "You have a match!",
                icon: "success",
            });
            localStorage.setItem("compImg1", null);
            localStorage.setItem("compImg2", null);
            localStorage.setItem("eID1", null);
            localStorage.setItem("eID2", null);
        }
        else {
            swal({
                title: "Booooo!",
                text: "You don't have a match!",
                icon: "error",
            });
            localStorage.setItem("compImg1", null);
            localStorage.setItem("compImg2", null);
            document.getElementById(localStorage["eID1"]).src = "img/blankbox.png";
            document.getElementById(localStorage["eID2"]).src = "img/blankbox.png";
            localStorage.setItem("eID1", null);
            localStorage.setItem("eID2", null);
        }
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

function clearCache() {
    window.localStorage.clear();
}