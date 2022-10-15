const divProduct = document.querySelector(".products");

products.forEach((product) => {
    const allULis = `
<ul>
<li>${products.productName} </li>
<li>${products.productId} </li>
<li>${products.price} </li>
</ul>
`
    divProduct.innerHTML += allULis;
})