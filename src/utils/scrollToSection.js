export default function scrollToSection(id) {
    if (id == "" || id == null) {
        window.scrollTo(0, 0);
        return;
    }

    const section = document.querySelector(id);

    if (section != null) section.scrollIntoView();
}
