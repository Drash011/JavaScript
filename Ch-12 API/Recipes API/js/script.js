const recipesAPI = "https://dummyjson.com/recipes";

fetch(recipesAPI)
    .then(
        (res) => {
            res.json().then((data) => {
                        console.log(data.recipes);

                        data.recipes.forEach((recipe) => {
                                    allRecipes.innerHTML += `
                    <div class=" mt-5 col-lg-3 col-md-6 col-sm-12">
                        <div class="card" style="width: 18rem;">

                    
                        <img 
                                src="${recipe.image}" 
                                class="card-img-top" 
                                alt="${recipe.name}"
                            >

                            <div class="card-body">
                                <h5 class="card-title">
                                    ${recipe.name}
                                </h5>

                                <ul>
                                    ${recipe.ingredients.map(content => {
                                        return `<li> ${content} </li>`
                                        }
                                        ).join("")}
                                </ul>

                                <a href="#" class="btn btn-primary">
                                    View Recipe
                                </a>
                            </div>

                        </div>
                    </div>
                `;

                });
            });
        }
    ).catch((error) => {
        console.log("Error: ", error);
    }).finally(
        () => {
            console.log('Finnaly Executed...');
        }
    )