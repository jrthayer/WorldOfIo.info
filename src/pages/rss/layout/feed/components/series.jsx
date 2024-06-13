import React, { useEffect, useState, useContext } from "react";
import Show from "./show";

import styles from "./series.module.scss";

import useMediaQuery from "hooks/useMediaQuery";

function Series(props) {
    const [data, setData] = useState(props.data);
    const [showData, setShowData] = useState(props.data);
    const [currentShowIndex, setCurrentShowIndex] = useState(-1);
    const [showBannerPercentage, setShowBannerPercentage] = useState();

    const switchState = useMediaQuery(
        props.mediaQuery ?? "all and (max-width: 500px)"
    );

    useEffect(() => {
        setShowBannerPercentage(() => {
            if (switchState) {
                return window.innerWidth / 500;
            } else {
                return 1;
            }
        });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setShowBannerPercentage(() => {
                if (switchState) {
                    return window.innerWidth / 500;
                } else {
                    return 1;
                }
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [switchState]);

    useEffect(() => {
        if (currentShowIndex === -1) {
            setShowData(data);
        } else {
            setShowData(data.seasons[currentShowIndex]);
        }
    }, [currentShowIndex]);

    function changeShow(increment, numberOfSeasons) {
        setCurrentShowIndex((prevIndex) => {
            prevIndex += increment;
            console.log(prevIndex);
            if (prevIndex <= -2) {
                return numberOfSeasons - 1;
            }

            if (prevIndex >= numberOfSeasons) {
                return -1;
            } else {
                return prevIndex;
            }
        });
    }

    return (
        <div style={{ position: "relative" }} className={`${styles.container}`}>
            {data.seasons ? (
                <div
                    onClick={(event) => {
                        event.stopPropagation();
                        changeShow(1, data.seasons.length);
                    }}
                    className={`${styles.arrowRootContainer} ${styles.arrowRight}`}
                >
                    <div className={styles.arrowCenterContainer}>
                        <img src="image/arrow.png" alt="" />
                    </div>
                </div>
            ) : null}
            <div className={styles.showContainer}>
                <Show data={showData} bannerSize={showBannerPercentage}></Show>
            </div>

            {data.seasons ? (
                <div
                    onClick={(event) => {
                        event.stopPropagation();
                        changeShow(-1, data.seasons.length);
                    }}
                    className={`${styles.arrowRootContainer} ${styles.arrowLeft}`}
                >
                    <div className={styles.arrowCenterContainer}>
                        <img src="image/arrow.png" alt="" />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Series;
