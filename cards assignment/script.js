function addToCart(btn) {
    const isAdded = btn.classList.toggle("added");

    if (isAdded) {
        btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Added to cart';
        btn.style.backgroundColor = "#28a745";
        btn.style.color = "white";
    } else {
        btn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Add to cart';
        btn.style.backgroundColor = "var(--btn-color)";
        btn.style.color = "white";
    }
}

function changeIcon(icon) {
    const isLiked = icon.classList.toggle("active");

    if (isLiked) {
        icon.classList.replace("fa-regular", "fa-solid");
    } else {
        icon.classList.replace("fa-solid", "fa-regular");
    }
}