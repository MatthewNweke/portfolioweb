const products = [
    {
        productName: "Benz",
        productId: Math.random().toString(),
        productPrice: 200
    },
    {
        productName: "Toyota",
        productId: Math.random().toString(),
        productPrice: 600
    },
    {
        productName: "Corolla",
        productId: Math.random().toString(),
        productPrice: 400
    }
];
// const divItem = document.querySelector(".show")
// products.forEach(product => {

//     const input = document.querySelector("input");
//     input.addEventListener("change", () => {
//         if (input.value.toLowerCase() === product.productName.toLowerCase()) {
//             console.log(product.productName);
//             // const createUL = document.createElement("ul");
//             // const li = `<li>${product.productName}</li>`;
//             // const appendEls = createUL.appendChild("li");
//             // divItem.innerHTML = appendEls;
//         }

//     })

// })
const displaySearch = document.querySelector(".display-search")
products.map(product => {
    const Lis = `
            <ul>
            <li>${product.productName}</li>
            </ul>
            `
    const input = document.querySelector("input");
    input.addEventListener("keyup", () => {
        if (input.value.toLowerCase() === product.productName.toLowerCase()) {
            displaySearch.innerHTML = Lis;
        }
        // else if (input.value.toLowerCase === "") {
        //     displaySearch.innerHTML = "search cars`
        // }

    })


})

