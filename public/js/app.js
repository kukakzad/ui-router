angular.module('todoApp', ['ui.router'])
  .controller('TodoController', ['$scope','$http', function($scope,$http) {

  	$scope.login = function(user,pass){
  		
  		if(user != "admin" || pass != "admin"){
  			$scope.warning = " ID PASS INCORRECT";
  		}
  		else{
  			window.location.assign("./#/manager");
  		}
  	}

  	$scope.addMember = function(name,surname,phone,address){
  		var member = {
  			name 		: name,
  			surname 	: surname,
  			phone 		: phone,
  			address 	: address
  		};

  		$http.get('/addMember',{params : member})
  			.success(function(data){
  				$scope.members = data;
  			})
  			.error(function(data){

  			});

  	

  	}

  }])
  .config(function($stateProvider,$urlRouterProvider){

  	$urlRouterProvider.otherwise('/home');

  	$stateProvider.state('one',{

  		url 			: '/home',
  		templateUrl		: 'home.html'

  	})
  	.state('two',{

  		url 			: '/about',
  		templateUrl 	: 'about.html'

  	})
  	.state('three',{

  		url 			: '/contact',
  		templateUrl 	: 'contact.html'

  	})
  	.state('four',{

  		url 			: '/member',
  		templateUrl 	: 'member.html'

  	})
  	.state('admin',{

  		url 			: '/admin',
  		templateUrl 	: 'admin/admin.html'

  	})
  	.state('manager',{

  		url 			: '/manager',
  		templateUrl 	: 'admin/manager.html'

  	})
  	.state('oneM',{

  		url 			: '/managerHome',
  		templateUrl 	: 'admin/manager.html'

  	})
  	.state('twoM',{

  		url 			: '/managerAbout',
  		templateUrl 	: 'admin/managerAbout.html'

  	})
  	.state('threeM',{

  		url 			: '/managerContact',
  		templateUrl 	: 'admin/managerContact.html'

  	})
  	.state('fourM',{

  		url 			: '/managerMember',
  		templateUrl 	: 'admin/managerMember.html'

  	});

  });