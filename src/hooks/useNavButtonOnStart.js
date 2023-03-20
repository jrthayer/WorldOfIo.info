import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useNavButtonOnStart(setId = "") {
    const location = useLocation();
    let id = location.hash;

    // Hack solution for rendering bug, update for mobile
    if (id === "") id = setId;

    useEffect(() => {
        const clickNav = () => {
            let navButton = document.body.querySelector(`a[href="${id}"]`);

            //NavButton doesn't exist on page.
            if (navButton === null) {
                console.error(
                    `There is no element that matches the given id(${id}): document.body.querySelector('a[href="${id}"]') === null`
                );
                return;
            }

            navButton.addEventListener("click", function handleClick(event) {
                event.stopPropagation();
                navButton.removeEventListener("click", handleClick);
            });

            navButton.click();
        };

        // Check if the page has already loaded
        if (document.readyState === "complete") {
            clickNav();
        } else {
            window.addEventListener("load", clickNav);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener("load", clickNav);
        }
    }, []);
}
