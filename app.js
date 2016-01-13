
(function(){
  var myApp = angular.module('myApp', [ ] );

console.log("app!");

$(document).ready( function() {

  //Instantiate minicolors picker http://labs.abeautifulsite.net/jquery-minicolors/index.html#instantiation
  $('.demo').minicolors();


}); //doc .ready

 myApp.controller('ColorController' , function($scope) {
  //empty string tied to a style tag in the html to add the styles dictated by the picker
  $scope.siteStyles = "";

    $('.set-fonts').click(function(){
      //creates an array of the elements to have the primary font
      $scope.primaryElements = $(".primary-font-elements").val() || [];
          
      //sets a variable with the primary font
      $scope.primaryFont = $(".primary-font").val();
          
      //sets a variable with the secondary font
      $scope.secondaryFont = $(".secondary-font").val();
          
        //sets the body font style to the secondary font
        $scope.newStyle = "body{font-family: " + $scope.secondaryFont+ "} ";
        // adds new style to our style variable which is tied to the HTML so automatically updates
        $scope.siteStyles += $scope.newStyle;

        //loops through each of the elements in the primary font elements array and sets those elements with the primary font 
        jQuery.each($scope.primaryElements, function(i, val){
          $scope.newStyle = val + "{font-family: " + $scope.primaryFont + "} ";
          //updates the style tag
          $scope.siteStyles += $scope.newStyle;
          console.log($scope.siteStyles);
      });//end .each
    });//end click

      //after the user takes focus off the color pickers, create style and add to new style tag
      $('.color-choice').focusout(function() {
        $scope.color = $(this).val();
        $scope.id = $(this).attr('id');
        $scope.newStyle = $scope.id + "{color: " + $scope.color + "} ";
        $scope.siteStyles += $scope.newStyle;
     });//end focusout

      //after the user takes focus off the background-color pickers, create style and add to new style tag
      $('.background-color-choice').focusout(function() {
        $scope.color = $(this).val();
        //the id's are set to be the html element they represent - is there a better way to grab what HTML element associated with the specific picker?
        $scope.id = $(this).attr('id');
        $scope.newStyle = "." + $scope.id +"{background-color: " + $scope.color + "} ";
        $scope.siteStyles += $scope.newStyle;
     });//end focusout
 
   
  });//end color controller


})();//start/end
