// function lSJS 1 - store the result to local storage
function saveToLocal(){
    localStorage.setItem("bsplayerResultArray", JSON.stringify(playerResultArray));
}

// function lSJS 2 - load the previous data from local storage
function loadFromLocal(){
    var storedResult = JSON.parse(localStorage.getItem("bsplayerResultArray"));
    if (storedResult !== null) {
        playerResultArray = storedResult;
    }
}