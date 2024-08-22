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
    return (
        <div className={`${styles.container}`}>
            <div style={{ flex: "1" }}>
                <div
                    style={
                        bannerSize
                            ? { "--sizePercentage": `${bannerSize}` }
                            : null
                    }
                    className={`${bannerStyles[data.imageCss]} ${
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
                        {data.title}
                    </h2>
                    <h3
                        style={{
                            paddingBottom: "20px",
                            letterSpacing: ".15rem",
                        }}
                    >
                        {data.subTitle ? data.subTitle : "\u200b"}
                    </h3>
                </div>

                <div>
                    <div
                        style={{
                            textAlign: "-webkit-center",
                        }}
                    >
                        <h4>{`${stripDate(data.startDate)} - ${
                            data.concluded ? stripDate(data.endDate) : "Ongoing"
                        }`}</h4>

                        <h4
                            style={{ paddingBottom: "20px" }}
                        >{`Number Of Sessions: ${data.numberOfSessions}`}</h4>
                        {/* prettier-ignore */}
                        <h5>{``}</h5>
                        {/* prettier-ignore */}

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
                            margin=".5rem"
                        >
                            MP3 Playlist
                        </IconBtn>
                    </div>
                </div>
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
    },
};

export default Show;
