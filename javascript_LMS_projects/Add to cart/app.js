
let productData = [];
const CARD_SAVE_DATA = "apiproducts";
const CART_KEY = "shoppingCart";



const getdata = function (key = CARD_SAVE_DATA) {
    let res = localStorage.getItem(key);
    try {
        return res ? JSON.parse(res) : [];
    }
    catch (e) {
        console.error(`Error parsing stored data for key "${key}"`, e);
        return [];
    }
};

const setdata = function (card_data, key = CARD_SAVE_DATA) {
    localStorage.setItem(key, JSON.stringify(card_data));
};

const cleardata = function () {
    if (confirm("Are you sure you want to remove all saved product list data?")) {
        localStorage.removeItem(CARD_SAVE_DATA);
    }
};


const Product = async function () {
    try {

        let res = await fetch("https://dummyjson.com/products");
        let data = await res.json();
        productData = Array.isArray(data.products) ? data.products : [];
        
     
        setdata(productData, CARD_SAVE_DATA); 
        
        renderproducts();
    } catch (err) {
        console.error('fetch products error', err);
        const storedData = getdata(CARD_SAVE_DATA);
        if (storedData.length > 0) {
            productData = storedData;
            renderproducts();
        } else {
            const container = document.querySelector("#product-list");
            if (container) container.innerHTML = "<p>Failed to fetch products and no cached data available.</p>";
        }
    }
};

