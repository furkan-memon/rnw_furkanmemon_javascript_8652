

let cardsContainer = document.getElementById('recipe-cards-container');
let Fetchingtext = document.querySelector(".Fetching-text"); 
let placeholdertext = document.querySelector(".placeholder-text");
let recipeCard = document.querySelector("#recipeCard");
let recipeNameElement = document.querySelector("#recipeName"); 
let recipeImageElement = document.querySelector("#recipeImage");
let recipeIngredientsElement = document.querySelector("#recipeIngredients");
let recipeInstructionsElement = document.querySelector("#recipeInstructions");


async function fetchAndRenderCards() {
    
    Fetchingtext.textContent = "Loading recipes...";
    Fetchingtext.style.display = "block";
    if (placeholdertext) placeholdertext.style.display = "none";
    recipeCard.style.display = "none"; 

    try {
        let response = await fetch("https://dummyjson.com/c/f44d-893b-4f7e-8868");

        if (!response.ok) {
            throw new Error(`Server responded with status: ${response.status}`);
        }
        let info = await response.json();
        Fetchingtext.style.display = "none"; 
        if (info.recipes && Array.isArray(info.recipes)) {
            placeholdertext.style.display = "block";
            return info.recipes;
        } else {
            throw new Error("Invalid data format: 'recipes' array not found.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        Fetchingtext.textContent = `Error: ${error.message}. Failed to load recipes.`;
        Fetchingtext.style.display = "block";
        if (placeholdertext) placeholdertext.style.display = "none";

        return null; 
    }
}
function showrecipe(recipe) {
    if (!recipe) {
        Fetchingtext.textContent = "Recipe not found.";
        Fetchingtext.style.display = "block";
        recipeCard.style.display = "none";
        return;
    }

    Fetchingtext.style.display = "none";
    if (placeholdertext) placeholdertext.style.display = "none";
    recipeCard.style.display = "block"; 
    recipeNameElement.textContent = recipe.name; 
    recipeImageElement.src = recipe.image_full_url; 
    recipeIngredientsElement.innerHTML = recipe.ingredients 
        .map(item => `<li>${item}</li>`)
        .join('');

    if (Array.isArray(recipe.instructions)) {
         recipeInstructionsElement.textContent = recipe.instructions.join('\n\n');
    } else {
         recipeInstructionsElement.textContent = recipe.instructions; 
    }
} 
async function initRecipeHub() {
    let recipes = await fetchAndRenderCards();
    
    if (!recipes) {
        return; 
    }
    cardsContainer.addEventListener("click", (event) => {
        let clickedCard = event.target.closest('.recipe-card');
        
        if (clickedCard) {
            let recipeId = parseInt(clickedCard.getAttribute('data-id'));
            let selectedRecipe = recipes.find(r => r.id === recipeId);
            showrecipe(selectedRecipe);
            document.querySelectorAll('.recipe-card').forEach(card => card.classList.remove('active'));
            clickedCard.classList.add('active');
        }
    });
    
}


initRecipeHub();