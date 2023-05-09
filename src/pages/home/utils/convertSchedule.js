function checkEdges(day, minutes) {
    // if minutes is less than zero set day to -1
    if (minutes < 0) {
        day -= 1;
        minutes = 1440 + minutes;
    }

    // if minutes is greater than 1440 set day to +1
    if (minutes > 1440) {
        day += 1;
        minutes -= 1440;
    }

    // set to monday
    if (day > 6) {
        day = 0;
    }

    // set to sunday
    if (day < 0) {
        day = 6;
    }

    return { day, minutes };
}

function dayToNumber(day) {
    day = day.toLowerCase();
    let dayNumber = -1;
    switch (day) {
        case "mon":
        case "monday":
            dayNumber = 0;
            break;
        case "tues":
        case "tuesday":
            dayNumber = 1;
            break;
        case "wed":
        case "wednesday":
            dayNumber = 2;
            break;
        case "thurs":
        case "thursday":
            dayNumber = 3;
            break;
        case "fri":
        case "friday":
            dayNumber = 4;
            break;
        case "sat":
        case "saturday":
            dayNumber = 5;
            break;
        case "sun":
        case "sunday":
            dayNumber = 6;
            break;
        default:
            console.error(`ERROR: ${day} is not a valid day!`);
    }
    return dayNumber;
}

function convertToUTC(dayString, hour, minutes, timezone) {
    // convert day string to number
    let day = dayToNumber(dayString);

    // offset is in minutes
    let timezoneOffset = 0;
    // This has to be adjusted with daylight savings
    switch (timezone) {
        case "pst":
            // not daylight
            // timezoneOffset = 480;

            // daylight savings
            timezoneOffset = 420;
            break;
        case "est":
            // not daylight
            // timezoneOffset = 300;

            // daylight savings
            timezoneOffset = 240;
            break;
        default:
            console.error(`ERROR: ${timezone} is not a supported timezone!`);
    }

    minutes = hour * 60 + minutes + timezoneOffset;

    // Checks for edge cases of the week
    ({ day, minutes } = checkEdges(day, minutes));

    // return converted day
    return { day, minutes };
}

function convertToLocal(day, utcMinutes) {
    let date = new Date();
    // * -1 needed due to date implementation
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
    let localOffset = date.getTimezoneOffset() * -1;
    let minutes = utcMinutes + localOffset;

    // Checks for edge cases of the week
    ({ day, minutes } = checkEdges(day, minutes));

    // return converted day
    return { day, minutes };
}

export function convertedSchedule(scheduleArray) {
    let convertedSchedule = [
        { day: "Mon", events: [] },
        { day: "Tues", events: [] },
        { day: "Wed", events: [] },
        { day: "Thurs", events: [] },
        { day: "Fri", events: [] },
        { day: "Sat", events: [] },
        { day: "Sun", events: [] },
    ];

    scheduleArray.forEach((event) => {
        // convert time to utc
        const utcEvent = convertToUTC(
            event.day,
            event.hours,
            event.minutes,
            event.timezone
        );
        // convert to local
        const localEvent = convertToLocal(utcEvent.day, utcEvent.minutes);

        // set event info
        const eventInfo = { name: event.name, minutes: localEvent.minutes };

        // determine which event of the day it is
        let eventIndex = 0;

        //determines event's index of the day it is on
        let dayEvents = convertedSchedule[localEvent.day].events;

        dayEvents.map((element, index) => {
            if (element.minutes < localEvent.minutes) {
                eventIndex = index + 1;
            }
        });

        // add event to the utc schedule
        convertedSchedule[localEvent.day].events.splice(
            eventIndex,
            0,
            eventInfo
        );
    });

    // return utc schedule
    return convertedSchedule;
}
