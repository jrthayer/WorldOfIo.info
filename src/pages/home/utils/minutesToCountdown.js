export default function convertToString(minutes) {
    let curSec = new Date().getSeconds();
    let hours = Math.floor(minutes / 60);
    let min = minutes - hours * 60;
    min = min - 1;
    let sec = 59 - curSec;

    if (min == -1) {
        if (hours !== 0) {
            hours = hours - 1;
            min = 59;
            sec = 59 - curSec;
        } else {
            min = 0;
            sec = 0;
        }
    }

    //create display string
    let display = "";
    if (hours === 0) {
        if (min === 0) {
            display = sec + "s";
        } else {
            if (sec < 10) sec = "0" + sec;

            display = min + ":" + sec;
        }
    } else {
        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;

        display = hours + ":" + min + ":" + sec;
    }
    return display;
}
