function myFunction() {
    var x = document.getElementById("dropdown-content");
    var y = document.getElementById("arrow_side");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    if (y.style.transform === "rotate(-135deg)") {
        y.style.transform = "rotate(45deg)";
    } else {
        y.style.transform = "rotate(-135deg)";
    }
}