'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */

app.config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',

function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
	
	$ocLazyLoadProvider.config({
		debug:false,
		events:true,
	});
	$urlRouterProvider.otherwise('/dashboard/home');
	$stateProvider
		.state('dashboard', {
			url:'/dashboard',
			templateUrl: 'views/dashboard/main.html',
			resolve: {
				loadMyDirectives: function($ocLazyLoad) {
					return $ocLazyLoad.load
					({
							name:'dynamicForms',
							files:[
							'scripts/directives/header/header.js',
							'scripts/directives/sidebar/sidebar.js',
							]
					}),
					$ocLazyLoad.load(
					{
						name:'toggle-switch',
						files:[
							"bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
							"bower_components/angular-toggle-switch/angular-toggle-switch.css"
						]
					}),
					$ocLazyLoad.load(
					{
						name:'ngAnimate',
						files:['bower_components/angular-animate/angular-animate.js']
					})
					$ocLazyLoad.load(
					{
						name:'ngCookies',
						files:['bower_components/angular-cookies/angular-cookies.js']
					})
					$ocLazyLoad.load(
					{
						name:'ngResource',
						files:['bower_components/angular-resource/angular-resource.js']
					})
					$ocLazyLoad.load(
					{
						name:'ngSanitize',
						files:['bower_components/angular-sanitize/angular-sanitize.js']
					})
					$ocLazyLoad.load(
					{
						name:'ngTouch',
						files:['bower_components/angular-touch/angular-touch.js']
					})
				}
			}
	})
	.state('dashboard.home', {
		url:'/home',
		controller: 'MainCtrl',
		templateUrl:'views/dashboard/home.html',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/main.js'
					]
				})
			}
		}
	})
	.state('dashboard.form', {
		templateUrl:'views/form.html',
		url:'/form'
	})
	.state('dashboard.blank', {
		templateUrl:'views/pages/blank.html',
		url:'/blank'
	})
	.state('login', {
		templateUrl:'views/pages/login.html',
		url:'/login',
		controller: 'LoginCtrl',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/login.js'
					]
				})
			}
		}
	})
	.state('dashboard.new-employee', {
		templateUrl:'views/users/new-employee.html',
		url:'/new-employee',
		controller: 'NewEmployeeCtrl',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/new-employee.js'
					]
				})
			}
		}
	})
	.state('dashboard.new-manager', {
		templateUrl:'views/users/new-manager.html',
		url:'/new-manager',
		controller: 'NewManagerCtrl',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/new-manager.js'
					]
				})
			}
		}
	})

	.state('dashboard.list-employee', {
		templateUrl:'views/users/list-employee.html',
		url:'/list-employee',
		controller: 'ListEmployeeCtrl',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/list-employee.js'
					]
				})
			}
		}
	})

	.state('dashboard.list-manager', {
		templateUrl:'views/users/list-manager.html',
		url:'/list-manager',
		controller: 'ListManagerCtrl',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/list-manager.js'
					]
				})
			}
		}
	})

	.state('dashboard.user-forms', {
		templateUrl:'views/users/forms.html',
		url:'/users/{userId}/forms',
		controller: 'UserFormsCtrl',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/user-forms.js'
					]
				})
			}
		}
	})

	.state('dashboard.edit-user', {
		templateUrl:'views/users/edit-user.html',
		url:'/users/{userId}/edit',
		controller: 'EditUserCtrl',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/edit-user.js'
					]
				})
			}
		}
	})

	.state('dashboard.my-profile', {
		templateUrl:'views/users/my-profile.html',
		url:'/my-profile',
		controller: 'MyProfileCtrl',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/my-profile.js'
					]
				})
			}
		}
	})

	.state('dashboard.list-forms', {
		templateUrl:'views/forms/list.html',
		url:'/form/list',
		controller: 'FormListCtrl',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/form-list.js'
					]
				})
			}
		}
	})

	.state('dashboard.new-form', {
		templateUrl:'views/forms/new.html',
		url:'/form/new',
		controller: 'NewFormCtrl',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/new-form.js'
					]
				})
			}
		}
	})

	.state('dashboard.form-structure', {
		templateUrl:'views/forms/structure.html',
		url:'/forms/{formId}/structure',
		controller: 'FormStructureCtrl',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/form-structure.js'
					]
				})
			}
		}
	})

	.state('dashboard.form-instances', {
		templateUrl:'views/forms/instances.html',
		url:'/forms/{formId}/instances',
		controller: 'FormInstancesCtrl',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/form-instances.js'
					]
				})
			}
		}
	})

	.state('dashboard.inspect-instance', {
		templateUrl:'views/forms/inspect-instance.html',
		url:'/forms/instances/{instanceId}/inspect',
		controller: 'InspectInstanceCtrl',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'dynamicForms',
					files:[
					'scripts/controllers/inspect-instance.js'
					]
				})
			}
		}
	})
}])

.run(function($rootScope, $auth, $state) {

	$rootScope.$on('$locationChangeSuccess', function()
	{
		if ( !$auth.isLogged() )
			$state.go('login');
	})
})