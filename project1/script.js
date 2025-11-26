const buttons = document.querySelectorAll(".color-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const color = btn.getAttribute("data-color");
        document.body.style.background = color;
    });
});
