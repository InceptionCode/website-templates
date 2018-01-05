const navToggle = document.querySelector(".fa-bars"),
    exitToggle = document.querySelector(".fa-times");

const displayNav = (e)=> {
    e.target.classList.add("dn");
    e.target.classList.remove("di");
    if (e.target === navToggle) {
        exitToggle.classList.add("di");
        exitToggle.classList.remove("dn");
    } else {
        navToggle.classList.add("di");
        navToggle.classList.remove("dn");
    }
};

navToggle.onclick = function (e) {  displayNav(e); };
exitToggle.onclick = function (e) {  displayNav(e); };
