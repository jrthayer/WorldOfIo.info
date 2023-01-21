import { useEffect } from "react";

function useSetBackground(image) {
    useEffect(() => {
        let bg = document.querySelector("#backgroundImage");
        bg.style.backgroundImage = `url(${image})`;

        return () => {
            bg.style.background = null;
        };
    }, []);
}

export default useSetBackground;
