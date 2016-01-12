
(function(){
  var myApp = angular.module('myApp', [ ] );

console.log("app!");

$(document).ready( function() {

  //Instantiate minicolors picker http://labs.abeautifulsite.net/jquery-minicolors/index.html#instantiation
  $('.demo').minicolors();


}); //doc .ready

 myApp.controller('ColorController' , function($scope) {
  $scope.siteStyles = "";

    $('.color-choice').focusout(function() {
        $scope.color = $(this).val();
        $scope.id = $(this).attr('id');
        $scope.newStyle = $scope.id + "{color: " + $scope.color + "} ";
        $scope.siteStyles += $scope.newStyle;
     });

    $('select').change(function(){
        $scope.font = $(this).val();
        $scope.id = $(this).attr('id');
        $scope.newStyle = $scope.id + "{font-family: " + $scope.font + "} ";
        $scope.siteStyles += $scope.newStyle;
    });

   
  });


})();//start/end
