app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
    { 
  	name: 'The Book of Trees', 
  	price: 19, 
  	pubdate: new Date('2014', '03', '08'),
    cover: 'http://goo.gl/gbTkUV',
    likes: 0,
    dislikes: 0
		},
    { 
  	name: 'Program or be Programmed',
  	price: 8,
  	pubdate: new Date('2013', '08', '01'),
    cover: 'http://goo.gl/tl9Q1d',
    likes: 0,
    dislikes: 0
		},
    { 
  	name: 'The Book of Sharks',
  	price: 45,
  	pubdate: new Date('2010', '03', '01'),
    cover: 'http://goo.gl/Y4uqXE',
    likes: 0,
    dislikes: 0
		},
    { 
  	name: 'The Book of Mountains',
  	price: 2.59,
  	pubdate: new Date('2005', '11', '8'),
    cover: 'http://goo.gl/nKnMCL',
    likes: 0,
    dislikes: 0
		}
 	]
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
}]);
