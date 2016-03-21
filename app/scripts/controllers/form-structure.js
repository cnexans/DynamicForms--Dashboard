




app.controller('FormStructureCtrl', ['$scope', '$formsApi', '$stateParams',


function($scope, $formsApi, $stateParams)
{

	$scope.fields = [];

	$scope.prettyFieldTypes = $formsApi.fieldTypeNames;

	$formsApi.formStructure($stateParams.formId).then(function (data) {
		$scope.fields = data;
	});


}]);
