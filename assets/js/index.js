
let header = document.getElementById("nav-wrapper");
let item = header.getElementsByClassName("nav-item");
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

function mouseOver() {
    document.getElementById("main").classList.add("active");
}
function mouseLeave(){
    document.getElementById("main").classList.remove("active");

}