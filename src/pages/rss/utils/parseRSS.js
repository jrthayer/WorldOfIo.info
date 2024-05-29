import { default as showsImportedData } from "data/showsList";
import { default as showsPlaylistData } from "data/playlists";

console.log(generateShowsMap(showsImportedData, showsPlaylistData));

export function parseRss(rssData, showsContainer) {
    //Strip data from default rss feed and create a clean dataObject
    rssData = convertRssData(rssData);

    // Go through each show to see if their title is contained in the session title
    // if it is add it to the show and the corresponding season
    // else check if any of the seasons has a title that is contained in the session transitionDelay:
    //==============
    //NOTE: This is needed because some show seasons have their own unique name but are just a continuation of the show
    rssData.forEach((sessionData, index) => {
        let sessionAdded = false;
        sessionData.index = index;

        if (sessionAdded === false) {
            sessionAdded = addCoreShows(showsContainer, sessionData);

            if (sessionAdded) {
                if (index < 262) {
                    addSessionData(showsContainer.get("Phase 2"), sessionData);
                } else {
                    addSessionData(showsContainer.get("Phase 3"), sessionData);
                }
            }
        }
    });
    console.log(showsContainer);
    console.log(rssData);
}

function addCoreShows(showsContainer, sessionData) {
    for (let [key, value] of showsContainer) {
        let show = value;
        let sessionTitle = sessionData.title.toLowerCase();
        if (sessionTitle.includes(show.title.toLowerCase())) {
            // add to show
            addSessionData(show, sessionData);

            // add to parent show if it has one
            if (Object.hasOwn(show, "parentShow")) {
                addSessionData(
                    showsContainer.get(show.parentShow),
                    sessionData
                );
            }

            // add to seasons if it has seasons
            if (Object.hasOwn(show, "seasons")) {
                let seasons = show.seasons;
                // Starts from the end of the seasons because season 1 usually has an empty string as
                // its matching string and would therefore match every session.
                // ========
                // Note for generally unused js feature
                // js label
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
                // ===============
                seasonLoop: for (let x = seasons.length - 1; x >= 0; x--) {
                    if (Object.hasOwn(seasons[x], "seasonStringMatch")) {
                        let season = seasons[x];
                        let matchingStrings = season.seasonStringMatch;
                        for (let y = 0; y < matchingStrings.length; y++) {
                            if (
                                sessionTitle.includes(
                                    matchingStrings[y].toLowerCase()
                                )
                            ) {
                                addSessionData(season, sessionData);

                                break seasonLoop;
                            }
                        }
                    }
                }
            }
            return true;
        }
    }
    return false;
}

function addSessionData(show, data) {
    show.numberOfEpisodes++;
    show.duration += data.duration;

    if (typeof show.startDate === "undefined") {
        show.startDate = data.airDate;
    }
    show.endDate = data.airDate;
    show.episodeIndexes.push(data.index);
}

export function convertRssData(rssData) {
    let duplicateKey = 0;
    let convertedData = rssData.map((singleSession) => {
        if (singleSession.title.includes("Curios Season 3 Session 1")) {
            if (duplicateKey === 1) {
                singleSession.title = "Curious Curios Season 3 Session 2 MP3";
            }
            duplicateKey++;
        }

        //strip data
        const singleSessionData = stripData(singleSession);

        //return converted show object
        return singleSessionData;
    });

    return convertedData;
}

// =============================================================
// Create Data Structure to hold shows
// =============================================================
export function generateShowsMap(showsData, playlistData) {
    let showsMap = new Map();

    showsData.forEach((singleShowData) => {
        // Add playlist to show if it exists
        if (playlistData.get(singleShowData.title) !== undefined) {
            singleShowData.playlist = playlistData.get(singleShowData.title);
        }

        let showObject = generateShowObject(singleShowData);

        showsMap.set(showObject.title, showObject);
    });

    return showsMap;
}

