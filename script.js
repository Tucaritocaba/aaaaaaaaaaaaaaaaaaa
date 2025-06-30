
document.getElementById("cart-icon").addEventListener("click", () => {
  document.getElementById("cart-panel").classList.toggle("show");
});

const productsContainer = document.getElementById("products-container");
const cartItems = document.getElementById("cart-items");

const products = [
  { name: "Seguidores Instagram", price: 2.00 },
  { name: "Views YouTube", price: 2.00 },
  { name: "Curtidas TikTok", price: 2.00 },
  { name: "Inscritos YouTube", price: 2.00 },
  { name: "Seguidores Kwai", price: 2.00 },
  { name: "Seguidores Telegram", price: 2.00 },
  { name: "Seguidores Twitch", price: 2.00 }
];

products.forEach(p => {
  const card = document.createElement("div");
  card.innerHTML = `
    <div style="background:#220044; margin:10px; padding:10px; border-radius:8px;">
      <h3>${p.name}</h3>
      <p>Preço: R$ ${p.price.toFixed(2)}</p>
      <button onclick="addToCart('${p.name}', ${p.price})">Adicionar ao Carrinho</button>
    </div>
  `;
  productsContainer.appendChild(card);
});

function addToCart(name, price) {
  const item = document.createElement("div");
  item.textContent = `${name} - R$ ${price.toFixed(2)}`;
  cartItems.appendChild(item);
}
