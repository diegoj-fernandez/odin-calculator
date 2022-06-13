const numBtn = document.querySelectorAll(".num"); 
const screen = document.querySelector(".screen");
const btnContainer = document.querySelector(".btn-container");


btnContainer.addEventListener("mouseover", () => {
    screen.style.background = `#000000`;
    screen.style.color = `#33ff00`;
});

numBtn.forEach(function (i) {
    i.addEventListener("click", () => {
        screen.innerText = i.innerText;
    });
});