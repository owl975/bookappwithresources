angular.module('BookAppWithResources', ['ngResource'])

.controller('BooksCtrl', function ($scope, Book){

		$scope.book = Book.get({ id : 527});

		$scope.books = Book.query();

		$scope.allBooks = Book.query(function(data) {
      console.log(data);
    }); //query() returns all the books

		$scope.newBook = {"title":"Hela Awesome Bitches!!!","author":"Tara","image":"","release_date":"May 11, 2008"};
		Book.save($scope.newBook, function(data) {
      	console.log(data);
    	});

});

