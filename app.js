
(function(){
  var myApp = angular.module('myApp', [] );

//are we working?
console.log("app!");

    myApp.directive('miniColors', function(){
    return {
      restrict: 'A', //for element directive, A for attribute
      link: function(scope, element, attrs){
        $(element).minicolors(scope.$eval(attrs.minicolors));
        element.bind('focusout', function(){
            //console.log(attrs.id);
            //console.log(element.val());
        });
      }
    };
  });
    
//    

  myApp.directive('colorPicker', function(){
    return {
      restrict: 'E', //for element directive, A for attribute
      templateUrl: 'color-picker.html', // load the template associated with the directive
      link: function(){
        //console.log('directive');
      }
    };
  });


 myApp.controller('ColorController' , function($scope) {
  //empty string tied to a style tag in the html to add the styles dictated by the picker
  $scope.siteStyles = "";
  $scope.primaryElements = "";
  $scope.primaryFont = "";
  $scope.secondaryFont = "";
  $scope.newStyle =  "";
     
     
     // add the variables as object key pairs then check to see if the element already exists in the object, then update key, then make new string to insert into head with new styles

    $('select').change(function(){
      console.log('change');
      
      //creates an array of the elements to have the primary font
      $scope.primaryElements = $(".primary-font-elements").val() || [];
      //console.log("prim elems: " + $scope.primaryElements);     
      //sets a variable with the primary font
      $scope.primaryFont = $(".primary-font").val();
      //console.log('prim font: ' + $scope.primaryFont);    
      //sets a variable with the secondary font
      $scope.secondaryFont = $(".secondary-font").val();
     // console.log('second font: '+ $scope.secondaryFont);   
      //sets the body font style to the secondary font
      $scope.newStyle = "body{font-family: " + $scope.secondaryFont+ "} ";
      // adds new style to our style variable which is tied to the HTML so automatically updates
      //$scope.siteStyles += $scope.newStyle;
      //console.log('first site styles: ' + $scope.siteStyles);
      
    });//end submit

    //sets the new font styles for the page
    $scope.setFonts = function() {
     // console.log('clicky!');
      $scope.siteStyles +=  $scope.newStyle;

        //loops through each of the elements in the primary font elements array and sets those elements with the primary font 
      jQuery.each($scope.primaryElements, function(i, val){
        $scope.newStyle = val + "{font-family: " + $scope.primaryFont + "} ";
        //updates the style tag
        $scope.siteStyles += $scope.newStyle;
       // console.log('for each loop styles: ' + $scope.siteStyles);
      });//end .each
      //console.log('click ' +  $scope.siteStyles);
    };


      //after the user takes focus off the color pickers, create style and add to new style tag
      $('#color-picker-form :input').blur(function() {
				$scope.siteStyles = "";
				
				$("#color-picker-form :input").each(function(){
				 	$scope.values = $(this).val();
					$scope.selector = $(this).attr('id');
					$scope.cssAttr = $(this).attr("cssAttr");
					
					
					if($scope.values != false && $scope.cssAttr != false ){
						//call updateStyle function and pass through the attribute ID 
						//(which html attribute you are targeting), the css attribute (what css you are setting), and the value of the color picker
						updateStyle($scope.selector, $scope.cssAttr, $scope.values);
					};
				});
        
        
      });//end focusout

      //after the user takes focus off the background-color pickers, create style and add to new style tag
      $('.background-color-choice').blur(function() {
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
