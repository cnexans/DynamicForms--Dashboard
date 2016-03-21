




app.controller('MyProfileCtrl', ['$scope', '$formsApi',


function($scope, $formsApi)
{
	$scope.showAlert        = false;
	$scope.validationTitle  = '';
	$scope.successRegistration = false;
	$scope.validationFailed    = false;

	$scope.user = {
		'email'            : '',
		'name'             : '',
		'password_new'     : '',
		'password_confirm' : ''
	};

	$scope.validationError = '';

	$formsApi.myProfile().then(function (data) {
		$scope.user = data;
	});


	$scope.registerUser = function()
	{
		if ( !$scope.newUser.$valid )
		{
			$scope.showAlert = true;

			$scope.validationMessage = 'Verifique los campos, todos son requeridos.';
			$scope.validationTitle   = 'Ups';
			$scope.validationFailed  = true;
		}
		else if( ($scope.user.password_new != $scope.user.password_confirm) && $scope.user.password_new != '' )
		{
			$scope.showAlert = true;
			
			$scope.validationMessage = 'Ha introducido una contraseña, esto deviene en su cambio. Para este proceso debe confirmar su contraseña';
			$scope.validationTitle   = 'Ups';
			$scope.validationFailed  = true;
		}
		else
		{
			if ( $scope.user.password_new != '' )
				$scope.user.password = $scope.user.password_new;

			console.log($scope.user)

			$formsApi.editMyProfile( $scope.user ).then(function (data) {
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
					$scope.validationMessage   = 'Se ha modificado su perfil correctamente ' + $scope.user.name;
					$scope.validationFailed    = false;
				}
			});
		}
			
	} 


}]);
