function addToCart() {
  localStorage.setItem("cart", "Ferrari SF90 - ₹7.5 Crore");
  alert("Added to cart!");
}

document.addEventListener("DOMContentLoaded", () => {
  const item = localStorage.getItem("cart");
  if (document.getElementById("cartItem")) {
    document.getElementById("cartItem").innerText = item
      ? item
      : "Cart is empty";
  }
});
