$(document).ready(function(){
    var querURL = "https://api.edamam.com/api/nutrition-data?app_id=5ead88e3&app_key=240a6099b8c480cc32a290d4210f9b46&ingr=1%20large%20apple%22"

    $.ajax({
        method: "GET",
        url: querURL
    }).done(function(response) {
    for (i = 0; i < response.totalNutrients.lenght; i++){
        var ingredientNutrients = response.totalNutrients[i];
        console.log(ingredientNutrients);
        
    }
        
    });
    
})  

    