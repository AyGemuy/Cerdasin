angular.module("textAngularTest", ['textAngular']);
	function wysiwygeditor($scope) {
		$scope.orightml = '<h2>Cerdasin!</h2>';
		$scope.htmlcontent = $scope.orightml;
		$scope.disabled = false;
	};
