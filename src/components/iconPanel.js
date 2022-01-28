import React from "react";
import { useMemo } from "react";

import "../styles/iconPanel.scss";

const IconPanel = (props) => {
    let data = useMemo(() => {
        return props.data;
    }, []);

    return (
        <a
            href={data.link}
            rel="noopener noreferrer"
            target="_blank"
            className="iconPanel"
        >
            <div className="iconPanel-container">
                <div className="iconPanel-icon">
                    <i
                        className={data.classes_text}
                        style={{ color: data.color }}
                    ></i>
                </div>
                <div className="iconPanel-description">
                    <h3 className="color-black">{data.name}</h3>
                    {props.children}
                </div>
            </div>
        </a>
    );
};

export default IconPanel;
