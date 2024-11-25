function load_style() {
    var page_style = localStorage.getItem("page_stylesheet_name");
    if (!page_style) {
        page_style = "style1.css";
        localStorage.setItem("page_stylesheet_name", page_style);
    }
    var themeLink = document.getElementById('theme-link');
    if (themeLink) {
        themeLink.setAttribute("href", page_style);
    }
}
function toggle_theme() {
    var page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style == "style1.css") {
        page_style = "style2.css";
    }
    else {
        page_style = "style1.css";
    }
    localStorage.setItem("page_stylesheet_name", page_style);
    var themeLink = document.getElementById('theme-link');
    if (themeLink) {
        themeLink.setAttribute("href", page_style);
    }
}
load_style(); // load style immediately
