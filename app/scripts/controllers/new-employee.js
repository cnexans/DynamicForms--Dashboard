




app.controller('NewEmployeeCtrl', ['$scope', '$formsApi',


function($scope, $formsApi)
{
	$scope.showAlert        = false;
	$scope.validationTitle  = '';
	$scope.successRegistration = false;
	$scope.validationFailed    = false;

	$scope.user = {
		'email'            : '',
		'name'             : '',
		'password'         : '',
		'password_confirm' : ''
	};

	$scope.validationError = '';

	$scope.registerUser = function()
	{
		if ( !$scope.newUser.$valid )
		{
			$scope.showAlert = true;

			$scope.validationMessage = 'Verifique los campos, todos son requeridos.';
			$scope.validationTitle   = 'Ups';
			$scope.validationFailed  = true;
		}
		else if( $scope.user.password != $scope.user.password_confirm )
		{
			$scope.showAlert = true;
			
			$scope.validationMessage = 'Las contraseñas no coinciden, confirme correctamente.'
			$scope.validationTitle   = 'Ups';
			$scope.validationFailed  = true;
		}
		else
		{
			$formsApi.newEmployee( $scope.user ).then(function (data) {
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
					$scope.validationMessage   = 'Se ha registrado correctamente el usuario ' + $scope.user.name;
					$scope.validationFailed    = false;
				}
			});
		}
			
	} 


}]);
