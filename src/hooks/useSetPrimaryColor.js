import { useEffect } from "react";

function useSetPrimaryColor(hue, saturation, lightness, ratio = 0.3) {
    useEffect(() => {
        let lightShift = lightness * ratio;

        let primary = ` hsl(${hue},${saturation}%,${lightness}%)`;
        // prettier-ignore
        let primaryLight = ` hsl(${hue},${saturation}%,${lightness + lightShift}%)`;
        // prettier-ignore
        let primaryDark = ` hsl(${hue},${saturation}%,${lightness - lightShift}%)`;

        document.body.style.setProperty("--color-primary", primary);
        document.body.style.setProperty("--color-primary-dark", primaryDark);
        document.body.style.setProperty("--color-primary-light", primaryLight);

        return () => {
            document.body.style.removeProperty("--color-primary");
            document.body.style.removeProperty("--color-primary-dark");
            document.body.style.removeProperty("--color-primary-light");
        };
    }, []);
}

export default useSetPrimaryColor;
