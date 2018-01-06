const navLarge = document.querySelector(".desktop-nav"),
    navMobile = document.querySelector(".mobile-nav"),
    navToggle = document.querySelector(".fa-bars"),
    exitToggle = document.querySelector(".fa-times"),
    navElements = document.querySelectorAll(".mobile-nav li");

const changeNavBg = ()=> {
    if (window.scrollY > 0) {
        navLarge.style = "background: #fff";
        navMobile.style = "background: #fff";
    } else {
        navLarge.style = "background: transparent";
        navMobile.style = "background: transparent";
    }
};

const toggleNavElements = action => {

    navElements.forEach(element => {
        const checkClassList = !element.classList.contains("home");
        const checkAction = action === "show";
        if (checkClassList && checkAction) {
            element.classList.add("list-display");
            element.classList.remove("dn");
        } else if (checkClassList && !checkAction) {
            element.classList.add("dn");
            element.classList.remove("list-display");
        }
    });
};

const toggleNav = (e)=> {
    e.target.classList.add("dn");
    e.target.classList.remove("di");
    if (e.target === navToggle) {
        exitToggle.classList.add("di");
        exitToggle.classList.remove("dn");
        toggleNavElements("show");
    } else {
        navToggle.classList.add("di");
        navToggle.classList.remove("dn");
        toggleNavElements("hide");
    }
};

window.onscroll = function () { changeNavBg(); };
navToggle.onclick = function (e) {  toggleNav(e); };
exitToggle.onclick = function (e) {  toggleNav(e); };