function generateShowObject(showData) {
    // if concluded isn't defined add and set to true
    showData.concluded = showData.concluded || true;

    //  Generate season playlistObjects
    if (Object.hasOwn(showData, "seasonMatchStrings")) {
        let seasons = [];
        for (let x = 0; x < showData.seasonMatchStrings.length; x++) {
            let seasonMatchData = showData.seasonMatchStrings[x];
            // Special case where there is a show inside a show instead of just a subset playlist(season of a show)
            if (typeof seasonMatchData === "object") {
                seasons.push(seasonMatchData);
            } else {
                let seasonData = {};

                //Set concluded state based on position of season
                if (x === showData.seasonMatchStrings.length - 1) {
                    seasonData.concluded = showData.concluded;
                } else {
                    seasonData.concluded = true;
                }

                // Special case where there is a show inside a show instead of just a subset playlist(season of a show)

                if (typeof seasonMatchData === "string") {
                    seasonData.seasonStringMatch = [seasonMatchData];
                } else {
                    seasonData.seasonStringMatch = seasonMatchData;
                }
                seasons.push(generatePlaylistObject(seasonData));
            }
        }

        showData.seasons = seasons;
        delete showData.seasonMatchStrings;
    }

    return generatePlaylistObject(showData);
}

function generatePlaylistObject(showData) {
    let showObject = {
        duration: 0,
        numberOfEpisodes: 0,
        endDate: new Date(),
        episodeIndexes: [],
        ...showData,
    };

    return showObject;
}

// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+

//OLD RSS CODE
import { default as shows } from "data/shows";
/**
 * The function converts an array of episodes/sessions objects, fixes duplicate session names, strips data, adds to
 * shows, and returns the converted array of episodes/sessions and an array of the shows.
 * @param rawArray - an array of objects representing sessions, with each object containing various
 * properties such as title, description, date, and audio file information.
 * @returns An array containing two elements: the converted episodes array and the array of shows.
 */
export function convertArray(rawArray) {
    rawArray.reverse();
    let duplicateKey = 0;

    const convertedArray = rawArray.map((singleShow, index) => {
        //Duplicate session name fix
        if (singleShow.title.includes("Curios Season 3 Session 1")) {
            if (duplicateKey === 1) {
                singleShow.title = "Curious Curios Season 3 Session 2 MP3";
            }
            duplicateKey++;
        }

        //strip data
        const showData = stripData(singleShow);

        //add to shows
        addToShows(shows, showData, index);

        //return converted show object
        return showData;
    });

    //Reverse seasons to be first -> last
    //Is last -> first by default because season 1 of shows don't have anything to indicate which season they are from in their title
    shows.forEach((show) => {
        show.playlists = show.playlists.reverse();
        show.playlistRegex = show.playlistRegex.reverse();
    });

    return [convertedArray, shows];
}

/**
 * The function takes in raw data and returns a stripped down version with specific properties.
 * @param rawData - an object containing information about a TV show episode, including its title,
 * creation date, length, and URL.
 * @returns The function `stripData` is returning an object with properties `title`, `airDate`,
 * `duration`, `link`, `watchedState`, and `currentShowState`. The values of these properties are
 * extracted from the `rawData` object passed as a parameter to the function. The `airDate` property is
 * calculated by subtracting one day (in milliseconds) from the `created`
 */
function stripData(rawData) {
    //Generally the mp3 is uploaded the day AFTER it originally aired
    const epochDay = 24 * 60 * 60 * 1000;

    const showData = {
        title: rawData.title,
        airDate: new Date(rawData.created - epochDay),
        duration: Number(rawData.enclosures[0].length),
        link: rawData.enclosures[0].url,
    };

    return showData;
}

/**
 * The function adds a session to a show or multiple shows based on a matching title.
 * @param showAdded - a boolean indicating whether the session has already been added to a show
 * @param shows - an array of objects representing all defined shows
 * @param sessionData - an object containing information about a specific episode or session, including
 * its index and title
 * @param matchTitle - The title to match against the sessionData title to determine if a show should
 * be added.
 * @param showsToAddTo - An optional parameter that can be either an object representing a single show
 * or an array of objects representing multiple shows. These are the shows that the session data will
 * be added to.
 * @returns true if the session was added to a show, false otherwise.
 */
