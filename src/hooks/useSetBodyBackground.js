import { useEffect } from "react";

function useSetBodyBackground(image) {
    useEffect(() => {
        document.title = "World Of IO";
        document.body.style.backgroundImage = `url(${image})`;
        document.body.style.backgroundAttachment = `fixed`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";

        return () => {
            document.body.style.background = null;
        };
    }, []);
}

export default useSetBodyBackground;
