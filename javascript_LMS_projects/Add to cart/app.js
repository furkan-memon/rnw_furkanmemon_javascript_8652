const products = [
    {
        id: 1,
        title: "Wireless Mechanical Keyboard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUaU3wXZaLWfqnseJ0ELHMdxINbkw6NyAjWg&s",
        shortDesc: "TKL, hot-swappable switches, long battery life.",
        fullDesc: "A premium 87-key Tenkeyless mechanical keyboard featuring Gateron Brown switches, RGB backlight, and dual-mode connectivity (Bluetooth 5.0/USB-C). Perfect for work and gaming.",
        price: 99.99
    },
    {
        id: 2,
        title: "Ergonomic Vertical Mouse",
        image: "https://media.wired.com/photos/5b7f5eda2c80eb32627bf125/3:2/w_2560%2Cc_limit/logitech-w.jpg",
        shortDesc: "Reduces wrist strain, high-precision sensor.",
        fullDesc: "Contoured vertical design for optimal wrist and forearm posture. Includes six programmable buttons and an adjustable DPI up to 3200.",
        price: 34.50
    },
    {
        id: 3,
        title: "4K USB-C Monitor",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4MinsFeUGh_x-YC2Z8OUQF35VtLMrl4KJg&s",
        shortDesc: "27-inch, professional color accuracy.",
        fullDesc: "A sleek 27-inch 4K UHD monitor with 99% sRGB coverage, ideal for creative professionals. Features a single USB-C port for power and data.",
        price: 499.00
    },
    {
        id: 4,
        title: "Noise-Cancelling Headphones",
        image: "https://cdn.thewirecutter.com/wp-content/media/2023/09/noise-cancelling-headphone-2048px-0876.jpg",
        shortDesc: "Over-ear, 30-hour battery life, superb audio.",
        fullDesc: "Premium over-ear headphones with industry-leading active noise cancellation. Enjoy crystal-clear audio and a comfortable fit for long listening sessions.",
        price: 199.99
    }
]


const getProductById = (id) => {
    return products.find(p => p.id === parseInt(id));
};

const CART_KEY = 'shoppingCart';

const getCart = () => {
    const cart = localStorage.getItem(CART_KEY);
    try {
        return cart ? JSON.parse(cart) : [];
    } catch (e) {
        console.error("Error parsing cart from localStorage:", e);
        return [];
    }
};

const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};


const updateCartCountUI = () => {
    const cart = getCart();
    const cartItemCount = cart.length; 
    
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
   
        cartCountElement.textContent = cartItemCount > 0 ? cartItemCount : '';
        cartCountElement.classList.toggle('hidden', cartItemCount === 0);
    }
};


const addToCart = (productId) => {
    const cart = getCart();
    const product = getProductById(productId);

    if (!product) {
        console.error("Product not found for ID:", productId);
        return;
    }

    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
       
        existingItem.quantity += 1;
    } else {
     
        cart.push({
            productId: productId,
            quantity: 1,
            basePrice: product.price, 
            title: product.title,
            image: product.image
        });
    }

    saveCart(cart);
    updateCartCountUI();
    alert(`${product.title} added to cart!`);
};


const updateQuantity = (productId, change) => {
    let cart = getCart();
    
    const index = cart.findIndex(item => item.productId === productId);

    if (index !== -1) {
        cart[index].quantity += change;

        if (cart[index].quantity <= 0) {
           
            cart = cart.filter(item => item.productId !== productId);
        }
    }
    
    saveCart(cart);
    updateCartCountUI();
    

    if (document.getElementById('cart-items-container')) {
        renderCartPage(); 
    }
};


 
const getCartTotal = () => {
    const cart = getCart();
    return cart.reduce((total, item) => {
        return total + (item.basePrice * item.quantity);
    }, 0);
};

