/**
 * It takes a schedule object, and returns the next event in the schedule, or false if there are no
 * events.
 * @param schedule - an array of objects, each object representing a day of the week.
 * @returns An object with the minutesTill and the event object.
 * @returns false if there are no events
 */
export default function determineNextEvent(schedule) {
    const date = new Date();

    const curMins = date.getMinutes() + date.getHours() * 60;
    let curDay = date.getDay();

    // convert day to mon-sun, instead of sun-sat
    curDay = curDay - 1;
    if (curDay < 0) curDay = 6;

    let foundDay = curDay;
    let dayMinutes = curMins;
    let nextEvent;
    let foundNext = false;
    let daysChecked = 0;

    // find the next event
    while (foundNext === false) {
        // current day being checked
        let events = schedule[foundDay].events;

        // events for current day being checked
        for (let x = 0; x < events.length; x++) {
            let event = events[x];
            // event found
            if (event.minutes > dayMinutes) {
                foundNext = true;
                nextEvent = event;
                break;
            }
        }

        // increment to next day in week, do not increment if found
        if (foundNext === false) {
            foundDay++;
            if (foundDay > 6) foundDay = 0;
        }

        // set curMins to -1 since the first show of the next day is guaranteed to be next show
        dayMinutes = -1;
        daysChecked++;

        if (daysChecked === 6) {
            break;
        }
    }

    // No events were found
    if (daysChecked === 6) {
        return false;
    }

    // POTENTIAL TO BE SECONDARY FUNCTION
    // calculate minutes till the event
    let minutesTill = 0;

    // same day as event
    if (foundDay === curDay) {
        minutesTill = nextEvent.minutes - curMins;
    } else {
        let daysTill = 0;
        // remainder of minutes in the day
        minutesTill += 1440 - curMins;

        // determining days between now and event
        if (curDay > foundDay) {
            daysTill = 6 - curDay + foundDay;
        } else {
            daysTill = foundDay - curDay - 1;
        }

        // add and convert days between into minutes
        minutesTill += daysTill * 1440;

        // add minutes on day of show
        minutesTill += nextEvent.minutes;
    }

    return { minutesTill: minutesTill, ...nextEvent };
}
