let createProductoButton = document.getElementById("createProducto");

let productos = []

createProductoButton.addEventListener("click",(event) => {
    event.preventDefault();
    
    let fields = document.querySelectorAll("#product-form input")
    let productObj = {}

    fields.forEach((producto) => {
        productObj[producto.name] = producto.value
        producto.value = ""
        
    })
    productos.push(productObj)

    printProductList(productos, "products-list")
})

const createProductoItem =(productObj) => {
    let { nombreProducto, descripcion, precio, categoria, imagen} = productObj
    let productCardDiv = document.createElement("div")
    productCardDiv.classList.add("card", "col-md-4", "p-3", "me-3", "mt-3")
    productCardDiv.setAttribute("id", categoria)
    let productImg = document.createElement("img")
    productImg.classList.add("card-img-top")
    productImg.setAttribute("src", imagen)
    let productCardBoby = document.createElement("div")
    productCardBoby.classList.add("card-body")
    let productName = document.createElement("h5")
    productName.classList.add("card-title")
    let pName = document.createTextNode(nombreProducto) 
    productName.append(pName)
    let productDescripcion = document.createElement("p")
    productDescripcion.classList.add("card-description")

    let pDescription = document.createTextNode(`${descripcion.substring(0,10)}...`) 
    productDescripcion.append(pDescription)
    let productPrice = document.createElement("p")
    productPrice.classList.add("card-price")
    let pPrice = document.createTextNode(`$${precio} MXN`) 
    productPrice.append(pPrice)

    productCardBoby.append(productName, productDescripcion, productPrice)
    productCardDiv.append(productImg, productCardBoby)

    return productCardDiv
    
}

const printProductList = (dataArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId)

    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild)
    }

    dataArray.forEach((producto) => wrapper.append(createProductoItem(producto)))

}

const filterByCategory = () => {
    let inputFilter = document.getElementById("filterInput")
    inputFilter.addEventListener("keyup",(event) => {
        let productos = document.querySelectorAll("#products-list div.card")
        productos.forEach((producto) => {
            if (event.target.value == ""){
                producto.classList.replace("d-none", "d-block")
            }else if (producto.id.includes(inputFilter.value) ){
                let match = document.getElementById(producto.id)
                match.classList.replace("d-none", "d-block")
                return match
            }else{
                let notMatch = document.getElementById(producto.id)
                notMatch.classList.add("d-none")
            }
    
        })
        
    })

}

filterByCategory()


