const tempNav = document.querySelector(".temp-nav"),
    tempNavOpts = document.querySelector(".temp-nav-options"),
    chevronLeft = document.querySelector(".fa-chevron-left"),
    chevronRight = document.querySelector(".fa-chevron-right");


function expandTempNav () {
    tempNav.style = "transform: translateX(-295px) scale(1.10);";
    tempNavOpts.style = "transform: translateX(0)";
    chevronLeft.classList.add("dn");
    chevronRight.classList.remove("dn");
}

function closeTempNav () {
    tempNav.style = "transform: translateX(0) scale(1.10);";
    tempNavOpts.style = "transform: translateX(100%)";
    chevronLeft.classList.remove("dn");
    chevronRight.classList.add("dn");
}

chevronLeft.onclick = function () { expandTempNav(); };
chevronRight.onclick = function () { closeTempNav(); };
