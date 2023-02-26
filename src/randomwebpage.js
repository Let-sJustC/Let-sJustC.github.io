function randomnumber(){
    min = 10;
    max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choosepage(){
    if(randomnumber() % 2 == 0){
        window.location.href = "success.html"
    }
    else{
        window.location.href = "failure.html"
    }
}