




app.controller('EditUserCtrl', ['$scope', '$formsApi', '$stateParams',


function($scope, $formsApi, $stateParams)
{
	$scope.showAlert        = false;
	$scope.validationTitle  = '';
	$scope.successRegistration = false;
	$scope.validationFailed    = false;

	$scope.user = {
		'id'     : 0,
		'email'  : '',
		'name'   : ''
	};

	$formsApi.userInfo($stateParams.userId).then(function (data) {
		$scope.user = data;
	});

	$scope.validationError = '';

	$scope.editUser = function()
	{
		if ( !$scope.newUser.$valid )
		{
			$scope.showAlert = true;

			$scope.validationMessage = 'Verifique los campos, todos son requeridos.';
			$scope.validationTitle   = 'Ups';
			$scope.validationFailed  = true;
		}
		else
		{
			$formsApi.editUser( $scope.user ).then(function (data) {
				if ( !(typeof data.error === 'undefined') )
				{
					$scope.showAlert = true;

					$scope.validationMessage = data.message;
					$scope.validationTitle   = 'Ups';
					$scope.validationFailed  = true;
				}

				else
				{
					$scope.showAlert = true;
					$scope.validationTitle     = 'Correcto';
					$scope.successRegistration = true;
					$scope.validationMessage   = 'Se ha modificado correctamente al usuario ' + ($scope.user.name == '' ? $scope.user.email : $scope.user.name);
					$scope.validationFailed    = false;
				}
			});
		}
			
	} 


}]);
