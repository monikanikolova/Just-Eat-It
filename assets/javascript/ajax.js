
      var recipes = [" "];
      
      $("#search-p").on("click", function(event){
        
        event.preventDefault();
        
        // grabs the text from the search box
        var recipe = $("#search-p").val().trim();


        recipes.push(recipe);
        
        
        
      }
        
        
  
      
        
   