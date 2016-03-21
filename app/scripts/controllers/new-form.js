




app.controller('NewFormCtrl', ['$scope', '$formsApi', '$state',


function($scope, $formsApi, $state)
{

	$scope.fields = [];
	$scope.form = {
		name : ''
	};

	$scope.failValidity = false;

	$scope.addField = function()
	{
		$scope.fields.push({
			'label'    : '',
			'question' : '',
			'position' : $scope.fields.length,
			'type'     : '',
			'options'  : []
		});
	}

	$scope.deleteField = function(index)
	{
		$scope.fields.splice(index, 1);

		for (var i = 0; i < $scope.fields.length; i++)
			$scope.fields.position = i;
	}

	$scope.createForm = function()
	{
		var correctFields = true;
		for ( var i = 0; i < $scope.fields.length; i++ )
			correctFields = correctFields || ( $scope.fields[i].type == '' );

		if (!correctFields || !$scope.fieldsForm.$valid)
		{
			$scope.failValidity = true;
			return;
		}

		$scope.failValidity = false;

		$formsApi.createForm($scope.form.name).then(function (createdForm) {
			$formsApi.addFields(createdForm.form_id, $scope.fields).then(function (addedFields) {
				$state.go('dashboard.list-forms');
			});
		});
	}

	$scope.addOption = function (index)
	{
		var display = 'Opcion #' + ($scope.fields[index].options.length + 1);

		$scope.fields[index].options.push({
			'display_option' : display
		});

	}

	$scope.deleteOption = function(i, j)
	{
		$scope.fields[i].options.splice(j, 1);
	}

}]);
