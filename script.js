const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.navbar__menu');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-active');
  navMenu.classList.toggle('active');
});


const products = {
    seafood: [
        { name: "Mackerel", price: "₹700/kg", image: "images/mackerel.jpg" },
        { name: "Salmon Fillet", price: "₹650/kg", image: "images/salmon.jpg" },
        { name: "Tiger Prawns", price: "₹850/kg", image: "images/tigerprawns.avif" },
        { name: "Crab Meat", price: "₹500/kg", image: "images/crab.jpg" },
        { name: "Pomfret Fish", price: "₹700/kg", image: "images/pomfret.avif" },
        { name: "King Fish", price: "₹1350/kg", image: "images/kingfish.jpg" },
        { name: "Salmon Fish", price: "₹1000/kg", image: "images/salmonfish.jpg" },
        { name: "Sea Bass", price: "₹300/kg", image: "images/seabass.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" },
        { name: "Mackerel", price: "₹600/kg", image: "images/pomfret.jpg" }
    ],
    poultry: [
        { name: "Country Chicken", price: "₹400/kg", image: "images/country-chicken.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Broiler Chicken", price: "₹250/kg", image: "images/broiler.jpg" },
        { name: "Mutton", price: "₹900/kg", image: "images/mutton.jpg" }
    ],
    dairy: [
        { name: "Full Cream Milk", price: "₹60/L", image: "images/milk.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
        { name: "Paneer", price: "₹350/kg", image: "images/paneer.jpg" },
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
            <p>Approx Price: ${product.price}</p>
        `;
        productList.appendChild(productCard);
    });
}
