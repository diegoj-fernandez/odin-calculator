const numBtn = document.querySelectorAll(".num"); 
const screen = document.querySelector(".screen");
const btnContainer = document.querySelector(".btn-container");
const newP = document.createElement("p");
const eyeContainer = document.querySelector(".eye-container");
const mouth = document.querySelector(".mouth");



btnContainer.addEventListener("mousedown", () => {
    if (screen.contains(eyeContainer) || screen.contains(mouth)) {
        screen.style.background = `#000000`;
        screen.style.color = `#33ff00`;
        eyeContainer.remove();
        mouth.remove();
        screen.style.display = `block`
        screen.style.padding = `10px`
    }
});

numBtn.forEach(function (i) {
    i.addEventListener("click", () => {
        if (!screen.contains(newP)) {
            newP.setAttribute("class", "input");
            newP.innerText = i.innerText;
            screen.append(newP);
        } else {
            if (newP.innerText.length >= 10) {
                return;
            } else {
                newP.innerText = newP.innerText + i.innerText;
            }
        }
    });
});