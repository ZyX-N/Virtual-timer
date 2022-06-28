function sec(){
    date = new Date();
    hrsTime = date.getHours();
    minTime = date.getMinutes();
    secTime = date.getSeconds();

    hRotation = hrsTime*30 + minTime/2
    mRotation = minTime*6
    sRotation = secTime*6

    hour.style.transform = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotation}deg)`
    second.style.transform = `rotate(${sRotation}deg)`
}

setInterval(sec,1000);