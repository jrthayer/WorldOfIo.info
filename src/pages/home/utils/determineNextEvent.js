/**
 * It takes a string, converts the first letter to uppercase, and then compares it to a list of months.
 * If it finds a match, it returns the number of that month. If it doesn't find a match, it returns an
 * error.
 * @param monthString - The month in string format.
 * @returns the number of the month.
 */
function convertMonthToNumber(monthString) {
    let month = monthString[0].toUpperCase() + monthString.slice(1);
    switch (month) {
        case "January":
            return 1;
        case "Jan":
            return 1;
        case "February":
            return 2;
        case "Feb":
            return 2;
        case "March":
            return 3;
        case "Mar":
            return 3;
        case "April":
            return 4;
        case "Apr":
            return 4;
        case "May":
            return 5;
        case "May":
            return 5;
        case "June":
            return 6;
        case "July":
            return 7;
        case "August":
            return 8;
        case "Aug":
            return 8;
        case "September":
            return 9;
        case "Sept":
            return 9;
        case "October":
            return 10;
        case "Oct":
            return 10;
        case "November":
            return 11;
        case "Nov":
            return 11;
        case "December":
            return 12;
        case "Dec":
            return 12;
        default:
            console.error(`No month was found`);
    }
}

/**
 * It takes a string in the format "Week of Month Day" and returns a Date object.
 * @param stringDate - "Week of January 1"
 * @returns A date object.
 */
function convertStringToDate(stringDate) {
    if (stringDate.includes("Week of")) {
        let date = stringDate.split("Week of ")[1];
        date = date.split(" ");

        let month = convertMonthToNumber(date[0]);
        let day = date[1].replace(/[a-zA-Z]/g, "");
        let curDate = new Date();
        const curYear = curDate.getFullYear();
        // js date expects month to be (0-11) not (1-12)
        return new Date(curYear, month - 1, day);
    } else {
        console.error("Invalid start date given");
        return false;
    }
}

/**
 * It takes a date object as an argument, adds 7 days to it, and returns the new date object.
 * @param startDate - The date that the user has selected.
 * @returns The endDate is being returned.
 */
function determineEndDate(startDate) {
    // Needed to make a copy of the startDate object
    let endDate = new Date(startDate.getTime());
    endDate.setDate(startDate.getDate() + 7);
    return endDate;
}

/**
 * It takes a schedule object and a start date string and returns the next event in the schedule.
 * @param schedule - an array of objects, each object represents a day of the week.
 * @param startDateString - "2019-01-07"
 * @returns An object with the following properties:
 * minutesTill: number
 * name: string
 */
export default function determineNextEvent(schedule, startDateString) {
    const date = new Date();
    const startDate = convertStringToDate(startDateString);

    // startDateString was invalid
    if (startDate === false) {
        console.error("invalid startDate was given");
        return false;
    }

    const endDate = determineEndDate(startDate);

    // check to see if this is an old schedule
    if (date > endDate) {
        console.error("endDate has already passed!");
        return false;
    }

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

    // set found day to monday if current date is before the week starts
    // then determine the number of days between now and the start of the schedule week
    let daysBetween = 0;

    if (date < startDate) {
        foundDay = 0;
        dayMinutes = -1;

        daysBetween = startDate.getTime() - date.getTime();
        daysBetween = Math.floor(daysBetween / (1000 * 3600 * 24));
    }

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
            if (foundDay > 6) break;
        }

        // set curMins to -1 since the first show of the next day is guaranteed to be next show
        dayMinutes = -1;
        daysChecked++;

        if (daysChecked === 6) {
            break;
        }
    }

    // No events were found or end of week reached
    if (daysChecked === 6 || foundDay > 6) {
        console.error("event not found or end of week");
        return false;
    }

    // POTENTIAL TO BE SECONDARY FUNCTION
    // calculate minutes till the event
    let minutesTill = daysBetween * 1440;

    // same day as event
    if (foundDay === curDay) {
        minutesTill += nextEvent.minutes - curMins;
    } else {
        // remainder of minutes in the day
        minutesTill += 1440 - curMins;

        // add and convert days between into minutes
        minutesTill += (foundDay - curDay - 1) * 1440;

        // add minutes on day of show
        minutesTill += nextEvent.minutes;
    }

    return { minutesTill: minutesTill, name: nextEvent.name };
}
