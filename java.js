let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар добавлен в корзину!");
}


function showCart() {
    let list = "Корзина:\n";


    if (cart.length === 0) {
        alert("Корзина пустая");
        return;
    }


    cart.forEach((item, i) => {
        list += `${i + 1}. ${item.name} — ${item.price} MDL\n`;
    });


    alert(list);
}


// Очистить корзину
function clearCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Корзина очищена");
}






document.addEventListener("DOMContentLoaded", () => {

    const cartIcon = document.createElement("div");
    cartIcon.id = "cart-icon";
    cartIcon.innerHTML = `🛒 <span id="cart-count">0</span>`;
    cartIcon.style.background = "#000000ff";
    cartIcon.style.color = "#ebebebff";
    cartIcon.style.padding = "6px 12px";
    cartIcon.style.fontSize = "18px";
    cartIcon.style.fontWeight = "bold";
    cartIcon.style.borderRadius = "40px";
    cartIcon.style.cursor = "pointer";
    cartIcon.style.display = "flex";
    cartIcon.style.alignItems = "center";
    cartIcon.style.transition = "0.2s";
    cartIcon.style.marginLeft = "20px";


    cartIcon.onclick = () => showCart();


    const menu = document.querySelector(".menu");
    const aboutLink = menu.querySelector("a[href='#about']");
    menu.insertBefore(cartIcon, aboutLink.nextSibling);


    updateCartCount();
});