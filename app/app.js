var app = angular.module('tester', ['ngRoute']);
app.factory("services", ['$http', function($http) {
  var serviceBase = 'services/'
    var obj = {};
    obj.getshows = function(){
        return $http.get(serviceBase + 'shows');
    }
    obj.getallseats = function(){
        return $http.get(serviceBase + 'allseats');
    }
    obj.getmovies = function(alltimings){
        return $http.post(serviceBase + 'movies',alltimings);
    }
    obj.bookseats = function(items){
        return $http.post(serviceBase + 'seatsbook',items);
    }
    obj.getshowseats = function(search_data){
        return $http.get(serviceBase + 'showseats?moveid='+search_data['seatid']+'&showdate='+search_data['selectdate']);
    }
    return obj;
}]);

app.controller('listCtrl', function ($scope, services) {
    services.getshows().then(function(data){
        $scope.allshow = data.data;
    });
    
    $scope.alltimings={};
    $scope.moviedetail = {};
    $scope.searchData = function(alltimings){
    	var show_time = alltimings.selectone;
    	var booking_date = alltimings.selectdate;
    	
    	services.getmovies(alltimings).then(function(data){
    		//console.log(data);
            $scope.moviedetail = data.data;
        });
    
	    $scope.showdetail_seat = function(seatid,selectdate){
	    	services.getallseats().then(function(data){
	            $scope.allseats = data.data;
	        });
	    	
	    	var search_data = {'seatid': seatid, 'selectdate': selectdate};
	    	services.getshowseats(search_data).then(function(data){
	            $scope.seatdetail = {axx: data.data};
	    		//console.log($scope.seatdetail);
	            $scope.isExist = function(id){
	    	        return $scope.seatdetail.axx.map(function(type){
	    	        	return type.seat_no;
	    	        }).indexOf(id);
	    	    }
	        }); 
	    	//$scope.items = [];
	    	$scope.items={ seatPlaceholder: [],seatId: [],namefields: [],emailfields: [],movie: [],bdate: [] };
	    	
	    	$scope.addSelection = function($event, id, seatname){
	    		var checkbox = $event.target;
	    		var action = (checkbox.checked ? 'add' : 'remove');
	    		
	              $scope.items.seatPlaceholder.push(seatname);
	              $scope.items.seatId.push(id);
	              $scope.items.movie.push(show_time);
	              $scope.items.bdate.push(booking_date);
	              $scope.items.namefields.push('');
	              $scope.items.emailfields.push('');
	              //console.log($scope.items);
	    	};
	    	
	    	$scope.sellTickit= function(items){
	        	console.log(items);
	        	
//	    		angular.forEach(items, function(value, key) {
//	    			console.log(key + ': ' + value);
//	    		});
	        };
	    };
    };
    
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        title: 'Lists',
        templateUrl: 'templates/basic.html',
        controller: 'listCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);