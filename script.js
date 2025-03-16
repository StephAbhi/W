const products = {
    seafood: [
        { name: "Salmon Fillet", price: "₹650/kg", image: "images/salmon.jpg" },
        { name: "Tiger Prawns", price: "₹850/kg", image: "images/prawns.jpg" },
        { name: "Crab Meat", price: "₹500/kg", image: "images/crab.jpg" },
        { name: "Pomfret Fish", price: "₹700/kg", image: "images/pomfret.jpg" }
    ],
    poultry: [
        { name: "Country Chicken", price: "₹400/kg", image: "images/country-chicken.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Mutton", price: "₹900/kg", image: "images/mutton.jpg" }
    ],
    dairy: [
        { name: "Full Cream Milk", price: "₹60/L", image: "images/milk.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Ghee", price: "₹500/kg", image: "images/ghee.jpg" }
    ]
};

function loadProducts(category) {
    const productList = document.getElementById("product-list");
    if (!productList) return;

    productList.innerHTML = ""; // Clear existing products

    products[category].forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
        `;
        productList.appendChild(productCard);
    });
}