function addSession(showAdded, shows, sessionData, matchTitle, showsToAddTo) {
    const index = sessionData.index;
    const title = sessionData.title;

    function findShowAndAdd(shows, sessionData, showToAddTo) {
        //prettier-ignore
        const show = shows.find((singleShow) => singleShow.title.toLowerCase() === showToAddTo.title.toLowerCase());
        if (showToAddTo.season) {
            return updateShow(show, index, sessionData, showToAddTo.season);
        } else {
            return updateShow(show, index, sessionData);
        }
    }

    if (!showAdded) {
        if (title.toLowerCase().includes(matchTitle.toLowerCase())) {
            if (Array.isArray(showsToAddTo)) {
                showsToAddTo.forEach((show) => {
                    showAdded = findShowAndAdd(shows, sessionData, show);
                });
            } else {
                showAdded = findShowAndAdd(shows, sessionData, showsToAddTo);
            }
        }
    }

    return showAdded;
}

/**
 * The function adds a session to a specific show.
 * @param shows - an array of objects representing different shows/playlists
 * @param sessionData - An object containing information about a session, including its title and
 * index.
 * @param sessionIndex - The index of the session being added to the shows.
 */
function addToShows(shows, sessionData, sessionIndex) {
    const title = sessionData.title;
    let showFound = false;
    let showsToAddTo = [];
    let matchString = "";
    sessionData.index = sessionIndex;

    //check for podcasts
    //=============================================
    matchString = "Podcast";
    showsToAddTo = { title: "Podcasts" };
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);
    if (showFound) return;

    //=============================================
    //check for crossovers
    //=============================================
    // note: needs to be before the general show check so it doesn't duplicate
    matchString = "Arcane Academy x Goblins";
    showsToAddTo = [
        { title: "Arcane Academy", season: "Astral Academy" },
        { title: "Goblins of IO" },
    ];
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    matchString = "Deadbeats x Pipe Dreamers";
    showsToAddTo = [
        { title: "Deadbeats", season: "Season 2" },
        { title: "Pipe Dreamers", season: "Season 2" },
    ];
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    //=============================================
    //check for shows
    //=============================================
    if (showFound !== true) {
        shows.forEach((show) => {
            if (title.toLowerCase().includes(show.title.toLowerCase())) {
                showFound = updateShow(show, sessionIndex, sessionData);
            }
        });
    }

    //=============================================
    //check for new name seasons
    //=============================================
    matchString = "Astral Academy";
    showsToAddTo = [{ title: "Arcane Academy", season: "Astral Academy" }];
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    //check all king
    if (showFound !== true) {
        const allKingSeasons = ["Under IO", "Radiance", "Mainframe of Atlas"];
        allKingSeasons.some((seasonTitle) => {
            if (title.includes(seasonTitle)) {
                let allKing = shows.find((show) => show.title === "All King");
                showFound = updateShow(allKing, sessionIndex, sessionData);
            }
        });
    }

    //check hunters
    //=============================================
    matchString = "Spire of Euclid";
    showsToAddTo = [{ title: "Hunters of IO", season: "Spire of Euclid" }];
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    //check asmodia
    //=============================================
    matchString = "Shadow of Asmodia";
    showsToAddTo = [{ title: "Eye of Asmodia", season: "Shadow of Asmodia" }];
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    //=============================================
    //check for special events
    //=============================================
    matchString = "Oswin";
    showsToAddTo = { title: "Goblins of IO" };
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    matchString = "Weyzi";
    showsToAddTo = { title: "Miss Demeanor", season: "S3" };
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    matchString = "Chamber of the Eight";
    showsToAddTo = [
        { title: "Miss Demeanor", season: "S3" },
        { title: "Goblins of IO" },
        { title: "Phase 2 Major Events", season: "Chamber of the Eight" },
    ];
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    matchString = "Kaasma Khara Final Battle";
    showsToAddTo = [
        { title: "Miss Demeanor", season: "S2" },
        { title: "Goblins of IO" },
        { title: "Arcane Academy", season: "Astral Academy" },
        { title: "Phase 2 Major Events", season: "Kaasma Khara Final Battle" },
    ];
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    matchString = "The Shadow Invasion";
    showsToAddTo = [
        { title: "Miss Demeanor", season: "S3" },
        { title: "Goblins of IO" },
        { title: "Bronn" },
        { title: "Phase 2 Major Events", season: "The Shadow Invasion" },
    ];
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    //=============================================
    //check for typos
    //=============================================
    matchString = "Into the Shadows Breach";
    showsToAddTo = { title: "Into the Shadow's Breach" };
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    matchString = "Dawn of Ganyemde";
    showsToAddTo = { title: "Dawn of Ganymede" };
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    matchString = "Curious Curious";
    showsToAddTo = { title: "Curious Curios" };
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    matchString = "March of Faewunder";
    showsToAddTo = { title: "March on Faewunder" };
    //prettier-ignore
    showFound = addSession(showFound, shows, sessionData, matchString, showsToAddTo);

    //=============================================
    //everything else
    //=============================================
    if (showFound !== true) {
        let show = shows.find((show) => show.title === "Misc Sessions");
        updateShow(show, sessionIndex, sessionData);
        return;
    }

    //Add To Phase 2 or Phase 3 master playlist
    //=============================================
    if (showFound === true) {
        if (sessionIndex < 262) {
            let show = shows.find((playlist) => playlist.title === "Phase 2");
            updateShow(show, sessionIndex, sessionData);
        } else {
            let show = shows.find((playlist) => playlist.title === "Phase 3");
            updateShow(show, sessionIndex, sessionData);
        }
    }
}

