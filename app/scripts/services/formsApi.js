
app.service("$formsApi", function($http, $q, $auth) {

	var _this = this;

	this.baseURL = 'http://localhost';
	this.token = null;

	$auth.setBaseURL(_this.baseURL);

	this.fieldTypeNames = {
		"STRING"       : 'Campo de texto corto, menos de 255 caracteres.',
        "TEXT"         : 'Campo de texto largo.',
        "PHOTO"        : 'Foto',
        "CANVAS_PHOTO" : 'Foto con dibujo o firma',
        "NUMBER"       : 'Campo numerico',
        "RATING"       : 'Rating',
        "OPTION"       : 'Seleccion de opciones',
        "QR_CODE"      : 'Lectura de codigo QR',
        "LOCATION"     : 'Posicion de GPS',
        "DATE"         : 'Campo de fecha'
	}


	this.newEmployee = function(object)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/user/new-employee?access_token=' + $auth.getToken(),
			data   : object
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}

	this.editUser = function(object)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/user/' + object.id + '/edit?access_token=' + $auth.getToken(),
			data   : object
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}

	this.editMyProfile = function(object)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/user/edit/me?access_token=' + $auth.getToken(),
			data   : object
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}

	this.newManager = function(object)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/user/new-manager?access_token=' + $auth.getToken(),
			data   : object
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}

	this.listUsersWithRole = function(membership)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/user/list-with-role?access_token=' + $auth.getToken(),
			data   : {
				'role' : membership
			}
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}

	this.removeUser = function(email)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/user/remove?access_token=' + $auth.getToken(),
			data   : {
				'email' : email
			}
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}

	this.formsOfUser = function(id)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/user/forms?access_token=' + $auth.getToken(),
			data   : {
				'requested_user_id' : id
			}
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}

	this.AllForms = function()
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/form/list?access_token=' + $auth.getToken(),
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}

	this.attachUserToForm = function(formId, userId)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/user/attach/' + userId + '?access_token=' + $auth.getToken(),
			data   : {
				'form_id' : formId
			}
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}


	this.detachUserToForm = function(formId, userId)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/user/detach/' + userId + '?access_token=' + $auth.getToken(),
			data   : {
				'form_id' : formId
			}
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}

	this.userInfo = function(userId)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/user/' + userId + '/profile?access_token=' + $auth.getToken(),
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}

	this.myProfile = function()
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/user/me?access_token=' + $auth.getToken(),
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}


	this.createForm = function(formName)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/form/new?access_token=' + $auth.getToken(),
			data   : {
				'name' : formName
			}
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}


	this.addFields = function(formId, dataFields)
	{
		var _this = this;
		var deferred = $q.defer();
		
		$http({
			method : 'POST',
			url    : _this.baseURL + '/form/add-fields?access_token=' + $auth.getToken(),
			data   : {
				'id'             : formId,
				'form_structure' : JSON.stringify(dataFields)
			}
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}


	this.currentUserInfo = function()
	{

		return $auth.userInfo();
	}

	this.isLogged = function()
	{
		return $auth.isLogged();
	}

	this.getAccessToken = function(username, password)
	{
		return $auth.getAccessToken(username, password);
	}

	this.removeForm = function(formId)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/form/delete?access_token=' + $auth.getToken(),
			data   : {
				'form_id' : formId
			}
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}

	this.formStructure = function(formId)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/form/structure?access_token=' + $auth.getToken(),
			data   : {
				'form_id' : formId
			}
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}

	this.formInstances = function(formId)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/form/instances?access_token=' + $auth.getToken(),
			data   : {
				'form_id' : formId
			}
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}


	this.inspectInstance = function(instanceId)
	{
		var _this = this;
		var deferred = $q.defer();

		$http({
			method : 'POST',
			url    : _this.baseURL + '/form/instance/answers?access_token=' + $auth.getToken(),
			data   : {
				'form_instance_id' : instanceId
			}
		}).then(
		// Success
		function (response)
		{
			deferred.resolve(response.data);
		},
		// Failure
		function (error)
		{
			deferred.resolve(error.data);

		});

		return deferred.promise;
	}


	this.formatImageURL = function (imageURL)
	{
		return imageURL + '?access_token=' + $auth.getToken();
	}



});