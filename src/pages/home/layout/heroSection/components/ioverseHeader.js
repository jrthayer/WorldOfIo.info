import styles from "./ioverseHeader.module.scss";

const IoverseHeader = (props) => {
    return (
        <div className={styles.container}>
            <div>{props.children}</div>
            <div>{props.children}</div>
        </div>
    );
};

export default IoverseHeader;
