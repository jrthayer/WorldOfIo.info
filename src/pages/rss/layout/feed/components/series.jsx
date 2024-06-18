import React, { useEffect, useState } from "react";
import Show from "./show";

import styles from "./series.module.scss";

import useMediaQuery from "hooks/useMediaQuery";

// This works but not sure if it really makes the file easier to read
function Arrow({ clickFunction, numberOfSeasons, direction, image }) {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    direction = capitalizeFirstLetter(direction);
    const increment = direction === "Right" ? 1 : -1;

    const handleClick = (event) => {
        event.stopPropagation();
        clickFunction(increment, numberOfSeasons);
    };

    let cssStyles = `${styles[`cssArrow${direction}`]}`;
    // prettier-ignore
    if (image) {
        cssStyles = `${styles.arrowRootContainer} ${styles[`arrow${direction}`]}`;
    }

    return (
        <div onClick={handleClick} className={cssStyles}>
            {image ? (
                <div className={styles.arrowCenterContainer}>
                    <img src="image/arrow.png" alt="" />
                </div>
            ) : null}
        </div>
    );
}

function Series(props) {
    const [data, setData] = useState(props.data);
    const [showData, setShowData] = useState(props.data);
    const [currentShowIndex, setCurrentShowIndex] = useState(-1);
    const [showBannerPercentage, setShowBannerPercentage] = useState();

    const switchState = useMediaQuery(
        props.mediaQuery ?? "all and (max-width: 700px)"
    );

    useEffect(() => {
        const handleResize = () => {
            setShowBannerPercentage(() => {
                let currentPercentage = window.innerWidth / 500;
                if (currentPercentage > 1) {
                    currentPercentage = 1;
                }
                return currentPercentage;
            });
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
            {data.seasons && !switchState ? (
                <Arrow
                    clickFunction={changeShow}
                    direction={"right"}
                    numberOfSeasons={data.seasons.length}
                    image
                ></Arrow>
            ) : null}
            <div className={styles.showContainer}>
                <Show
                    data={showData}
                    bannerSize={showBannerPercentage}
                    seasons={switchState}
                ></Show>
                {data.seasons && switchState ? (
                    <div className={styles.cssArrowContainer}>
                        <Arrow
                            clickFunction={changeShow}
                            direction={"left"}
                            numberOfSeasons={data.seasons.length}
                        ></Arrow>
                        <Arrow
                            clickFunction={changeShow}
                            direction={"right"}
                            numberOfSeasons={data.seasons.length}
                        ></Arrow>
                    </div>
                ) : null}
            </div>

            {data.seasons && !switchState ? (
                <Arrow
                    clickFunction={changeShow}
                    direction={"left"}
                    numberOfSeasons={data.seasons.length}
                    image
                ></Arrow>
            ) : null}
        </div>
    );
}

export default Series;
