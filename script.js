// Simple cart functionality
let cart = [];

function addToCart(productName, price) {
    let product = { name: productName, price: price };
    cart.push(product);
    alert(`${productName} has been added to your cart.`);
    console.log(cart);
}
