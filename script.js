function changeColor(color) {
    var buttons = document.querySelectorAll("nav button");
    buttons.forEach(function(button) {
        button.classList.remove("active");
    });
    document.getElementById(color + "Btn").classList.add("active");
    var sections = document.querySelectorAll("section div");
    sections.forEach(function(section) {
        section.style.backgroundColor = (section.id === color) ? color : "navy";
    });
}
