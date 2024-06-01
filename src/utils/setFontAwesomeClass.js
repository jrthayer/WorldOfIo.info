export default function setFontAwesomeClass(type) {
    let iconClasses = "";

    type = type.toLowerCase();

    if (type === "discord") {
        iconClasses = "fab fa-discord fa-2x";
    } else if (type === "twitter") {
        iconClasses = "fab fa-twitter fa-2x";
    } else if (type === "patreon") {
        iconClasses = "fab fa-patreon fa-2x";
    } else if (type === "twitch") {
        iconClasses = "fab fa-twitch fa-2x";
    } else if (type === "youtube") {
        iconClasses = "fab fa-youtube fa-2x";
    } else if (type === "reddit") {
        iconClasses = "fab fa-reddit fa-2x";
    } else if (type === "merch") {
        iconClasses = "fas fa-shopping-cart fa-2x";
    } else if (type === "wiki") {
        iconClasses = "fab fa-wikipedia-w fa-2x";
    } else if (type === "book") {
        iconClasses = "fas fa-book-open fa-2x";
    } else if (type === "circle") {
        iconClasses = "fas fa-dot-circle fa-2x";
    } else if (type === "kickstarter") {
        iconClasses = "fab fa-kickstarter fa-2x";
    } else if (type === "mp3") {
        iconClasses = "fas fa-music fa-2x";
    } else {
        console.error(`invalid icon type was given: ${type}`);
    }
    return iconClasses;
}
