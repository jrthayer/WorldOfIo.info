import styles from "./iconBtn.module.scss";

import Btn from "./btn";

const IconBtn = (props) => {
    return (
        <Btn
            link={props.link}
            samePage={props.samePage}
            primary={props.primary}
            secondary={props.secondary}
        >
            <i className={`${props.iconClasses} ${styles.icon}`}>
                {props.children}
            </i>
        </Btn>
    );
};

IconBtn.defaultProps = {
    iconClasses: "fab fa-youtube fa-2x",
};

export default IconBtn;
