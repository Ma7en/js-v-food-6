


/*
==============================================
==============================================
*/

/* ====== start  ====== */

var menuitem = document.getElementById("menuitem");
menuitem.style.maxHeight = "0px";

function menutoggle() {
    if (menuitem.style.maxHeight == '0px') {
        menuitem.style.maxHeight = "200px"
    } else {
        menuitem.style.maxHeight = "0px"
    }
}

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


/* ====== end  ====== */

/*
==============================================
==============================================
*/

/* ====== start footer ======*/

let dateYear = document.querySelector(".dateYear");
let newData = new Date();

window.addEventListener("load", () => {
    dateYear.innerHTML = newData.getFullYear();
});



/* ====== end footer ======*/

/*
==============================================
==============================================
*/





