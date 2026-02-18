const loadProjects = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => displayProduct(json))
};

const displayProduct = (products) =>{
const productContainer=document.getElementById('productContainer');
productContainer.innerHTML="";
for (let product of products){
    console.log(product)
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML =`
    <button class="btn btn-primary">${product.category}</button>
    `
    productContainer.append(btnDiv)
}
}

    loadProjects();