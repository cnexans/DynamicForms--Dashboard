




app.controller('FormInstancesCtrl', ['$scope', '$formsApi', '$stateParams',


function($scope, $formsApi, $stateParams)
{

	$scope.instances = [];
	$scope.itemsPerPage = 6;
	$scope.currentPage = 0;
	$scope.pagedItems = [];

    function loadDataToScope()
    {
        $formsApi.formInstances($stateParams.formId).then(function (data) {
            $scope.instances = data;
            for (var i = 0; i < data.length; i++)
                $scope.instances[i].created_at = new Date(data[i].created_at);

            $scope.groupToPages();
        });
    }

    loadDataToScope();

    // calculate page in place
    $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.instances.length; i++) {
            if (i % $scope.itemsPerPage === 0)
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.instances[i] ];
            else
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.instances[i]);
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


}]);
