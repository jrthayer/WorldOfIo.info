export default [
    { title: "misc" },
    { title: "Phase 2" },
    { title: "Phase 3", concluded: false },
    {
        title: "Phase 2 Major Events",
        seasonMatchStrings: [
            "Kaasma Khara Final Battle",
            "Chamber of the Eight",
            "The Shadow Invasion",
        ],
    },
    {
        title: "Arcane Academy",
        seasonMatchStrings: [
            "",
            ["S2", "Season 2"],
            { childShow: "Astral Academy" },
        ],
    },
    {
        title: "Astral Academy",
        parentShow: "Arcane Academy",
    },
    {
        title: "Miss Demeanor",
        seasonMatchStrings: [
            "",
            "S2",
            ["S3", "Season 3", "Campaign Finale"],
            ["Nigel", "Altered"],
        ],
    },
    {
        title: "All King",
        seasonMatchStrings: [
            "",
            { childShow: "Under IO" },
            { childShow: "Radiance" },
            { childShow: "Mainframe of Atlas" },
        ],
    },
    {
        title: "Under IO",
        parentShow: "All King",
    },
    {
        title: "Radiance",
        parentShow: "All King",
    },
    {
        title: "Mainframe of Atlas",
        parentShow: "All King",
    },
    {
        title: "Goblins of IO",
    },
    {
        title: "Tower of Archimedes",
    },
    { title: "Hunters of IO", seasonMatchStrings: ["", "Spire of Euclid"] },
    {
        title: "Spire of Euclid",
    },
    { title: "Bronn" },
    { title: "Altered Ballad" },
    { title: "Nova Hellscape" },
    {
        title: "Eye of Asmodia",
        seasonMatchStrings: ["", { childShow: "Shadow of Asmodia" }],
    },
    { title: "Shadow of Asmodia", parentShow: "Eye of Asmodia" },
    {
        title: "Pipe Dreamers",
        seasonMatchStrings: ["", ["Season 2", "S2"], "Season 3"],
    },
    {
        title: "Deadbeats",
        concluded: false,
        seasonMatchStrings: ["", ["Season 2", "S2"], "Season 3", "Season 4"],
    },
    {
        title: "Curious Curios",
        seasonMatchStrings: ["", ["Season 2", "S2"], "Season 3"],
    },
    { title: "March on Faewunder" },
    {
        title: "Into The Shadow's Breach",
        concluded: false,
        playlistRegex: ["", ["Season 2", "S2"], "Season 3"],
    },
    {
        title: "Dawn of Ganymede",
        concluded: false,
    },
];