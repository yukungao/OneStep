'use strict';


angular.module('AniTheme')
	.directive('sidebarCalendar',function(){
		return {
        templateUrl:'scripts/directives/sidebar/sidebar-widgets/sidebar-calendar/sidebar-calendar.html?v='+window.app_version,
        restrict: 'E',
        replace: true,
    	}
	});
