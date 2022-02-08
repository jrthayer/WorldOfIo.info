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

// const position = useCheckNull(props.position);
// const top = useCheckNull(props.top);
// const left = useCheckNull(props.left);

// const inlineStyles = useMemo(() => {
//     let styleObject = {};

//     styleObject["--position"] = position;
//     styleObject["--top"] = top;
//     styleObject["--left"] = left;

//     return styleObject;
// }, [top, left]);

/*style={inlineStyles}*/
