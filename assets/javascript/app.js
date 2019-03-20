
$(document).ready(function () {
    $(".result-title").hide();
    $("#recipe-view").hide();
    AOS.init();
    $("#recipe-input").keypress(function (event) {
        var inputValue = event.charCode;
        if (!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) {
            event.preventDefault();
        }
    });
    // This .on("click") function will trigger the AJAX Call
    $("#find-recipe").on("click", function (event) {
        $(".result-title").show();
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();
        $(".hide").hide();
        // Here we grab the text from the input box

        var recipeInput = $("#recipe-input").val();

        var queryURL = "https://api.edamam.com/search?q=" + recipeInput + "&app_id=12891585&app_key=e740541b89635a989cf795bf01193e13&from=0&to=12&";

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

                    //Get picture of recipe from ajax call//
                    console.log("Picture: " + response.hits[i].recipe.image);
                    var recipeImageUrl = response.hits[i].recipe.image;

                    //get servings from ajax call//
                    console.log("Servings: " + response.hits[i].recipe.yield);
                    var servings = response.hits[i].recipe.yield;

                    //get calories from ajax call //
                    console.log("Calories: " + Math.floor(response.hits[i].recipe.calories));
                    var calories = Math.floor(response.hits[i].recipe.calories);

                    //get diet labels from ajax call //
                    console.log("Diet Labels: " + response.hits[i].recipe.dietLabels);
                    var dietLabel = response.hits[i].recipe.dietLabels;

                    //get health labels from ajax call//
                    console.log("Health Labels: " + response.hits[i].recipe.healthLabels);
                    var healthLabel = response.hits[i].recipe.healthLabels;

                    // get ingredients from ajax call//
                    console.log(response.hits[i].recipe.ingredientLines);
                    var ingredients = response.hits[i].recipe.ingredientLines;

                    //get ingredients from ajax call//
                    console.log("From: " + response.hits[i].recipe.source);
                    var source = response.hits[i].recipe.source;

                    //get recipe URL from ajax call//
                    console.log("Go to Recipe: " + response.hits[i].recipe.url);
                    var recipeUrl = response.hits[i].recipe.url;


                    $("#recipe-view").show();

                    var newCard = `<div class="card shadow p-3 m-3 bg-white rounded" style="width:21rem">
                          <div class="card-body" width="270px">
                          <img src=${recipeImageUrl} class="card-img-top shadow" alt=${recipe} width="25%" height="auto">
                            <h5 class="card-title">${recipe}</h5>
                            <a class="btn btn-success" href=${recipeUrl} role="button">See Full Recipe</a> 
                            <p class="card-text"><small class="text-muted">Servings: ${servings}</small></p>
                            <p class="card-text"><small class="text-muted">Calorie: ${calories}</small></p>
                          </div>
                      </div>`
                    $("#recipe-view").append(newCard);
                };
            });

    });

});