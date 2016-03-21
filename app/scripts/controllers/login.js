




app.controller('LoginCtrl',


function($scope, $position, $formsApi, $state)
{
	if ( $formsApi.isLogged() )
		$state.go('dashboard.home');

	$scope.password = '';
	$scope.email    = '';

	$scope.wrongCredentials = false;

	$scope.proccedLogin = function()
	{
		if ( $scope.login.$valid )
			$formsApi.getAccessToken( $scope.email, $scope.password ).
			then(function (accessResponse) {
				if ( typeof accessResponse.error !== 'undefined' )
					$scope.wrongCredentials = true;
				else
					$formsApi.currentUserInfo()
					.then(function (infoResponse) {
						if ( infoResponse.level > 0 )
							$state.go('dashboard.home');
						else
							$scope.wrongCredentials = true;
					});
			});
	} 


});
