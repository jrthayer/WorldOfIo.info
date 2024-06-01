import React, { useEffect, useState } from "react";
import styles from "images/spritesheets/showBanners.module.scss";
import IconBtn from "components/buttons/iconBtn";

function stripDate(date) {
    //Date strings stripped from the rss feed were object type by default
    date = new String(date);
    date = date.split(" ");
    date = date[1] + " " + date[2] + ", " + date[3];
    return date;
}

function generateSpriteReference(title) {
    title = title.toLowerCase();
    title = title.replace(new RegExp("'", "g"), "");
    let underscoreTitle = title
        .split(" ")
        .reduce((sum, word) => sum + "_" + word);
    return "banner-" + underscoreTitle;
}

function Show(props) {
    const [data, setData] = useState(props.data);
    // const [playlist, setPlaylist] = useState(props.data);
    // const [index, setIndex] = useState(-1);

    // function updatePlaylist(index) {
    //     if (index != -1) {
    //         setPlaylist(data.playlists[index]);
    //     } else {
    //         setPlaylist(data);
    //     }
    //     setIndex(index);
    // }

    // function generatePlaylists(data) {
    //     let playlist = [];
    //     // prettier-ignore
    //     playlist.push(<button onClick={() => {updatePlaylist(-1);}}/>);
    //     // prettier-ignore
    //     return playlist.concat(data.playlists.map((list, index) => <button onClick={() => {updatePlaylist(index);}}/>));
    // }

    // function determineSubtitle(data, index) {
    //     if (data.subTitle) return data.subTitle;

    //     if (index != -1) {
    //         return data.subTitle ?? `Season ${index + 1}`;
    //     } else {
    //         return "";
    //     }
    // }

    return (
        <div>
            <div>
                <img></img>

                <div
                    style={{
                        backgroundColor: "rgba(0,0,0,1)",
                        color: "rgb(255,255,255)",
                        marginTop: "20px",

                        display: "flex",
                    }}
                >
                    <div style={{ flex: "1" }}>
                        <div
                            className={`${
                                styles[generateSpriteReference(data.title)]
                            } ${styles.banner}`}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingTop: "20px",
                            flex: "1",
                        }}
                    >
                        <h2>{data.title}</h2>
                        {/* <h4>{`(${determineSubtitle(playlist, index)})`}</h4> */}
                        <h4>{`Number Of Episodes: ${data.numberOfSessions}`}</h4>
                        {/* prettier-ignore */}
                        <h4>{`Total Length: ${Math.floor(data.duration/(86345154))} hrs`}</h4>
                        {/* prettier-ignore */}
                        <h4>{`${stripDate(data.startDate)} - ${data.concluded ? stripDate(data.endDate) : "Ongoing"}`}</h4>
                        <IconBtn
                            link={data.playlist}
                            primary="white"
                            secondary="black"
                            padding=".5rem 1rem"
                            iconBefore={false}
                            iconPadding="0 0 0 .5rem"
                        >
                            YouTube Playlist
                        </IconBtn>
                        <IconBtn
                            link={data.playlist}
                            primary="white"
                            secondary="black"
                            padding=".5rem 1rem"
                            iconBefore={false}
                            iconPadding="0 0 0 .5rem"
                            type="mp3"
                        >
                            MP3 Playlist
                        </IconBtn>
                    </div>
                </div>
                {/* {data.playlists.length > 1 ? generatePlaylists(data) : null} */}
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
