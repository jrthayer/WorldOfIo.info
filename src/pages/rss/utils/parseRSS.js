const epochDay = 24*60*60*1000;
import {default as shows} from "data/shows";


//convertRSS
//takes rss array and converts it to a new master array for the page
//goes through each show and:
//+strips relevant info
//+check and add to shows playlists

//parse show
//  add to playlist


export function convertArray(rawArray){
    rawArray.reverse();
    let duplicateKey = 0;

    const convertedArray = rawArray.map((singleShow, index)=>{
        //Duplicate session name fix
        if(singleShow.title.includes('Curios Season 3 Session 1')){
            if(duplicateKey === 1){
                singleShow.title = 'Curious Curios Season 3 Session 2 MP3';
            }
            duplicateKey++;
        };

        //strip data
        const showData = stripData(singleShow);

        //add to shows
        addToShows(shows, showData, index);

        //return converted show object
        return showData;
    });

    console.log(shows);

    return convertedArray;
}

function stripData(rawData){
    const showData = {
        title: rawData.title,
        airDate: new Date(rawData.created - epochDay),
        duration: Number(rawData.enclosures[0].length),
        link: rawData.enclosures[0].url,
        watchedState: false,
        currentShowState: false
    };

    return showData;
}

function addToShows(shows, sessionData, sessionIndex){
    const title = sessionData.title;
    let showFound = false;

    if(sessionIndex<262){
        let show = shows.find(playlist => playlist.title === "Phase 2");
        updateShow(show, sessionIndex, sessionData);
    }
    else{
        let show = shows.find(playlist => playlist.title === "Phase 3");
        updateShow(show, sessionIndex, sessionData);
    }

    //check for deadbeats x pipe dreamers crossover
    if(showFound!== true){
        if(title.toLowerCase().includes('deadbeats x pipe dreamers')){
            let show = shows.find(playlist => playlist.title === "Deadbeats");
            showFound = updateShow(show, sessionIndex, sessionData, 'Season 2');

            show = shows.find(playlist => playlist.title === "Pipe Dreamers");
            showFound = updateShow(show, sessionIndex, sessionData, 'Season 2');
        }
    }

    //check for OST
    if(showFound!== true){
        if(title.includes('IOverse OST')){
            let podcasts = shows.find(playlist => playlist.title === "IOverse OSTs");
            showFound = updateShow(podcasts, sessionIndex, sessionData);
        }
    }

    //check for podcasts
    if(showFound!== true){
        if(title.includes('Podcast')){
            let podcasts = shows.find(playlist => playlist.title === "Podcasts");
            showFound = updateShow(podcasts, sessionIndex, sessionData);
        }
    }

    //check for curious curious typos
    if(showFound !== true){
        if(title.includes('Curious Curious')){
            let show = shows.find(show=>show.title === "Curious Curios");
            if(title.includes('S2') || title.includes('Season 2')){
                showFound = updateShow(show, sessionIndex, sessionData, "Season 2");
            }
            else if(title.includes('Season 3')){
                showFound = updateShow(show, sessionIndex, sessionData, "Season 3");
            }
        }
    }

    //check for oswin
    if(showFound !== true){
        if(title.includes('Oswin')){
            let show = shows.find(show=>show.title === "Goblins of IO");
            showFound = updateShow(show, sessionIndex, sessionData, "");
        }
    }

    //check for weyzi
    if(showFound !== true){
        if(title.includes('Weyzi')){
            let show = shows.find(show=>show.title === "Miss Demeanor");
            showFound = updateShow(show, sessionIndex, sessionData, "S3");
        }
    }

    //check for chamber
    if(showFound !== true){
        if(title.includes('Chamber of the Eight')){
            let show = shows.find(show=>show.title === "Miss Demeanor");
            showFound = updateShow(show, sessionIndex, sessionData, "S3");

            show = shows.find(show=>show.title === "Goblins of IO");
            showFound = updateShow(show, sessionIndex, sessionData, "");

            show = shows.find(show=>show.title === "Phase 2 Major Events");
            showFound = updateShow(show, sessionIndex, sessionData, "Chamber of the Eight");
        }
    }

    //check for Kaasma Khara Fight
    if(showFound !== true){
        if(title.includes('Kaasma Khara Final Battle')){
            let show = shows.find(show=>show.title === "Miss Demeanor");
            showFound = updateShow(show, sessionIndex, sessionData, "S2");

            show = shows.find(show=>show.title === "Goblins of IO");
            showFound = updateShow(show, sessionIndex, sessionData, "");

            show = shows.find(show=>show.title === "Arcane Academy");
            showFound = updateShow(show, sessionIndex, sessionData, "Astral Academy");

            show = shows.find(show=>show.title === "Phase 2 Major Events");
            showFound = updateShow(show, sessionIndex, sessionData, "Kaasma Khara Final Battle");
        }
    }

    //check for shadow invasion
    if(showFound !== true){
        if(title.includes('The Shadow Invasion')){
            let show = shows.find(show=>show.title === "Phase 2 Major Events");
            showFound = updateShow(show, sessionIndex, sessionData, "The Shadow Invasion");

            show = shows.find(show=>show.title === "Bronn");
            showFound = updateShow(show, sessionIndex, sessionData, "");

            show = shows.find(show=>show.title === "Goblins of IO");
            showFound = updateShow(show, sessionIndex, sessionData, "");

            show = shows.find(show=>show.title === "Miss Demeanor");
            showFound = updateShow(show, sessionIndex, sessionData, "S3");
        }
    }

    //check for shows
    if(showFound !== true){
        shows.forEach((show)=>{
            if(title.toLowerCase().includes(show.title.toLowerCase())){
                showFound = updateShow(show, sessionIndex, sessionData);
            }
        })
    }

    //check arcane academy
    if(showFound !== true){
        if(title.includes('Astral Academy')){
            let astralAcademy = shows.find(show=>show.title === "Arcane Academy");
            showFound = updateShow(astralAcademy, sessionIndex, sessionData);
        }
    }

    //check all king
    if(showFound !== true){
        const allKingSeasons = ["Under IO", "Radiance", "Mainframe of Atlas"];
        allKingSeasons.some((seasonTitle)=>{
            if(title.includes(seasonTitle)){
                let allKing = shows.find(show => show.title === "All King");
                return updateShow(allKing, sessionIndex, sessionData);
            }else{
                return false;
            }
        })
    }

    //check hunters
    if(showFound !== true){
        if(title.includes('Spire of Euclid')){
            let astralAcademy = shows.find(show=>show.title === "Hunters of IO");
            showFound = updateShow(astralAcademy, sessionIndex, sessionData);
        }
    }

    //check asmodia
    if(showFound !== true){
        if(title.includes('Shadow of Asmodia')){
            let asmodia = shows.find(show=>show.title === "Eye of Asmodia");
            showFound = updateShow(asmodia, sessionIndex, sessionData);
        }
    }
}

function updateShow(show, sessionIndex, sessionData, title = sessionData.title){
    const playlistIndex = determinePlaylistIndex(show.playlistRegex, title);

    if(playlistIndex !== -1){
        addSession(show, sessionData);
        const playlist = show.playlists[playlistIndex];
        addSession(playlist, sessionData);
        playlist.sessions.push(sessionIndex);
        return true;
    }
    else{
        return false;
    }
}

function addSession(show, data){
    show.numberOfEpisodes++;
    show.duration += data.duration;

    if (typeof show.startDate === 'undefined') {
        show.startDate = data.airDate;
    }
    show.endDate = data.airDate;
}


function determinePlaylistIndex(array, title){
    let foundIndex = -1;

    array.some((regex, index)=>{
        if(Array.isArray(regex)){
            const nestedIndex = determinePlaylistIndex(regex, title);

            if(nestedIndex !== -1){
                foundIndex = index;
                return true;
            }
        }
        else if(title.toLowerCase().includes(regex.toLowerCase())){
            foundIndex = index;
            return true;
        }
    })

    return foundIndex;
}