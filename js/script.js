const favIcon =
    "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKElEQVRIiWNgGAXDHjAisf/TwmwmKhs6CgYhGE1Fo4ByMJqKRsEQAADWCQMKYvEFtQAAAABJRU5ErkJggg==";
const docHead = document.getElementsByTagName("head")[0];
const newLink = document.createElement("link");
newLink.rel = "shortcut icon";
newLink.href = "data:image/png;base64," + favIcon;
docHead.appendChild(newLink);

const searchFunction = () => {
    const input = document.getElementById("filterInput");
    const filter = input.value.toUpperCase();
    const li = document.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0];

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            a.style.color = "";
            a.style.borderColor = "";
        } else {
            a.style.color = "var(--main-text-unselected)";
            a.style.borderColor = "var(--main-border-unselected)";
        }
    }
};

Mousetrap.bind("1", () => {
    document.getElementById("filterInput").focus();
    return false;
});

Mousetrap.bind("2", () => {
    document.getElementById("searchDDG").focus();
    return false;
});

Mousetrap.bind("3", () => {
    document.getElementById("searchGoogleEn").focus();
    return false;
});

Mousetrap.bind("4", () => {
    document.getElementById("SearchGoogle").focus();
    return false;
});

Mousetrap.bind("5", () => {
    document.getElementById("searchWikipedia").focus();
    return false;
});

Mousetrap.bind("6", () => {
    document.getElementById("searchHinta").focus();
    return false;
});

Mousetrap.bind("7", () => {
    document.getElementById("searchYouTube").focus();
    return false;
});
