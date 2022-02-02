import styles from "./iconGroup.module.scss";

import IconBtn from "./iconBtn";

const IconGroup = (props) => {
    return (
        <div>
            {props.data.map((singleEntry) => (
                <IconBtn data={singleEntry}></IconBtn>
            ))}
        </div>
    );
};

{
    /* <div
            className={`socialLinks`}
            style={
                props.width != "undefined"
                    ? { "--component-width": props.width }
                    : {}
            }
        ></div> */
}

export default IconGroup;
