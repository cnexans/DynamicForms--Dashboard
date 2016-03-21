




app.controller('ListEmployeeCtrl', ['$scope', '$formsApi',


function($scope, $formsApi)
{

	$scope.users = [];
	$scope.itemsPerPage = 6;
	$scope.currentPage = 0;
	$scope.pagedItems = [];

	$formsApi.listUsersWithRole('employee').then(function (data) {
		$scope.users = data;
		$scope.groupToPages();
	});

    // calculate page in place
    $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.users.length; i++) {
            if (i % $scope.itemsPerPage === 0)
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.users[i] ];
            else
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.users[i]);
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

    $scope.removeUser = function (email)
    {
    	$formsApi.removeUser(email).then(function(data) {
    		if ( typeof data.error === 'undefined' )
    		{
    			var index = -1;
    			for ( var i = 0; i < $scope.users.length; i++ )
    			{
    				if ( $scope.users[i].email == email )
    				{
    					index = i;
    					break;
    				}
    			}

    			$scope.users.splice(index, 1);
    			$scope.groupToPages();
    		}
    	});
    }

}]);
