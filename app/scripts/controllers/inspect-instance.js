




app.controller('InspectInstanceCtrl', ['$scope', '$formsApi', '$stateParams', '$sce',


function($scope, $formsApi, $stateParams, $sce)
{

	$scope.fields = [];

	$scope.prettyFieldTypes = $formsApi.fieldTypeNames;

	$formsApi.inspectInstance($stateParams.instanceId).then(function (data) {
		$scope.fields = data;

		for (var i = 0; i<data.length; i++)
			if ( data[i].descriptor.type == 'LOCATION' )
			{
				$scope.fields[i].value.url = 'https://maps.google.com/maps?q=' + $scope.fields[i].value.lat + ',' + $scope.fields[i].value.lng + '&hl=es&z=14&amp&output=embed';
				$scope.fields[i].value.url = $sce.trustAsResourceUrl($scope.fields[i].value.url);
			}

	});


}]);
