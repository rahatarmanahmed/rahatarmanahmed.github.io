// lol old jquery code
theDayItAllBegan = new Date(2008, 8, 27).getTime();

$(document).ready(function(){
	$('.name').fitText(0.8, {maxFontSize: '90px'});
	setInterval(function() {
		$('#exp-years').html((((new Date()).getTime() - theDayItAllBegan) / 3.15569e10).toPrecision(9));
	}, 100);
});

// yeah angular! lets go!
angular.module("projects", [])
.controller("ProjectCtrl", function($scope, $http){
	$scope.projects = [];
	$http.get("js/projects.json")
	.then(function(res){
		for(var k=0;k<res.data.length;k++)
		{
			res.data[k].tags = res.data[k].tags.map(function(val){
				return "#"+val
			});
		}
		$scope.projects = res.data;
	});
});