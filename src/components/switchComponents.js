import useMediaQuery from "hooks/useMediaQuery";

const SwitchComponents = (props) => {
    const switchState = useMediaQuery(props.mediaQuery);

    if (switchState) {
        return props.object1;
    } else {
        return props.object2;
    }
};

export default SwitchComponents;
