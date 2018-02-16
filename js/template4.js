const navLarge = document.querySelector(".desktop-nav"),
    navMobile = document.querySelector(".mobile-nav"),
    navToggle = document.querySelector(".fa-bars"),
    exitToggle = document.querySelector(".fa-times"),
    navElements = document.querySelectorAll(".mobile-nav li");

const changeNavBg = () => {
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

const toggleNav = (e) => {
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

window.onscroll = function () {
    changeNavBg();
};
navToggle.onclick = function (e) {
    toggleNav(e);
};
exitToggle.onclick = function (e) {
    toggleNav(e);
};


/* My Work Images Interaction */

const images = document.querySelectorAll(".work-row-img"),
    overlay = document.querySelector(".image-overlay"),
    imageContainer = document.querySelector(".overlay-img-container"),
    overlayIcon = document.querySelector(".overlay-i");

/* Class "ImgDescription" is used here in order to quickly create.
append text to the "imageContainer". This class will later on be expanded
to include more functionality and options. */

//NOTE: There is no need for "Class". Above principle still applies.
//NOTE: Original code will be commented out in order to compare.

const ImgDescription = {
    inputDesc: desc =>{ this.desc = desc; },
    setDesc: ()=> {

        let imgDesc = document.createElement("p");
        imgDesc.classList.add("img-desc", "white");
        imgDesc.innerHTML = this.desc;

        return imgDesc;
    }
};

/*
class ImgDescription {
    constructor(desc) {
        this.desc = desc;
    }
    setDesc() {
        let imgDesc = document.createElement("p");
        imgDesc.classList.add("img-desc", "white");
        imgDesc.innerHTML = this.desc;

        return imgDesc;
    }
}
*/
/* Quickly setting possible descriptions here for readabiltiy 
and ease of use later on. */

const Desc1 = Object.create(ImgDescription);
const Desc2 = Object.create(ImgDescription);
const Desc3 = Object.create(ImgDescription);
const Desc4 = Object.create(ImgDescription);
const Desc5 = Object.create(ImgDescription);
const Desc6 = Object.create(ImgDescription);
const Desc7 = Object.create(ImgDescription);
const Desc8 = Object.create(ImgDescription);

/*const Desc1 = new ImgDescription("The mist over the mountains");
const Desc2 = new ImgDescription("Coffee beans");
const Desc3 = new ImgDescription("Bear closeup");
const Desc4 = new ImgDescription("Quiet ocean");
const Desc5 = new ImgDescription("The mist");
const Desc6 = new ImgDescription("My beloved typewriter");
const Desc7 = new ImgDescription("Empty ghost train");
const Desc8 = new ImgDescription("Sailing");
*/

const setImg = img => {
    img.classList.remove("work-row-img");
    imageContainer.appendChild(img);
};

/* The descriptions that the sub classes (Desc1, Desc2, etc...) 
create with the "setDesc()" method, will be appended here.*/
const appendDesc = imgDesc => {
    imageContainer.appendChild(imgDesc);
};

/* Checks the different images in the first row and then sets
the image description based off of what image was actually selected.*/
const checkRow1 = img => {
    let desc;
    if (img.classList.contains("p1")) {
        Desc1.inputDesc("The mist over the mountains");
        desc = Desc1.setDesc();
    } else if (img.classList.contains("p2")) {
        Desc2.inputDesc("Coffee beans");
        desc = Desc2.setDesc();
    } else if (img.classList.contains("p3")) {
        Desc2.inputDesc("Bear closeup");
        desc = Desc3.setDesc();
    } else {
        Desc4.inputDesc("Quiet ocean");
        desc = Desc4.setDesc();
    }
    appendDesc(desc);
};

/* Same principle applies here only difference is here 
we check the second row. */
const checkRow2 = img => {
    let desc;
    if (img.classList.contains("p5")) {
        Desc5.inputDesc("The mist");
        desc = Desc5.setDesc();
    } else if (img.classList.contains("p6")) {
        Desc6.inputDesc("My beloved typewriter");
        desc = Desc6.setDesc();
    } else if (img.classList.contains("p7")) {
        Desc7.inputDesc("Empty ghost train");
        desc = Desc7.setDesc();
    } else {
        Desc8.inputDesc("Sailing");
        desc = Desc8.setDesc();
    }
    appendDesc(desc);
};

const checkImgRows = img => {
    const classContainsRow1 = img.classList.contains("p1") ||
        img.classList.contains("p2") ||
        img.classList.contains("p3") ||
        img.classList.contains("p4");
    if (classContainsRow1) {
        checkRow1(img);
    } else {
        checkRow2(img);
    }
};

/* The event that triggered the overlay to display is an image.
We don't want to move the "actually" image node outside of it's
original container so instead we clone the image node than continue
other operations, while using the cloned or copied node. */

const displayOverlay = (e) => {
    let cloneImg = e.target.cloneNode(true);
    setImg(cloneImg);
    checkImgRows(cloneImg);
    overlay.classList.remove("dn");
};

const toggleOverlay = img => {
    img.onclick = e => displayOverlay(e);
};

const exitOverlay = () => {
    imageContainer.innerHTML = " ";
    overlay.classList.add("dn");
};

/* Each image has the ability to display the overlay. 
Less logic is written hear for readability. Toggle overlay 
could have easily been written out inside of the forEach method.*/

images.forEach(toggleOverlay);
overlayIcon.onclick = () => exitOverlay();