console.log("here");

var cities = ['New York', 'San Francisco', 'Los Angeles', 'Austin', 'Sydney']
var cityClasses = ['nyc', 'sf', 'la', 'austin', 'sydney']

//^The var city classes access the names of the images on your CSS stylesheet, make sure they match up

/*set your start position; */
/*set your "while true" statement; */
/*set your "change variable or your "do something" */

for(var index = 0; index < cities.length; index++)
{
	var cityName = cities[index];
	var cityClass = cityClasses[index];

	$('#city-type').append('<option value="' + cityClass + '">' + cityName + '</option>');
	//look at the list of things that you could do with JQUERY
	//make sure to escape the string by closing the options tags from the html document tag <option> and adding the name

	console.log(cities[index], cityClasses[index]);
}

$('#city-type').change(function(){
    var cityClass = $(this).val();
    $('body').removeClass();
    $('body').addClass(cityClass);
    console.log(cityClass);
});


//you can create different index vars to access different names
//for loop is just way to count something a number of times; does not have to be tied to anything
//counter, starts at 0 in relation to the city array referencing the position of each city, ++ = +1
