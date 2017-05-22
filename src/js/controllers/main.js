'use strict';

angular.module("recipeApp")
.controller('mainCtrl', function($scope, dataService) {
	
	$scope.addIngr = function() {
		var ingr = { 
			name: "Name", 
			quantity: "Quantity"
		};
		$scope.ingrs.unshift(ingr); //use ingrs.push to add to end of list 
	}
	
	$scope.addDirec = function() {
		var direc =  "Next step";
		$scope.direcs.push(direc);
	}
	
	$scope.slideShift = function(daClass) {
		var slideIn = document.querySelector('.' + daClass + '');
		var slideOut = document.querySelector('.active');
		if (slideIn.classList.contains('inactive')) {
			slideOut.classList.remove('active');
			slideOut.classList.add('inactive');
			slideIn.classList.remove('inactive');
			slideIn.classList.add('active');
		}
	}
	
	dataService.getRecipes(function(response) {
		console.log(response.data);
		$scope.recipes = response.data;
		for(var i = 0; i < $scope.recipes.length; i++) {
			$scope.ingrs = response.data[i].ingrs;
			$scope.direcs = response.data[i].direcs;
		}
		console.log($scope.ingrs);
		console.log($scope.direcs);
	});
	
/*
	dataService.getIngrs(function(response) {
		console.log(response.data);
		$scope.ingrs = response.data;
	});
	
	dataService.getDirecs(function(response) {
		console.log(response.data);
		$scope.direcs = response.data;
	});
*/
	
	$scope.deleteIngr = function(ingr, $index) {
		dataService.deleteIngr(ingr);
		$scope.ingrs.splice($index, 1);
	}
	
	$scope.deleteDirec = function(direc, $index) {
		dataService.deleteDirec(direc);
		$scope.direcs.splice($index, 1);
	}
	
	$scope.saveRecipe = function(recipe) {
		dataService.saveRecipe(recipe);
	}
	
	$scope.saveIngr = function(ingr) {
		dataService.saveIngr(ingr);
	}
	
	$scope.saveDirec = function(direc) {
		dataService.saveIngr(direc);
	}
	
	$scope.addToCookbook = function() {
		dataService.addToCookbook();
	}
});
