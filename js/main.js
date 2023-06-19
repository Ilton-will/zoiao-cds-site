
const header = document.getElementById("test");


function scrollando() {
    if(window.scrollY !==0){
        header.classList.add("hidden-active")
        header.classList.remove("hidden")
        header.classList.remove("hidden-defalt")
    }
    else{
        header.classList.remove("hidden-active")
        header.classList.add("hidden-defalt")
    }
}


document.addEventListener("scroll", (event) => scrollando());

window.onload(scrollando())





