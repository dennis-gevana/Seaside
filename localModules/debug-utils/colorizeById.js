/**
 * @ngInject
*/
/*
    This can be add to the app in ie:appBoostrap.js as directive
    ..
    import colorizeById from "../../localModules/debug-utils/colorizeById";
    ...

    angular.module(...)
    ...
    .directive('div', colorizeById)
    ...

*/
export default function colorizeById() {
    return {
        scope: false,
        link: function (scope, element) {
            const e = element[0];
            if (e != null) {
                const shades = 100;
                e.style.backgroundColor = "hsl(" + Math.round((359 * (scope.$id % shades)) / shades) + ", 100%, 70%)";
                e.style.border = "1px solid hsl(" + Math.round((359 * (scope.$id % shades)) / shades) + ", 100%, 70%)";
            }
        }
    };
}