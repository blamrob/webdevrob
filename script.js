/* ANGULAR */

var robApp = angular.module( 'robApp', ['ngRoute']);

robApp.config(function ($routeProvider) {
	$routeProvider
	.when( '/', {
		templateUrl: 'home.html',
		controller: function ($scope) {
			$scope.setActive( 'home' );
		}
	})
	.when( '/portfolio', {
		templateUrl: 'portfolio.html',
		controller: function ($scope) {
			$scope.setActive( 'portfolio' );
		}
	})
	.when( '/resume', {
		templateUrl: 'resume.html',
		controller: function ($scope) {
			$scope.setActive( 'resume' );
		}
	})
	.when( '/illustration', {
		templateUrl: 'illustration.html',
		controller: function ($scope) {
			$scope.setActive( 'illustration' );
		}
	})
	.when( '/blog', {
		templateUrl: 'blog.html',
		controller: function ($scope) {
			$scope.setActive( 'blog' );
		}
	})
	.otherwise({
		templateUrl: '404.html'
	});
});

robApp.controller( 'robCtrl1', function ($scope) {
	$scope.setActive = function (what) {
		// console.log(what + 'Active');
		$scope.homeActive = '';
		$scope.portfolioActive = '';
		$scope.resumeActive = '';
		$scope.illustrationActive = '';
		$scope.blogActive = '';
		$scope[what + 'Active'] = 'active';
	};
});

/* END ANGULAR */


/* HOME LOAD */
$(function () {
	$.fn.homeLoad = function () {
		$( 'body' ).addClass( 'ready' );
	};
});
/* END HOME LOAD */


/* MODAL */
$(document).on( 'click', function(e) {
	if ($(e.target).closest( '.xm-open' ).length) {
		$( '.xmodal' ).addClass( 'active' );
	} else if ($(e.target).closest( '.xmodal' ).length && !$(e.target).closest( '.xm-content' ).length) {
		$( '.xmodal' ).removeClass( 'active' );
	} else if ($(e.target).closest( '.xm-close' ).length) {
		$( '.xmodal' ).removeClass( 'active' );
	} else if ($(e.target).closest( '.mn-open' ).length) {
		$( '#mobinav1' ).addClass( 'active' );
	} else if ($(e.target).closest( '#mobinav1' ).length) {
		$( '#mobinav1' ).removeClass( 'active' );
	} else if ($(e.target).closest( '.mn-close' ).length) {
		$( '#mobinav1' ).removeClass( 'active' );
	};
});
$(document).keyup(function(e) { 
	if (e.keyCode == 27) { // esc keycode
		$( '.xmodal' ).removeClass( 'active' );
		$( '#mobinav1' ).removeClass( 'active' );
	}
});
/* END MODAL */



/* DOC READY */
$(document).ready(function () {
	$().homeLoad();
});
/* END DOC READY */