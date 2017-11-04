const dropdown = document.getElementById("dropdown"),
    dropdownButton = document.getElementById("dropdown-button"),
    dropdownOptions = document.getElementById("dropdown-options"),
    nav = document.getElementById("nav"),
    navA =  document.getElementsByClassName("nav-a"),
    mobileNav = document.getElementById("mobile-nav"),
    closeNav = document.getElementById("close-mb-nav"),
    extendedNav = document.getElementById("extended-nav");


function showNavElement () {
    nav.classList.remove("show-all");
    nav.classList.add("show-1");
}

function showAllNavElements () {
    nav.classList.remove("show-1","flow-column");
    nav.classList.add("show-all","flow-row");
}

function hideDropdown () {
    dropdown.classList.remove("db");
    dropdown.classList.add("dn");
}

function showDropdown () {
    dropdown.classList.remove("dn");
    dropdown.classList.add("db");
}

function hideMobileNav () {
    mobileNav.classList.remove("di");
    mobileNav.classList.add("dn");
    closeNav.classList.remove("di");
    closeNav.classList.add("dn");
}

function hideExtendedNav () {
    extendedNav.classList.remove("db");
    extendedNav.classList.add("dn");

}

function showMobileNav () {
    mobileNav.classList.remove("dn");
    mobileNav.classList.add("di");
}

function mobileScreen () {
    showNavElement();
    hideDropdown();
    showMobileNav();
}

function standardScreen () {
    showAllNavElements();
    showDropdown();
    hideMobileNav();
    hideExtendedNav();
}


function returnNav () {
    if (window.innerWidth <= 900) {
        mobileScreen();
    } else {
        standardScreen();
    }
}

function resizeNav () {
    if (window.innerWidth <= 900) {
        mobileScreen();
    } else {
        standardScreen();
        closeDropdown();
    }
}

window.onload = function () { returnNav(); };
window.onresize = function () { resizeNav(); };

function openDropdown () {
    dropdownOptions.classList.remove("dn");
    dropdownOptions.classList.add("di");
    dropdownButton.style.color = "black";
}

function closeDropdown () {
    dropdownOptions.classList.remove("di");
    dropdownOptions.classList.add("dn");
    dropdownButton.style.color = "white";
}

function openNavigation () {
    mobileNav.classList.remove("di");
    mobileNav.classList.add("dn");
    closeNav.classList.remove("dn");
    closeNav.classList.add("di");
}

function displayAllNavOptions () {
    Array.from(navA).forEach( element => {
        element.classList.remove("dn");
        element.classList.add("db");
    });
}

function closeNavigation () {
    mobileNav.classList.remove("dn");
    mobileNav.classList.add("di");
    closeNav.classList.remove("di");
    closeNav.classList.add("dn");
}

function hideAllNavOptions () {
    Array.from(navA).forEach( element => {
        if ( element.innerHTML === "Home" ) {
            element.classList.remove("dn");
            element.classList.add("db");
        }else {
            element.classList.remove("db");
            element.classList.add("dn");
        }
    });
}

function displayNav () {
    openNavigation();
    displayAllNavOptions();
    nav.classList.remove("flow-row","show-1");
    nav.classList.add("flow-column","show-all");
    extendedNav.classList.remove("dn");
    extendedNav.classList.add("db");
}

function hideNav () {
    closeNavigation();
    hideAllNavOptions();
    nav.classList.remove("flow-column","show-all");
    nav.classList.add("flow-row", "show-1");
    extendedNav.classList.remove("db");
    extendedNav.classList.add("dn");
}

dropdown.onmouseover= function () { openDropdown(); };
dropdown.onmouseout= function () { closeDropdown(); };
mobileNav.onclick = function () { displayNav(); };
closeNav.onclick = function () { hideNav(); };


//----------Slideshow---------------

const slides = document.querySelectorAll(".caption"),
    header = document.getElementById("home");

var headerImage = header.classList.value;

function changeBgImage () {
    if (headerImage === "bg-chi") {
        header.classList.remove("bg-chi");
        header.classList.add("bg-la");
        headerImage = "bg-la";
    } else if ( headerImage === "bg-la") {
        header.classList.remove("bg-la");
        header.classList.add("bg-ny");
        headerImage = "bg-ny";
    } else {
        header.classList.remove("bg-ny");
        header.classList.add("bg-chi");
        headerImage = "bg-chi";
    }
}

function changeCaption () {
    if (headerImage === "bg-chi") {
        Array.from(slides).forEach( element => {
            if (element.id === "slide-1") {
                element.classList.remove("dn");
                element.classList.add("db");
            } else {
              element.classList.remove("db");
              element.classList.add("dn");
            }
        });
    } else if (headerImage === "bg-la") {
        Array.from(slides).forEach( element => {
            if (element.id === "slide-2") {
                element.classList.remove("dn");
                element.classList.add("db");
            } else {
              element.classList.remove("db");
              element.classList.add("dn");
            }
        });

    } else {
        Array.from(slides).forEach( element => {
            if (element.id === "slide-3") {
                element.classList.remove("dn");
                element.classList.add("db");
            } else {
              element.classList.remove("db");
              element.classList.add("dn");
            }
        });

    }
}

function activateSlideshow() {
    changeBgImage();
    changeCaption();
}


window.setInterval(activateSlideshow, 5000);
