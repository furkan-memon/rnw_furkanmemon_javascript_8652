document.addEventListener("DOMContentLoaded", () => {

  const recipeTitleInput = document.getElementById('recipeTitle');
  const recipeIngredientsInput = document.getElementById('recipeIngredients');
  const recipeInstructionsInput = document.getElementById('recipeInstructions');
  const addRecipeButton = document.getElementById('addBtn');
  const recipeList = document.getElementById('recipeGrid');
  const recipeCuisine = document.getElementById('recipeCuisine');
  const recipeform = document.getElementById('recipe-form-card');
  const recipeimg = document.getElementById('recipeimg');
  const Add = document.getElementById('add');

  let editingId = null;


  if (Add) {
    Add.addEventListener('click', () => {
      recipeList.style.display = "none";
      recipeform.style.display = "flex";
    });
  }

 
  function savelocalRecipes(newRecipe) {
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    if (editingId) {
      recipes = recipes.map(r => r.id === editingId ? newRecipe : r);
      editingId = null;
    } else {
      recipes.push(newRecipe);
    }

    localStorage.setItem('recipes', JSON.stringify(recipes));
  }

  addRecipeButton.addEventListener('click', function (e) {
    e.preventDefault();

    if (
      !recipeTitleInput.value.trim() ||
      !recipeIngredientsInput.value.trim() ||
      !recipeInstructionsInput.value.trim() ||
      !recipeCuisine.value.trim() ||
      !recipeimg.value.trim()
    ) {
      alert("Please Fill All Fields.");
      return;
    }

    savelocalRecipes({
      id: editingId || Date.now().toString(),
      title: recipeTitleInput.value.trim(),
      ingredients: recipeIngredientsInput.value.trim(),
      instructions: recipeInstructionsInput.value.trim(),
      cuisine: recipeCuisine.value.trim(),
      img: recipeimg.value.trim()
    });

    recipeform.style.display = 'none';
    recipeList.style.display = "flex";
    document.getElementById('recipeForm').reset()

    rendaringrecipes();
  });


  function rendaringrecipes() {
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    recipeList.innerHTML = "";

    recipes.forEach(r => {
       if (!r || !r.img) return;
      recipeList.innerHTML += `
        <div class="recipecard">
          <img class="r-image"src="${r.img}" alt="">
          <div style="padding: 10px 20px;">
            <h2>${r.title}</h2>

            <h3>Ingredients</h3>
            <p>${r.ingredients}</p>

            <h3>Instructions</h3>
            <p>${r.instructions}</p>

            <p><strong>Cuisine:</strong> ${r.cuisine}</p>

            <div class="btn">
            <button class="edit" onclick="editinfo('${r.id}')">Edit</button>
              <button class="delete" onclick="deleteinfo('${r.id}')">Delete</button>
              
            </div>
          </div>
        </div>
      `;
    });
  }
  function rendaringFilterrecipes(recipes) {
    

    recipeList.innerHTML = "";

    recipes.forEach(r => {
       if (!r || !r.img) return;
      recipeList.innerHTML += `
        <div class="recipecard">
          <img class="r-image"src="${r.img}" alt="">
          <div style="padding: 10px 20px;">
            <h2>${r.title}</h2>

            <h3>Ingredients</h3>
            <p>${r.ingredients}</p>

            <h3>Instructions</h3>
            <p>${r.instructions}</p>

            <p><strong>Cuisine:</strong> ${r.cuisine}</p>

            <div class="btn">
            <button class="edit" onclick="editinfo('${r.id}')">Edit</button>
              <button class="delete" onclick="deleteinfo('${r.id}')">Delete</button>
              
            </div>
          </div>
        </div>
      `;
    });
  }
window.deleteinfo = function (id) {
  let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

  const index = recipes.findIndex(r => r.id === id);
  if (index === -1) return;

  if (!confirm("Are you sure?")) return;

  recipes.splice(index, 1);

  localStorage.setItem('recipes', JSON.stringify(recipes));
  rendaringrecipes();
};


  window.editinfo = function (id) {
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const recipe = recipes.find(r => r.id === id);

    if (!recipe) return;

    recipeTitleInput.value = recipe.title;
    recipeIngredientsInput.value = recipe.ingredients;
    recipeInstructionsInput.value = recipe.instructions;
    recipeCuisine.value = recipe.cuisine;
    recipeimg.value = recipe.img;

    editingId = id;

    recipeList.style.display = "none";
    recipeform.style.display = "flex";
  };

  rendaringrecipes();
  
  const searchInput = document.getElementById('searchInput');
  const cuisineFilter = document.getElementById('cuisineFilter');

if (!cuisineFilter) {
  console.error("cuisineFilter not found");
  return;
}

cuisineFilter.addEventListener('change', function () {
  const selectedCuisine = cuisineFilter.value.toLowerCase();
  const recipes = JSON.parse(localStorage.getItem('recipes')) || [];

  let filteredRecipes;

  if (selectedCuisine === 'all') {
    filteredRecipes = recipes;
  } else {
    filteredRecipes = recipes.filter(r =>
      r &&
      r.cuisine &&
      r.cuisine.toLowerCase() === selectedCuisine
    );
  }

  rendaringFilterrecipes(filteredRecipes);
});
 

  searchInput.addEventListener('input',function(){
  const recipe = localStorage.getItem('recipes')
    ? JSON.parse(localStorage.getItem('recipes'))
    : [];
  let inp =  searchInput.value.trim().toLowerCase()
    recipeList.innerHTML = "";
    filteredRecipes = recipe.filter(r =>
      r &&
      r.title &&
      r.title.toLowerCase() === searchInput
    );
   rendaringFilterrecipes(recipe.filter(r => r && r.title.toLowerCase().includes(inp) || r.cuisine.toLowerCase().includes(inp)));
});


});
