import React, { useEffect, useState } from "react";
import bannerStyles from "images/spritesheets/showBanners.module.scss";
import IconBtn from "components/buttons/iconBtn";

import styles from "./show.module.scss";

function stripDate(date) {
    //Date strings stripped from the rss feed were object type by default
    date = new String(date);
    date = date.split(" ");
    date = date[1] + " " + date[2] + ", " + date[3];
    return date;
}

function Show({ data, bannerSize }) {
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
        <div className={`${styles.container}`}>
            <div style={{ flex: "1" }}>
                <div
                    style={
                        bannerSize
                            ? { "--sizePercentage": `${bannerSize}` }
                            : null
                    }
                    className={`${bannerStyles[showData.imageCss]} ${
                        bannerStyles.banner
                    } ${styles.image}`}
                />
            </div>
            <div className={styles.infoContainer}>
                <div>
                    <h2
                        style={{ fontSize: "2rem", letterSpacing: ".2rem" }}
                        className={"header-ioverse-gradient"}
                    >
                        {showData.title}
                    </h2>
                    <h3
                        style={{
                            paddingBottom: "20px",
                            letterSpacing: ".15rem",
                        }}
                    >
                        {showData.subTitle ? showData.subTitle : "\u200b"}
                    </h3>
                </div>

                <div>
                    {/* <div
                        onClick={(event) => {
                            event.stopPropagation();
                            changeShow(1, data.seasons.length);
                        }}
                        className={`${styles.arrowRootContainer} ${styles.arrowLeft}`}
                    >
                        <div className={styles.arrowCenterContainer}>
                            <img src="image/arrow.png" alt="" />
                        </div>
                    </div> */}
                    <div
                        style={{
                            textAlign: "-webkit-center",
                        }}
                    >
                        <h4>{`${stripDate(showData.startDate)} - ${
                            showData.concluded
                                ? stripDate(showData.endDate)
                                : "Ongoing"
                        }`}</h4>
                        {/* <h4>{`(${determineSubtitle(playlist, index)})`}</h4> */}
                        <h4
                            style={{ paddingBottom: "20px" }}
                        >{`Number Of Sessions: ${showData.numberOfSessions}`}</h4>
                        {/* prettier-ignore */}
                        <h5>{``}</h5>
                        {/* prettier-ignore */}

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
                            margin=".5rem"
                        >
                            MP3 Playlist
                        </IconBtn>
                    </div>
                    {/* <div
                        onClick={(event) => {
                            event.stopPropagation();
                            changeShow(1, data.seasons.length);
                        }}
                        className={`${styles.arrowRootContainer} ${styles.arrowRight}`}
                    >
                        <div className={styles.arrowCenterContainer}>
                            <img src="image/arrow.png" alt="" />
                        </div>
                    </div> */}
                </div>
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
