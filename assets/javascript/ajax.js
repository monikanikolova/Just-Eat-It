$(document).ready(function() {

  AOS.init();
// This .on("click") function will trigger the AJAX Call
$("#find-recipe").on("click", function (event) {

  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();

  $('.hide').hide();
  // Here we grab the text from the input box
  var recipe = $("#recipe-input").val();

  var queryURL = "https://api.edamam.com/search?q=" + recipe + "&app_id=" + config.appID + "&app_key=" + config.MY_KEY + "&from=0&to=9&";

  // Performing an AJAX request with the queryURL//
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function (response) {
      for (var i = 0; i < response.hits.length; i++) {

        //Get recipe name from ajax call//
        console.log("Recipe: " + response.hits[i].recipe.label);
        var recipe = response.hits[i].recipe.label;
        var showRecipe = $("<p>").text("Recipe: " + recipe);

        //Get picture of recipe from ajax call//
        console.log("Picture: " + response.hits[i].recipe.image);
        var recipeImageUrl = response.hits[i].recipe.image;
        var recipeImage = $("<img>").attr("src", recipeImageUrl);

        //get servings from ajax call//
        console.log("Servings: " + response.hits[i].recipe.yield);
        var servings = response.hits[i].recipe.yield;
        var showServings = $("<p>").text("Servings: " + servings);

        //get calories from ajax call //
        console.log("Calories: " + response.hits[i].recipe.calories);
        var calories = response.hits[i].recipe.calories;
        var showCalories = $("<p>").text("Calories: " + Math.floor(calories));

        //get diet labels from ajax call //
        console.log("Diet Labels: " + response.hits[i].recipe.dietLabels);
        var dietLabel = response.hits[i].recipe.dietLabels;
        var showDiet = $("<p>").text("Diet: " + dietLabel);

        //get health labels from ajax call//
        console.log("Health Labels: " + response.hits[i].recipe.healthLabels);
        var healthLabel = response.hits[i].recipe.healthLabels;
        var showHealth = $("<p>").text("Health: " + healthLabel);

        // get ingredients from ajax call//
        console.log(response.hits[i].recipe.ingredientLines);
        var ingredients = response.hits[i].recipe.ingredientLines;
        var showIngredients = $("<p>").text("Ingredients: " + ingredients);

        //get ingredients from ajax call//
        console.log("From: " + response.hits[i].recipe.source);
        var source = response.hits[i].recipe.source;
        var showSource = $("<p>").text("Source: " + source);

        //get recipe URL from ajax call//
        console.log("Go to Recipe: " + response.hits[i].recipe.url);
        var recipeUrl = response.hits[i].recipe.url;
        var showRUrl = $("<p>").text("Go to Recipe: " + recipeUrl);


        console.log("+++++++++++++++++++++++++++++");


        var newCard = `<div class='card shadow p-3 mb-5 bg-white rounded' style='width:18rem'>
          <div class='card-body' width='270px'>
            <img src=${recipeImageUrl} class='card-img-top' alt=${recipe} width='25%' height='auto'>
              <h5 class='card-title'>${recipe}</h5>
              <a class='btn btn-outline-success' href=${recipeUrl} role='button'>See More</a>
              <a class="btn btn-outline-success" href="#" role="button">Link</a>
              <p class='card-text'><small class='text-muted'>Servings: ${servings}</small></p>
              <p class='card-text'><small class='text-muted'>Calorie: ${Math.floor(calories)}</small></p>
          </div>
        </div>`
        
        $('#card-container').append(newCard);
      }
    }) 
  })
});