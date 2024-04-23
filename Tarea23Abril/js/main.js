let selectedCheckbox = document.querySelectorAll(".checkbox")

let getSelectBox = () => {
    selectedCheckbox.forEach((checkbox) => {
        checkbox.addEventListener("change", () =>{
            let caja = document.querySelector(checkbox.getAttribute("data-target"))
            checkbox.checked ? caja.classList.add("d-none") : caja.classList.replace("d-none", "d-block") 
        })
    })
}

getSelectBox()