




app.controller('FormListCtrl', ['$scope', '$formsApi',


function($scope, $formsApi)
{

	$scope.forms = [];
	$scope.itemsPerPage = 6;
	$scope.currentPage = 0;
	$scope.pagedItems = [];

    function loadDataToScope()
    {
        $formsApi.AllForms().then(function (data) {
            $scope.forms = data;
            for (var i = 0; i < data.length; i++)
                $scope.forms[i].created_at = new Date(data[i].created_at);

            $scope.groupToPages();
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

    $scope.deleteForm = function(formId)
    {
        if ( confirm('¿Estas seguro de eliminar este formulario?') )
            $formsApi.removeForm(formId).then(function (data) {
                loadDataToScope();
            });
    }

}]);
