let productData = []
const Product = async function () {
  let res = await fetch("https://dummyjson.com/products")
  let data = await res.json()
  productData = Array.isArray(data.products) ? data.products : []
  renderproducts()
}
Product()
const CARD_SAVE_DATA = "apiproducts"
// const SELECTED_ID = "selected_id"

const getdata = function () {
  let res = localStorage.getItem(CARD_SAVE_DATA)
  try {
    return res ? JSON.parse(res) : []
  }
  catch {
    console.error("error")
  }
}
const setdata = function (card_data) {
  localStorage.setItem(CARD_SAVE_DATA, JSON.stringify(card_data))
}
const cleardata = function () {
  if (confirm("Are you sure you want to remove this item")) {
    localStorage.removeItem(CARD_SAVE_DATA)
  }

}
const renderproducts = function () {
  const container = document.querySelector("#product-list")

  if (!container) return
  if (!Array.isArray(productData) || productData.length === 0) {
    container.innerHTML = "<p>No products to show.</p>";
    return
  }
  container.innerHTML = "";
  productData.slice(0, 12).forEach((p) => {
    if (!p) return;
    const card = document.createElement("div")
    card.className = "card product-card border rounded overflow-hidden shadow-sm m-2"
    card.dataset.id = p.id;
    card.innerHTML = `
      <img src="${(p.images?.[0] || p.thumbnail)}" alt="${(p.title || '')}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-900 truncate">${(p.title)}</h3>
        <p class="text-gray-500 mt-1 capitalize">${(p.category || '')}</p>
        <div class="flex items-center justify-between mt-3">
          <span class="text-xl font-bold text-indigo-600">$${Number(p.price || 0).toFixed(2)}</span>
          ${p.discountPercentage ? `<span class="text-sm text-red-600">${(String(p.discountPercentage))}% OFF</span>` : ''}
        </div>
        <p class="text-sm text-yellow-600 mt-1">⭐ ${(String(p.rating ?? 'N/A'))}</p>
        <div class="mt-4 flex gap-2">
          <a href="details.html?id=${p.id}" class="view-details block w-full bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700 transition" data-id="${p.id}">
            View Details
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  })
}
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".card")
  if (!btn) return
  const id = btn.dataset.id || btn.getAttribute("data-id");
  const product = productData.find(p => p.id == id)
  if (!product) {
    console.warn("Product not found for id", id);
    return;
  }
  try {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  } catch (err) {
    console.error("Failed to save selectedProduct:", err);
  }
  window.location.href = "details.html";
})
function getproductsdetails() {
  const product = localStorage.getItem("selectedProduct")
  if (!product) {
    document.body.innerHTML = "<p>No product selected.</p>";
    return;
  }
  const data = JSON.parse(product);
  const productdetails = document.querySelector("#product-details")

  productdetails.innerHTML = `
  <div class="top grid" style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="gallery">
        <img src="${data.images?.[0] || data.thumbnail}" alt="${data.title}" style="width:100%;height:320px;object-fit:cover;border-radius:6px">
      </div>
      <div class="info">
        <h1 style="font-size:1.4rem;margin:0">${data.title}</h1>
        <div style="margin:8px 0">
          <span style="font-weight:700;color:#1f2937">$${data.price}</span>
          ${data.discountPercentage ? `<span style="margin-left:8px;color:#dc2626">${data.discountPercentage}% OFF</span>` : ''}
          <div style="font-size:0.95rem;color:#6b7280;margin-top:6px">${data.availabilityStatus || (data.stock > 0 ? 'In Stock' : 'Out of stock')}</div>
        </div>
        <div style="margin:6px 0">⭐ ${data.rating} <small>(${data.rating})</small></div>
        

        <div style="margin-top:14px;font-size:0.95rem;color:#374151">
          <div><strong>Brand:</strong> ${data.brand}</div>
          <div><strong>Category:</strong> ${data.category}</div>
          <div><strong>SKU:</strong> ${`SKU-${data.id}`}</div>
          <div><strong>MOQ:</strong> ${String(data.minimumOrderQuantity || 1)}</div>
        </div>
        <div style="margin-top:12px">
       
         <button id="addToCart" class="view-details block w-full bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700 transition" data-id="${data.id}">
          Add to cart
          </button> 
        </div>
      </div>
    </div>

    <section style="margin-top:18px">
      <h3>Description</h3>
      <p>${data.description}</p>
    </section>

    <section style="margin-top:12px">
      <h3>Specifications</h3>
      <ul>
        <li><strong>Weight:</strong> ${String(data.weight || '—')} g</li>
        <li><strong>Dimensions (W×H×D):</strong> ${String(data.dimensions?.width || '—')} × ${String(data.dimensions?.height || '—')} × ${escape(String(data.dimensions?.depth || '—'))}</li>
        <li><strong>Warranty:</strong> ${data.warrantyInformation || '—'}</li>
        <li><strong>Shipping:</strong> ${data.shippingInformation || '—'}</li>
        <li><strong>Return:</strong> ${data.returnPolicy || '—'}</li>
      </ul>
    </section>
  <section style="margin-top:12px">
      <h3>Meta</h3>
      <div>Created: ${data.meta.createdAt}</div>
      <div>Updated: ${data.meta.updatedAt}</div>
      <div>Barcode: ${data.meta?.barcode || '—'}</div>
      ${data.meta?.qrCode ? `<div style="margin-top:8px"><img src="${data.meta.qrCode}" alt="QR" style="width:120px"></div>` : ''}
    </section>

    <section style="margin-top:18px">
      <h3>Reviews (${(data.reviews || []).length})</h3>
      ${(data.reviews || []).map(r => `
        <div style="border-top:1px solid #e5e7eb;padding:12px 0">
          <div style="font-weight:600">${r.reviewerName || 'Anonymous'} <small style="color:#6b7280">• ${r.date}</small></div>
          <div style="color:#f59e0b">${r.rating}</div>
          <div style="margin-top:6px">${r.comment}</div>
        </div>
      `).join('')}
    </section>
   `
   let count = 0
   let btn = document.querySelector("#addToCart")
   btn.addEventListener("click", function () {
     alert("Thisa product add to yor cart")
    
   })
  }
  getproductsdetails()

