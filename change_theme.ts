function load_style()
{
    let page_style : string | null = localStorage.getItem("page_stylesheet_name");
    if (!page_style)
    {
   	    page_style = "style1.css";
        localStorage.setItem("page_stylesheet_name", page_style);
    }
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    if (themeLink)
    {
        themeLink.setAttribute("href", page_style);
    }
}

function toggle_theme()
{
    let page_style : string | null = localStorage.getItem("page_stylesheet_name");
    if (page_style == "style1.css")
    {
        page_style = "style2.css"
    }
    else
    {
        page_style = "style1.css"
    }
    localStorage.setItem("page_stylesheet_name", page_style);
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    if (themeLink)
    {
        themeLink.setAttribute("href", page_style);
    }
}


load_style()  // load style immediately