const renderProductCards = () => {
    const container = document.getElementById('product-list');
    if (!container) return; 


    products.slice(0, 4).forEach(product => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden';
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover">
            <div class="p-5">
                <h3 class="text-xl font-semibold text-gray-900 truncate">${product.title}</h3>
                <p class="text-gray-600 mt-2 h-12 overflow-hidden">${product.shortDesc}</p>
                <p class="text-2xl font-bold text-indigo-600 mt-4">$${product.price.toFixed(2)}</p>
                <a href="details.html?id=${product.id}" class="mt-4 block w-full bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700 transition duration-150">
                    View Details
                </a>
            </div>
        `;
        container.appendChild(card);
    });
};

const renderProductDetails = () => {
    const container = document.getElementById('product-details');
    if (!container) return; 

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) {
        container.innerHTML = '<p class="text-red-500">Product ID not specified.</p>';
        return;
    }

    const product = getProductById(productId);

    if (!product) {
        container.innerHTML = '<p class="text-red-500">Product not found.</p>';
        return;
    }


    container.innerHTML = `
        <div class="flex flex-col lg:flex-row gap-10">
            <div class="lg:w-1/2">
                <img src="${product.image}" alt="${product.title}" class="w-full h-auto rounded-lg shadow-lg">
            </div>
            
            <div class="lg:w-1/2">
                <h2 class="text-4xl font-extrabold text-gray-900 mb-4">${product.title}</h2>
                <p class="text-2xl font-bold text-indigo-600 mb-6">$${product.price.toFixed(2)}</p>
                
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Description</h3>
                <p class="text-gray-700 leading-relaxed mb-8">${product.fullDesc}</p>
                
                <button id="add-to-cart-btn" 
                        data-id="${product.id}"
                        class="w-full lg:w-3/4 bg-green-600 text-white text-lg py-3 rounded-lg hover:bg-green-700 transition duration-150 shadow-md">
                    Add to Cart
                </button>
            </div>
        </div>
    `;


    document.getElementById('add-to-cart-btn').addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.dataset.id);
        addToCart(id);
    });
};



const renderCartPage = () => {
    const cart = getCart();
    const container = document.getElementById('cart-items-container');
    const totalElement = document.getElementById('cart-total');

    if (!container || !totalElement) return; 

    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<p class="text-lg text-gray-500">Your cart is empty. <a href="index.html" class="text-blue-600 hover:underline">Start shopping!</a></p>';
        totalElement.textContent = '$0.00';
        return;
    }

    cart.forEach(item => {
        const itemTotal = item.basePrice * item.quantity;
        
        const cartItemHTML = `
            <div class="flex items-center justify-between border-b py-4 gap-4">
                <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-cover rounded-md">
                <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-lg truncate">${item.title}</h3>
                    <p class="text-gray-600">$${item.basePrice.toFixed(2)} each</p>
                </div>
                
                <div class="flex items-center space-x-2 text-lg">
                    <button class="quantity-control text-red-500 hover:text-red-700 font-bold px-2 py-1" data-id="${item.productId}" data-change="-1">–</button>
                    <span class="w-6 text-center">${item.quantity}</span>
                    <button class="quantity-control text-green-500 hover:text-green-700 font-bold px-2 py-1" data-id="${item.productId}" data-change="1">+</button>
                </div>

                <div class="text-right font-bold w-20">
                    $${itemTotal.toFixed(2)}
                </div>
            </div>
        `;
        container.innerHTML += cartItemHTML;
    });


    totalElement.textContent = `$${getCartTotal().toFixed(2)}`;


    document.querySelectorAll('.quantity-control').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.dataset.id);
            const change = parseInt(e.currentTarget.dataset.change);
            updateQuantity(productId, change);
        });
    });
};




document.addEventListener('DOMContentLoaded', () => {
    updateCartCountUI();
    const page = window.location.pathname.split('/').pop();

    if (page === 'index.html' || page === '') {
        renderProductCards();
    } else if (page === 'details.html') {
        renderProductDetails();
    } else if (page === 'cart.html') {
        renderCartPage();
        
        const buyButton = document.getElementById('buy-button');
        if (buyButton) {
            buyButton.addEventListener('click', () => {
                alert('Checkout initiated! (No actual purchase was made)');
            });
        }
    }
});
