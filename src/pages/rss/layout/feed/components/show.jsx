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

function Show({ data }) {
    const [showData, setShowData] = useState(data);

    useEffect(() => {
        setShowData(data);
    }, [data]);
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
                    className={`${styles[showData.imageCss]} ${styles.banner}`}
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
                <h2>{showData.title}</h2>
                {showData.subTitle ? <h3>{showData.subTitle}</h3> : null}
                {/* <h4>{`(${determineSubtitle(playlist, index)})`}</h4> */}
                <h4>{`Number Of Episodes: ${showData.numberOfSessions}`}</h4>
                {/* prettier-ignore */}
                <h4>{`Total Length: ${Math.floor(showData.duration/(86345154))} hrs`}</h4>
                {/* prettier-ignore */}
                <h4>{`${stripDate(showData.startDate)} - ${showData.concluded ? stripDate(showData.endDate) : "Ongoing"}`}</h4>
                <IconBtn
                    link={showData.playlist}
                    primary="white"
                    secondary="black"
                    padding=".5rem 1rem"
                    iconBefore={false}
                    iconPadding="0 0 0 .5rem"
                >
                    YouTube Playlist
                </IconBtn>
                <IconBtn
                    link={showData.playlist}
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
            {/* {data.playlists.length > 1 ? generatePlaylists(data) : null} */}
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
    },
};

export default Show;
