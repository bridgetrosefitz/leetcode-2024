/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  // create neighbors
  // create inDegrees

  /*
    
    "bread" "sandwich" "yeast" "flour" "meat"

    "yeast" > "flour" > "meat" > "bread" > "sandwich"
    
    adj = {
        "yeast": ["bread"],
        "flour": ["bread"],
        "bread": []
    }
    
    */
  const adj = {};
  const inDegreesCount = {};

  for (const recipe of recipes) {
    adj[recipe] = [];
    inDegreesCount[recipe] = 0;
  }

  for (const setOfIngredients of ingredients) {
    for (const ingredient of setOfIngredients) {
      adj[ingredient] = [];
      inDegreesCount[ingredient] = 0;
    }
  }

  // for each ingredient, chuck ith recipe in ts neighbors array

  for (let i = 0; i < ingredients.length; i++) {
    for (let j = 0; j < ingredients[i].length; j++) {
      const ingredient = ingredients[i][j];
      const recipe = recipes[i];

      adj[ingredient].push(recipe);
      inDegreesCount[recipe]++;
    }
  }

  const res = [];

  const q = supplies;
  const suppliesSet = new Set(supplies);

  while (q.length) {
    const curr = q.shift();
    if (!suppliesSet.has(curr)) {
      res.push(curr);
    }

    const recipesThatRequireThisIngredient = adj[curr];
    if (!recipesThatRequireThisIngredient) continue;

    for (const recipe of recipesThatRequireThisIngredient) {
      inDegreesCount[recipe]--;
      if (inDegreesCount[recipe] === 0) {
        q.push(recipe);
      }
    }
  }

  return res;

  // generate list
};
