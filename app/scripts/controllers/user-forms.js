




app.controller('UserFormsCtrl', ['$scope', '$formsApi', '$stateParams',


function($scope, $formsApi, $stateParams)
{

	$scope.forms = [];
	$scope.itemsPerPage = 6;
	$scope.currentPage = 0;
	$scope.pagedItems = [];

    $formsApi.userInfo( $stateParams.userId ).then(function (data) {
        $scope.user = data;
    });

	function loadDataToScope() {
        $formsApi.formsOfUser($stateParams.userId).then(function (formsOfUser) {
            $formsApi.AllForms().then(function (allForms) {
                $scope.forms     = typeof allForms.error === 'undefined' ? allForms : [];
                $scope.userForms = typeof formsOfUser.error === 'undefined' ? formsOfUser : [];

 

                for ( var i = 0; i < $scope.forms.length; i++ )
                {
                    $scope.forms[i].created_at = new Date($scope.forms[i].created_at);
                    $scope.forms[i].hasPermission = false;
                    for ( var j = 0; j < $scope.userForms.length; j++ )
                        if ($scope.userForms[j].id == $scope.forms[i].id)
                            $scope.forms[i].hasPermission = true;
                }

                $scope.groupToPages();
            });		
    	});
    }

    loadDataToScope();

    // calculate page in place
    $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.forms.length; i++) {
            if (i % $scope.itemsPerPage === 0)
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.forms[i] ];
            else
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.forms[i]);
        }
    };

    $scope.nextPage = function()
    {
    	if ( $scope.currentPage < $scope.pagedItems.length - 1 )
    		$scope.currentPage++;
    }

    $scope.prevPage = function()
    {
    	if ( !($scope.currentPage == 0) )
    		$scope.currentPage--;
    }

    $scope.givePermission = function (formId)
    {

        $formsApi.attachUserToForm(formId, $stateParams.userId).then(function (data) {
            if ( typeof data.error === 'undefined' )
                loadDataToScope();
        });
    }

    $scope.revokePermission = function (formId)
    {
        $formsApi.detachUserToForm(formId, $stateParams.userId).then(function (data) {
            if ( typeof data.error === 'undefined' )
                loadDataToScope();
        });
    }

}]);
