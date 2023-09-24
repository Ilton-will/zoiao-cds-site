
const header = document.getElementById("test");


const but1 = document.getElementById("but-modal1");
const modal1 = document.getElementById("modal1");


const but2 = document.getElementById("but-modal2");
const modal2 = document.getElementById("modal2");


const but3 = document.getElementById("but-modal3");
const modal3 = document.getElementById("modal3");

but1.addEventListener("click", () => clickModal(modal1))
but2.addEventListener("click", () => clickModal(modal2))
but3.addEventListener("click", () => clickModal(modal3))


function clickModal(modal) {
    modal.showModal();
}



function scrollando() {
    if(window.scrollY !==0){
        if (screen.width > 415){
            header.classList.add("hidden-active")
            header.classList.remove("hidden")
            header.classList.remove("hidden-defalt")
        }
        
    }
    else{

        header.classList.remove("hidden-active")
        header.classList.add("hidden-defalt")
    }
}


document.addEventListener("scroll", (event) => scrollando());

Window.onload = scrollando();