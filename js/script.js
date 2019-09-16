// Filtering script
function searchFunction() {
    var input, filter, li, a, i, txtValue;
    input = document.getElementById('filterInput');
    filter = input.value.toUpperCase();
    li = document.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            a.style.color = "";
            a.style.borderColor = "";
        } else {
            a.style.color = "var(--main-text-unselected)";
            a.style.borderColor = "var(--main-border-unselected)";
        }
    }
}


// Hotkeys
Mousetrap.bind('1',
    function () {
        document.getElementById("filterInput").focus();
        return false;
    });

Mousetrap.bind('2',
    function () {
        document.getElementById("searchDDG").focus();
        return false;
    });

Mousetrap.bind('3',
    function () {
        document.getElementById("searchGoogleEn").focus();
        return false;
    });

Mousetrap.bind('4',
    function () {
        document.getElementById("SearchGoogle").focus();
        return false;
    });

Mousetrap.bind('5',
    function () {

        document.getElementById("searchWikipedia").focus();
        return false;
    });

Mousetrap.bind('6',
    function () {

        document.getElementById("searchHinta").focus();
        return false;
    });

Mousetrap.bind('7',
    function () {

        document.getElementById("searchYouTube").focus();
        return false;
    });