/**
 * The function updates a show's playlist with session data if the session title matches the playlist
 * regex.
 * @param show - an object representing a show, which contains information about the show's playlists
 * and sessions.
 * @param sessionIndex - The index of the session being updated in the show's list of sessions.
 * @param sessionData - an object containing information about a session, such as its title,
 * description, and speakers.
 * @param [title] - The title of the session data being passed in. If a title is not explicitly
 * provided as an argument, the function will default to using the title property of the sessionData
 * object.
 * @returns a boolean value - `true` if the `playlistIndex` is not equal to -1, indicating that the
 * `title` matches the `show.playlistRegex` and the session data has been added to the show and
 * playlist, and `false` if the `playlistIndex` is equal to -1, indicating that the `title` does not
 * match the `show.playlistRegex`
 */
function updateShow(
    show,
    sessionIndex,
    sessionData,
    title = sessionData.title
) {
    const playlistIndex = determinePlaylistIndex(show.playlistRegex, title);

    if (playlistIndex !== -1) {
        addSessionDataToShow(show, sessionData);
        const playlist = show.playlists[playlistIndex];
        addSessionDataToShow(playlist, sessionData);
        playlist.sessions.push(sessionIndex);
        return true;
    } else {
        return false;
    }
}

/**
 * The function adds session data to a show object.
 * @param show - an object representing a show, with properties such as numberOfEpisodes, duration,
 * startDate, and endDate.
 * @param data - The `data` parameter is an object that contains information about a show episode/session,
 * including its duration and air date.
 */
function addSessionDataToShow(show, data) {
    show.numberOfEpisodes++;
    show.duration += data.duration;

    if (typeof show.startDate === "undefined") {
        show.startDate = data.airDate;
    }
    show.endDate = data.airDate;
}

/**
 * The function determines the index of a given title in a nested array of titles using a
 * case-insensitive search.
 * @param array - The array parameter is an array of regular expressions or arrays of regular
 * expressions.
 * @param title - The title of a playlist/season that we want to find the index of in the given array.
 * @returns the index of the first occurrence of the title in the array, or -1 if the title is not
 * found.
 */
function determinePlaylistIndex(array, title) {
    let foundIndex = -1;

    array.some((regex, index) => {
        if (Array.isArray(regex)) {
            const nestedIndex = determinePlaylistIndex(regex, title);

            if (nestedIndex !== -1) {
                foundIndex = index;
                return true;
            }
        } else if (title.toLowerCase().includes(regex.toLowerCase())) {
            foundIndex = index;
            return true;
        }
    });

    return foundIndex;
}
