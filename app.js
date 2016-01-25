
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
	$scope.siteFonts = "";
  $scope.primaryElements = "";
  $scope.primaryFont = "";
  $scope.secondaryFont = "";
  $scope.newStyle =  "";


    $('select').change(function(){
      //creates an array of the elements to have the primary font
      $scope.primaryElements = $(".primary-font-elements").val() || [];    
      //sets a variable with the primary font
      $scope.primaryFont = $(".primary-font").val();   
      //sets a variable with the secondary font
      $scope.secondaryFont = $(".secondary-font").val();   
      //sets the body font style to the secondary font
      $scope.newFont = "body{font-family: " + $scope.secondaryFont+ "} ";
    });//end change
	 
	 $('.set-fonts').click($scope.setFonts);

    //sets the new font styles for the page
    $scope.setFonts = function() {
      $scope.siteFonts = $scope.newFont;
       //loops through each of the elements in the primary font elements array and sets those elements with the primary font 
      jQuery.each($scope.primaryElements, function(i, val){
        $scope.newFont = val + "{font-family: " + $scope.primaryFont + "} ";
        //updates the style tag
        $scope.siteFonts += $scope.newFont;
      });//end .each
    };//end setFonts function


      //after the user takes focus off the color pickers, create style and add to new style tag
      $('#color-picker-form :input').change(function() {
				$scope.siteStyles = "";
				//re generates the css tag every time so that when users change, you dont get a huge style tag growing every time the user changes their mind
				$("#color-picker-form :input").each(function(){
				 	$scope.values = $(this).val();
					$scope.selector = $(this).attr('id');
					$scope.cssAttr = $(this).attr("cssAttr");
					//check to see if all these valuse are set before generating the css values
					if($scope.values != false && $scope.cssAttr != false ){
						//call updateStyle function and pass through the attribute ID 
						//(which html attribute you are targeting), the css attribute (what css you are setting), and the value of the color picker
						updateStyle($scope.selector, $scope.cssAttr, $scope.values);
					};
				}); 
      });//end focusout

      function updateStyle(selector, attribute, value){
        //creating the css
        $scope.newStyle = selector +"{" + attribute + ": " + value + "} ";
				 
        //update style string to be input in the <style> tag with new values
        $scope.siteStyles += $scope.newStyle;
      };//end function updateStyle
 
   
  });//end color controller


})();//start/end
