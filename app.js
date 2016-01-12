
(function(){
  var myApp = angular.module('myApp', [ ] );

console.log("app!");

$(document).ready( function() {

  //Instantiate minicolors picker http://labs.abeautifulsite.net/jquery-minicolors/index.html#instantiation
  $('.demo').minicolors();


}); //doc .ready

 myApp.controller('ColorController' , function($scope) {
  $scope.siteStyles = "";

    $('.demo').focusout(function() {
        $scope.color = $(this).val();
        $scope.id = $(this).attr('id');

        $scope.newStyle = $scope.id + "{color: " + $scope.color + "} ";
        $scope.siteStyles += $scope.newStyle;
     });

   
  });


})();//start/end
