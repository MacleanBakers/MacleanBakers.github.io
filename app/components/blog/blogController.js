/**
 * Created by danny on 7/6/16.
 */

app.controller('blogController', function($scope, $log, $http) {

    $scope.page = new Page('blog', {
        url: "https://api.github.com/repos/MacleanBakers/blog/contents",
        itemName: 'post'
    });

    Post.all($http, $scope.page, function (posts) {
        $scope.page.items = posts;
    });
});
