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
    	services.getmovies(alltimings).then(function(data){
    		//console.log(data);
            $scope.moviedetail = data.data;
        });
    };
    
    $scope.showdetail_seat = function(seatid,selectdate){
    	services.getallseats().then(function(data){
    		console.log(data);
            $scope.allseats = data.data;
        });
    	
    	var search_data = {'seatid': seatid, 'selectdate': selectdate};
    	services.getshowseats(search_data).then(function(data){
            $scope.seatdetail = data.data;
        });
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