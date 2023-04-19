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
    console.log(shows);
    const convertedArray = rawArray.map((singleShow)=>{
        //strip data
        const showData = stripData(singleShow);

        //add to shows
        addToShows(shows, showData);

        //return converted show object
        return showData;
    });

    console.log(shows);
    console.log(convertedArray);
    //reverse array direction since the default rss order is newest to oldest.
    return convertedArray.reverse();
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

function addToShows(shows, sessionData){
    const title = sessionData.title;

    shows.forEach((show, index, showArray)=>{
        if(title.includes(show.title)){
            showArray[index].numberOfEpisodes++;
            console.log(`${shows[index].duration} -- ${sessionData.duration}`)
            showArray[index].duration += sessionData.duration;
            showArray[index].endDate = sessionData.airDate;
            if (typeof showArray[index].startDate === 'undefined') {
                showArray[index].startDate = sessionData.airDate;
            }


            // add to playlist
            // determine season 
            // add to season
        }
    })

    //if playlist wasn't found check arcane academy

    //if playlist still isn't found check all king
}