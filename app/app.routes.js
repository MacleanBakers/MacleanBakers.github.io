app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/components/home/homeView.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .when('/coding', {
                templateUrl: 'app/shared/templates/items.html',
                controller: 'codingController',
                controllerAs: 'Food'
            })
            .when('/experience', {
                templateUrl: 'app/shared/templates/items.html',
                controller: 'experienceController',
                controllerAs: 'Recipes'
            })
            .when('/blog', {
                templateUrl: 'app/shared/templates/items.html',
                controller: 'blogController',
                controllerAs: 'Blog'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }])
