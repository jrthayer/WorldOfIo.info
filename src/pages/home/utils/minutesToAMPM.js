//Info: Converts minutes into am/pm format
//------------
//Parameters:
//  +minutes = int representing minutes
//Return:
//  +converts minutes to am/pm
export default function convertToTime(minutes) {
    let hours = Math.floor(minutes / 60);
    console.log(`The hours = ${hours}`);
    let min = minutes - hours * 60;

    if (min < 10) {
        min = "0" + min;
    }

    let ampm = "am";
    if (hours > 12) {
        ampm = "pm";

        if (hours === 24) {
            ampm = "am";
        }

        hours = hours - 12;
    } else if (hours == 12) {
        ampm = "pm";
    }

    if (hours == 0) {
        hours = 12;
    }

    let time = "";
    if (min == "00") {
        time = hours + " " + ampm;
    } else {
        time = hours + ":" + min + " " + ampm;
    }

    return time;
}
