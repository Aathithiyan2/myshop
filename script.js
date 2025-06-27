const products = [
  {
    id: 1,
    name: "pain relief oil",
    price: 200,
    image: "oil.jpg", // Place this image in your project folder
    description: "A soothing oil for pain relief."
  }
];

let cart = [];

function displayProducts() {
  const productsDiv = document.getElementById("products");
  productsDiv.innerHTML = "";
  products.forEach(product => {
    productsDiv.innerHTML += `
      <div>
        <img src="${product.image}" alt="${product.name}" style="width:120px;height:120px;object-fit:cover;"><br>
        <strong>${product.name}</strong><br>
        ₹${product.price}<br>
        <small>${product.description}</small><br>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  displayCart();
}

function displayCart() {
  const cartUl = document.getElementById("cart");
  cartUl.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    cartUl.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
    total += item.price;
  });
  document.getElementById("total").innerText = cart.length > 0 ? `Total: ₹${total}` : "";
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase!");
    cart = [];
    displayCart();
  }
}

window.onload = displayProducts;