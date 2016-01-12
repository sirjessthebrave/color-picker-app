
(function(){
  var myApp = angular.module('myApp', [ ] );

console.log("app!");

$(document).ready( function() {

  //Instantiate minicolors picker http://labs.abeautifulsite.net/jquery-minicolors/index.html#instantiation
  $('.demo').minicolors();


}); //doc .ready

 myApp.controller('ColorController' , function($scope) {
  $scope.siteStyles = "";

    $('.set-fonts').click(function(){

      $scope.primaryElements = $(".primary-font-elements").val() || [];
          console.log( 'elements: ' + $scope.primaryElements)
        
      $scope.primaryFont = $(".primary-font").val();
          console.log('primary: ' + $scope.primaryFont);

      $scope.secondaryFont = $(".secondary-font").val();
          console.log('secondary: ' + $scope.secondaryFont);
        $scope.newStyle = "body{font-family: " + $scope.secondaryFont+ "} ";
        $scope.siteStyles += $scope.newStyle;

        jQuery.each($scope.primaryElements, function(i, val){
          $scope.newStyle = val + "{font-family: " + $scope.primaryFont + "} ";
          $scope.siteStyles += $scope.newStyle;
          console.log($scope.siteStyles);
      });//end .each
    });//end click

       $('.color-choice').focusout(function() {
        $scope.color = $(this).val();
        $scope.id = $(this).attr('id');
        $scope.newStyle = $scope.id + "{color: " + $scope.color + "} ";
        $scope.siteStyles += $scope.newStyle;
     });//end focusout
 
   
  });//end color controller


})();//start/end
