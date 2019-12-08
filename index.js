const getRandomElementToFlip = () => {
    const elements = document.body.getElementsByTagName("*");
    const index = Math.floor(Math.random() * elements.length);
    return elements[index];
};

window.setInterval(() => {
    const element = getRandomElementToFlip();
    element.style.transition = "ease 1s";
    element.style.transform = "rotate(180deg)";
}, 1000);