const renderproducts = function () {
    const container = document.querySelector("#product-list");
    if (!container) return;
    
    if (!Array.isArray(productData) || productData.length === 0) {
        container.innerHTML = "<p>No products to show.</p>";
        return;
    }
    
    container.innerHTML = "";
    
    productData.slice(0, 12).forEach((p) => {
        if (!p) return;
        const card = document.createElement("div");
       
        card.className = "product-card bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 m-2 cursor-pointer";
        card.dataset.id = p.id;
        
        const price = Number(p.price || 0).toFixed(2);
        const discount = p.discountPercentage ? `<span class="text-sm text-red-600 font-medium">${(String(p.discountPercentage))}% OFF</span>` : '';
        const rating = String(p.rating ?? 'N/A');
        
        card.innerHTML = `
            <img src="${((p.images?.[0] || p.thumbnail) || '')}" alt="${(p.title || '')}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900 truncate">${(p.title || '')}</h3>
                <p class="text-gray-500 mt-1 capitalize">${(p.category || '')}</p>
                <div class="flex items-center justify-between mt-3">
                    <span class="text-xl font-bold text-indigo-600">$${price}</span>
                    ${discount}
                </div>
                <p class="text-sm text-yellow-600 mt-1">⭐ ${rating}</p>
                <div class="mt-4 flex gap-2">
                    <button class="view-details-btn block w-full bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700 transition" data-id="${p.id}">
                        View Details
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => handleDetailsNavigation(e.currentTarget.dataset.id));
    });
};

const handleDetailsNavigation = function(id) {
    const product = productData.find(p => String(p.id) === String(id));
    if (!product) {
        console.warn("Product not found for id", id);
        return;
    }
    try {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "details.html";
    } catch (err) {
        console.error("Failed to save selectedProduct:", err);
    }
};

function getproductsdetails() {
    const productdetails = document.querySelector("#product-details");
    if (!productdetails) return;

    const productRaw = localStorage.getItem("selectedProduct");
    if (!productRaw) {
        productdetails.innerHTML = "<p>No product selected.</p>";
        return;
    }

    let data;
    try {
        data = JSON.parse(productRaw);
    } catch (err) {
        console.error("Failed to parse selectedProduct:", err);
        productdetails.innerHTML = "<p>Invalid product data.</p>";
        return;
    }

   
    const mainImage = ((data.images && data.images[0]) || data.thumbnail || '');
    const title = (data.title || '');
    const description = (data.description || '');
    const price = (typeof data.price === 'number') ? data.price.toFixed(2) : (String(data.price || '0'));
    const discount = data.discountPercentage ? `<span style="margin-left:8px;color:#dc2626">${(String(data.discountPercentage))}% OFF</span>` : '';
    const availability = (data.availabilityStatus || (data.stock > 0 ? 'In Stock' : 'Out of stock'));
    const rating = (String(data.rating ?? 'N/A'));
    const sku = (data.sku || `SKU-${data.id}`);
    const weight = data.weight !== undefined ? (String(data.weight)) + ' g' : '—';
    const dims = data.dimensions ? `${(String(data.dimensions.width || '—'))} × ${(String(data.dimensions.height || '—'))} × ${(String(data.dimensions.depth || '—'))}` : '—';
    const created = data.meta?.createdAt ? ((new Date(data.meta.createdAt)).toLocaleString()) : '—';
    const updated = data.meta?.updatedAt ? ((new Date(data.meta.updatedAt)).toLocaleString()) : '—';
    const barcode = (data.meta?.barcode || '—');
    const qr = data.meta?.qrCode ? `<div style="margin-top:8px"><img src="${(data.meta.qrCode)}" alt="QR" style="width:120px"></div>` : '';
    const reviews = data.reviews || [];


    productdetails.innerHTML = `
        <div class="top grid" style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:1000px;margin:0 auto;">
            <div class="gallery">
                <img src="${mainImage}" alt="${title}" style="width:100%;height:320px;object-fit:cover;border-radius:6px">
            </div>
            <div class="info p-4">
                <h1 style="font-size:1.8rem;margin:0">${title}</h1>
                <div style="margin:8px 0">
                    <span style="font-weight:700;color:#1f2937;font-size:1.5rem">$${price}</span>
                    ${discount}
                    <div style="font-size:0.95rem;color:#6b7280;margin-top:6px">${availability}</div>
                </div>
                <div style="margin:6px 0">⭐ ${rating} <small style="color:#6b7280">(${reviews.length} Reviews)</small></div>
                <div style="margin-top:14px;font-size:0.95rem;color:#374151">
                    <div><strong>Brand:</strong> ${(data.brand || '')}</div>
                    <div><strong>Category:</strong> ${(data.category || '')}</div>
                    <div><strong>SKU:</strong> ${sku}</div>
                    <div><strong>MOQ:</strong> ${(String(data.minimumOrderQuantity || 1))}</div>
                </div>
                <div style="margin-top:12px">
                    <button id="addToCart" class="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition" data-id="${data.id}">
                        Add to Cart
                    </button> 
                </div>
            </div>
        </div>

        <section style="margin-top:30px;max-width:1000px;margin:30px auto 0;">
            <h3 style="font-size:1.4rem;font-weight:600;border-bottom:2px solid #e5e7eb;padding-bottom:5px">Description</h3>
            <p style="margin-top:10px">${description}</p>
        </section>

        <section style="margin-top:20px;max-width:1000px;margin:20px auto 0;">
            <h3 style="font-size:1.4rem;font-weight:600;border-bottom:2px solid #e5e7eb;padding-bottom:5px">Specifications</h3>
            <ul style="list-style:disc;margin-left:20px;margin-top:10px;line-height:1.8;">
                <li><strong>Weight:</strong> ${weight}</li>
                <li><strong>Dimensions (W×H×D):</strong> ${dims} cm</li>
                <li><strong>Warranty:</strong> ${(data.warrantyInformation || '—')}</li>
                <li><strong>Shipping:</strong> ${(data.shippingInformation || '—')}</li>
                <li><strong>Return Policy:</strong> ${(data.returnPolicy || '—')}</li>
            </ul>
        </section>

        <section style="margin-top:20px;max-width:1000px;margin:20px auto 0;">
            <h3 style="font-size:1.4rem;font-weight:600;border-bottom:2px solid #e5e7eb;padding-bottom:5px">Meta Data</h3>
            <div style="margin-top:10px;line-height:1.6;">
                <div><strong>Created:</strong> ${created}</div>
                <div><strong>Updated:</strong> ${updated}</div>
                <div><strong>Barcode:</strong> ${barcode}</div>
                ${qr}
            </div>
        </section>

        <section style="margin-top:20px;max-width:1000px;margin:20px auto 0;">
            <h3 style="font-size:1.4rem;font-weight:600;border-bottom:2px solid #e5e7eb;padding-bottom:5px">Reviews (${reviews.length})</h3>
            <div style="margin-top:10px">
                ${reviews.map(r => `
                    <div style="border-top:1px solid #e5e7eb;padding:12px 0">
                        <div style="font-weight:600">${(r.reviewerName || 'Anonymous')} <small style="color:#6b7280">• ${r.date ? ((new Date(r.date)).toLocaleString()) : ''}</small></div>
                        <div style="color:#f59e0b">Rating: ${(String(r.rating))} / 5</div>
                        <div style="margin-top:6px">${(r.comment || '')}</div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;


    const addBtn = productdetails.querySelector('#addToCart');
    if (addBtn) {
        addBtn.addEventListener('click', () => handleAddToCart(data));
    }
}

const handleAddToCart = function(data) {
    try {
        const raw = localStorage.getItem(CART_KEY);
        const cart = raw ? JSON.parse(raw) : [];
        
        const exists = cart.find(i => String(i.id) === String(data.id));
        
        if (exists) {
      
            exists.quantity = (exists.quantity || 1) + 1;
        } else {
           
            cart.push({ 
                id: data.id, 
                title: data.title, 
                price: data.price, 
                thumbnail: data.thumbnail, 
                quantity: 1 
            });
        }
        
        setdata(cart, CART_KEY);
        alert(`${data.title} added to your cart!`);
        updateCartCountHeader();
    } catch (err) {
        console.error('Cart error', err);
        alert('Failed to add to cart');
    }
};



function updateCartCountHeader() {
    const cart = getdata(CART_KEY);
    const count = cart.length; 
    const countElement = document.querySelector('#cart-count');
    if (countElement) {
        countElement.textContent = count > 0 ? count : '';
        countElement.classList.toggle('hidden', count === 0);
    }
}

function calculateCartTotal() {
    const cart = getdata(CART_KEY);
    const total = cart.reduce((acc, item) => acc + (Number(item.price || 0) * Number(item.quantity || 1)), 0);
    const totalElement = document.querySelector('#cart-total');
    if (totalElement) {
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
    return total;
}

function renderCartItems() {
    const wrap = document.querySelector('#cart-items-container');
    if (!wrap) return;

    const cart = getdata(CART_KEY);
    
    if (cart.length === 0) {
        wrap.innerHTML = '<p class="text-lg text-gray-500">Your cart is empty. <a href="index.html" class="text-indigo-600 hover:underline">Start shopping!</a></p>';
        calculateCartTotal();
        return;
    }
    
    wrap.innerHTML = cart.map(item => {
        const itemTotal = (Number(item.price || 0) * Number(item.quantity || 1)).toFixed(2);
        return `
            <div class="flex items-center justify-between border-b py-4 gap-4" data-id="${(String(item.id))}">
                <img src="${(item.thumbnail || '')}" alt="${(item.title)}" class="w-16 h-16 object-cover rounded-md">
                <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-lg truncate">${(item.title)}</h3>
                    <p class="text-gray-600">$${Number(item.price || 0).toFixed(2)} each</p>
                </div>

                <div class="flex items-center space-x-2 text-lg">
                    <button class="quantity-control decrement text-red-500 hover:text-red-700 font-bold px-2 py-1" data-id="${(String(item.id))}" data-change="-1">–</button>
                    <span class="w-6 text-center">${(String(item.quantity || 1))}</span>
                    <button class="quantity-control increment text-green-500 hover:text-green-700 font-bold px-2 py-1" data-id="${(String(item.id))}" data-change="1">+</button>
                </div>

                <div class="text-right font-bold w-20">
                    $${itemTotal}
                </div>
            </div>
        `;
    }).join('');
    

    document.querySelectorAll('.quantity-control').forEach(btn => {
        btn.addEventListener('click', handleQuantityChange);
    });

    calculateCartTotal();
}

const handleQuantityChange = function(e) {
    const button = e.currentTarget;
    const id = button.dataset.id;
    const change = parseInt(button.dataset.change);
    
    let cart = getdata(CART_KEY);
    const index = cart.findIndex(item => String(item.id) === String(id));
    
    if (index !== -1) {
        cart[index].quantity += change;
        
 
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        
        setdata(cart, CART_KEY);
        renderCartItems(); 
        updateCartCountHeader();
    }
};



document.addEventListener("DOMContentLoaded", function () {
    updateCartCountHeader();
    

    const page = window.location.pathname.split('/').pop();

    if (page === 'index.html' || page === '') {
        Product(); 
    } else if (page === 'details.html') {
        getproductsdetails(); 
    } else if (page === 'cart.html') {
        renderCartItems(); 
        

        const buyButton = document.getElementById('checkout-button');
        if (buyButton) {
             buyButton.addEventListener('click', () => {
                alert('Checkout initiated! (No backend required)');
             
            });
        }
    }
});