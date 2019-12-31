/********************************************
Copyright: 源湯原味
Web Design: Gordon Chan
********************************************/

const switchTab = target => {
    [...document.getElementsByTagName("section")].map(elem=>elem.classList.add("hidden"));
    document.querySelector(`.${target}`).classList.remove("hidden");
}

const init = () => {
    switchTab("product");
}

onload = init;

const handleClick = e => {
    if (e.target.matches(".navItem"))
      switchTab(e.target.dataset.target);
}

document.addEventListener("click", handleClick, false);
