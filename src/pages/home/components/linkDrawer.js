import styles from "./linkDrawer.module.scss";

import Drawer from "components/containers/drawer";
import IconBtn from "components/iconBtn";

const LinkDrawer = (props) => {
    return (
        <Drawer
            id={props.id}
            orientation={props.orientation}
            className={`${styles.socialDrawer}`}
        >
            <h2>{props.header}</h2>
            <div className={styles.linkContainer}>
                {props.data.map((singleEntry) => (
                    <IconBtn
                        data={singleEntry}
                        samePage={props.samePage}
                        // Not a great id, temporary measure!!!
                        key={singleEntry.text}
                    ></IconBtn>
                ))}
            </div>
        </Drawer>
    );
};

export default LinkDrawer;
