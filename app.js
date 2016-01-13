
(function(){
  var myApp = angular.module('myApp', [ ] );

//are we working?
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
      });//end .each
    });//end click

      //after the user takes focus off the color pickers, create style and add to new style tag
      $('.color-choice').focusout(function() {
        //sett css attribute to whatever you are trying to set
        $scope.cssAttr = 'color';
        //call updateStyle function and pass through the attribute ID 
        //(which html attribute you are targeting), the css attribute (what css you are setting), and the value of the color picker
        updateStyle($(this).attr('id'), $scope.cssAttr, $(this).val());
      });//end focusout

      //after the user takes focus off the background-color pickers, create style and add to new style tag
      $('.background-color-choice').focusout(function() {
        //sett css attribute to whatever you are trying to set
        $scope.cssAttr = 'background-color';
        //call updateStyle function and pass through the attribute ID 
        //(which html attribute you are targeting), the css attribute (what css you are setting), and the value of the color picker
        updateStyle($(this).attr('id'), $scope.cssAttr, $(this).val());
      });//end focusout

      function updateStyle(selector, attribute, value){
        //creating the css
        $scope.newStyle = selector +"{" + attribute + ": " + value + "} ";
        //update style string to be input in the <style> tag with new values
        $scope.siteStyles += $scope.newStyle;
      };//end function updateStyle
 
   
  });//end color controller


})();//start/end
