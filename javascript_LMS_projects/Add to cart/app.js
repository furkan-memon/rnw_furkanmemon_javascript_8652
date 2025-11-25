let productData = []
const Product = async function(){
    let res = await fetch("https://dummyjson.com/products")
    let data = await res.json()
    productData =   Array.isArray(data.products) ? data.products : []
    renderproducts()
}
Product()
const CARD_SAVE_DATA = "apiproducts"
const getdata = function(){
    let res = localStorage.getItem(CARD_SAVE_DATA)
    try{
        return res ? JSON.parse(res):[]
    }
    catch{
        console.error("error")
    }
}
const setdata = function(card_data){
    localStorage.setItem(CARD_SAVE_DATA,JSON.stringify(card_data))
}
const cleardata = function(){
    if(confirm("Are you sure you want to remove this item")){
        localStorage.removeItem(CARD_SAVE_DATA)
    }

}
const renderproducts = function(){
  const container = document.querySelector("#product-list")
   
    if(!container) return
    if(!Array.isArray(productData) || productData.length === 0 )
    {
         container.innerHTML = "<p>No products to show.</p>";
         return
    }
    container.innerHTML = "";
    productData.slice(0,12).forEach((p)=> {
           if (!p) return;
        const card = document.createElement("div")
        card.className = "product-card border rounded overflow-hidden shadow-sm m-2"
         card.dataset.id = p.id; 
           card.innerHTML = `
      <img src="${(p.thumbnail)}" alt="${(p.title || '')}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-900 truncate">${(p.title)}</h3>
        <p class="text-gray-500 mt-1 capitalize">${(p.category || '')}</p>
        <div class="flex items-center justify-between mt-3">
          <span class="text-xl font-bold text-indigo-600">$${Number(p.price || 0).toFixed(2)}</span>
          ${p.discountPercentage ? `<span class="text-sm text-red-600">${(String(p.discountPercentage))}% OFF</span>` : ''}
        </div>
        <p class="text-sm text-yellow-600 mt-1">⭐ ${(String(p.rating ?? 'N/A'))}</p>
        <div class="mt-4 flex gap-2">
          <a href="details.html?id=${encodeURIComponent(p.id)}" class="view-details block w-full bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700 transition" data-id="${p.id}">
            View Details
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
    })
}