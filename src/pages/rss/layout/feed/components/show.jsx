import React, { useEffect, useState } from "react";

function stripDate(date) {
    //Date strings stripped from the rss feed were object type by default
    date = new String(date);
    date = date.split(" ");
    date = date[1] + " " + date[2] + ", " + date[3];
    return date;
}

function Show(props) {
    const [data, setData] = useState(props.data);
    const [playlist, setPlaylist] = useState(props.data);
    const [index, setIndex] = useState(-1);

    function updatePlaylist(index) {
        if (index != -1) {
            setPlaylist(data.playlists[index]);
        } else {
            setPlaylist(data);
        }
        setIndex(index);
    }

    function generatePlaylists(data) {
        let playlist = [];
        // prettier-ignore
        playlist.push(<button onClick={() => {updatePlaylist(-1);}}/>);
        // prettier-ignore
        return playlist.concat(data.playlists.map((list, index) => <button onClick={() => {updatePlaylist(index);}}/>));
    }

    function determineSubtitle(data, index) {
        if (data.subTitle) return data.subTitle;

        if (index != -1) {
            return data.subTitle ?? `Season ${index + 1}`;
        } else {
            return "";
        }
    }

    return (
        <div>
            <div>
                <img></img>
                <div>
                    <h2>{playlist.title ?? data.title}</h2>
                    <h4>{`(${determineSubtitle(playlist, index)})`}</h4>
                    <h4>{`Number Of Episodes: ${playlist.numberOfEpisodes}`}</h4>
                    {/* prettier-ignore */}
                    <h4>{`Total Length: ${Math.floor(playlist.duration/(86345154))} hrs`}</h4>
                    {/* prettier-ignore */}
                    <h4>{`${stripDate(playlist.startDate)} - ${playlist.concluded ? stripDate(playlist.endDate) : "Ongoing"}`}</h4>
                </div>
                {data.playlists.length > 1 ? generatePlaylists(data) : null}
            </div>
        </div>
    );
}

Show.defaultProps = {
    data: {
        title: "",
        startDate: "",
        endDate: "",
        numberOfEpisodes: 0,
        duration: 0,
        concluded: true,
        playlistRegex: [],
        playlists: [],
    },
};

export default Show;
