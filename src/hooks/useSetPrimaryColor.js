import { useEffect } from "react";

function useSetPrimaryColor(hue, saturation, lightness, ratio = 0.4) {
    useEffect(() => {
        let lightShift = lightness * ratio;

        let primary = ` hsl(${hue},${saturation}%,${lightness}%)`;
        // prettier-ignore
        let primaryLight = ` hsl(${hue},${saturation}%,${lightness + lightShift}%)`;
        // prettier-ignore
        let primaryDark = ` hsl(${hue},${saturation}%,${lightness - lightShift}%)`;

        document.documentElement.style.setProperty("--color-primary", primary);
        document.documentElement.style.setProperty(
            "--color-primary-dark",
            primaryDark
        );
        document.documentElement.style.setProperty(
            "--color-primary-light",
            primaryLight
        );

        return () => {
            document.documentElement.style.removeProperty("--color-primary");
            document.documentElement.style.removeProperty(
                "--color-primary-dark"
            );
            document.documentElement.style.removeProperty(
                "--color-primary-light"
            );
        };
    }, []);
}

export default useSetPrimaryColor;
