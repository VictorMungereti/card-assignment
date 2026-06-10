function changeIcon(icon) {
  icon.classList.toggle("fa-regular");
  icon.classList.toggle("fa-solid");
  icon.style.color = icon.classList.contains("fa-solid") ? "#ff3b30" : "#444";
}

function addToCart(btn) {
  const isAdded = btn.classList.toggle("added");

  if (isAdded) {
    btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Added to cart';
    btn.style.backgroundColor = "#28a745";
  } else {
    btn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Add to cart';
    btn.style.backgroundColor = "var(--btn-color)";
  }
}