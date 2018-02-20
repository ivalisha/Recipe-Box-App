var app = angular.module('recipeBoxApp', [])
 .controller('recipeBoxCtrl', function($scope) {
  
  // Create the initial recipe list from local storage. 
 $scope.saved = localStorage.getItem('_username_recipebox');
  // If localstorage has a value for my key, grab that. If not, create a new local storage item.
  $scope.recipeList = (localStorage.getItem('_username_recipebox')!==null) ? JSON.parse($scope.saved) : [{
   title: "Pizza",
   ingredients: "Cheese, Ham, Tomato"
  }, {
   title: "Ice-cream",
   ingredients: "Milk, Chocolate, Sugar"
  }, {
   title: "Cheesecake",
   ingredients: "Milk, cream, buscuits, sugar"
  }, {
   title: "Cake",
   ingredients: "Milk, eggs, vanilla, chocolate"
  }];

  
  localStorage.setItem('_msecrist_recipebox', JSON.stringify($scope.recipeList));

  //Allow a user to add a recipe.
  $scope.addRecipe = function() {
   if ($scope.newRecipe != null && $scope.newIngredients != null) {
    //Push the recipe to the array of recipes, and then save that to localstorage.
    $scope.recipeList.push({
     title: $scope.newRecipe,
     ingredients: $scope.newIngredients
    })
    localStorage.setItem('_msecrist_recipebox', JSON.stringify($scope.recipeList));
    $scope.newRecipe = null;
    $scope.newIngredients = null;
   }
  }

  //delte recipe
 
  $scope.deleteRecipe = function(index) {

    $scope.recipeList.splice(index, 1);
    localStorage.setItem('_msecrist_recipebox', JSON.stringify($scope.recipeList));

  }


  //edit recipe

  $scope.editRecipe = function(index) {

    var ingredients = $scope.recipeList[index].ingredients;
    var result = prompt("Edit the ingredients: ", ingredients)

    if(result != null) {

      $scope.recipeList[index].ingredients = result;
      localStorage.setItem('_username_recipebox', JSON.stringify($scope.recipeList));
   }

  }



   });

//jQuery for Collapsible area 
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });