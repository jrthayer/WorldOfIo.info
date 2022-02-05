import styles from "./iconBtn.module.scss";

import useCheckNull from "hooks/useCheckNull";

import Btn from "./btn";

const IconBtn = (props) => {
    const iconClasses = useCheckNull(props.iconClasses, "fab fa-youtube fa-2x");

    return (
        <Btn
            link={props.link}
            samePage={props.samePage}
            primary={props.primary}
            secondary={props.secondary}
        >
            <i className={`${iconClasses} ${styles.icon}`}>{props.children}</i>
        </Btn>
    );
};

export default IconBtn;
