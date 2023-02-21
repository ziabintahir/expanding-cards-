const panels = document.querySelectorAll(".panel");
panels.forEach((i) => {
    i.addEventListener("click", () => {
        removeclass();
        i.classList.add('active');
    });
});
function removeclass() {
    panels.forEach((panel) =>{
        panel.classList.remove("active");
    });



}