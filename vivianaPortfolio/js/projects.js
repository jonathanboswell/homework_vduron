$(function(){
	var projects = ['zsupply','illuminate','soriano','negarin','revolve','vow','equipment','urban','bh','ppz','logos'];

	var pages = {
		'zsupply': ['assets/projectImages/projectOneImages/projectOneImage1.png','assets/projectImages/projectOneImages/projectOneImage2.png','assets/projectImages/projectOneImages/projectOneImage3.png', 'assets/projectImages/projectOneImages/projectOneImage4.png', 'assets/projectImages/projectOneImages/projectOneImage5.png'],
		'illuminate': ['assets/projectImages/projectTwoImages/projectTwoImage1.png','assets/projectImages/projectTwoImages/projectTwoImage2.png','assets/projectImages/projectTwoImages/projectTwoImage3.png','assets/projectImages/projectTwoImages/projectTwoImage4.png','assets/projectImages/projectTwoImages/projectTwoImage5.png'],
		'soriano': ['assets/projectImages/projectThreeImages/projectThreeImage1.png','assets/projectImages/projectThreeImages/projectThreeImage2.png','assets/projectImages/projectThreeImages/projectThreeImage3.png','assets/projectImages/projectThreeImages/projectThreeImage4.png','assets/projectImages/projectThreeImages/projectThreeImage5.png'],
		'negarin': ['assets/projectImages/projectFourImages/projectFourImage1.png','assets/projectImages/projectFourImages/projectFourImage2.png','assets/projectImages/projectFourImages/projectFourImage3.png','assets/projectImages/projectFourImages/projectFourImage4.png','assets/projectImages/projectFourImages/projectFourImage5.png'],
		'revolve': ['assets/projectImages/projectFiveImages/projectFiveImage1.png','assets/projectImages/projectFiveImages/projectFiveImage2.png','assets/projectImages/projectFiveImages/projectFiveImage3.png','assets/projectImages/projectFiveImages/projectFiveImage4.png','assets/projectImages/projectFiveImages/projectFiveImage5.png'],
		'vow': ['assets/projectImages/projectSixImages/projectSixImage1.png','assets/projectImages/projectSixImages/projectSixImage2.png','assets/projectImages/projectSixImages/projectSixImage3.png','assets/projectImages/projectSixImages/projectSixImage4.png', 'assets/projectImages/projectSixImages/projectSixImage5.png'],
		'equipment': ['assets/projectImages/projectSevenImages/projectSevenImage1.png','assets/projectImages/projectSevenImages/projectSevenImage2.png','assets/projectImages/projectSevenImages/projectSevenImage3.png','assets/projectImages/projectSevenImages/projectSevenImage4.png','assets/projectImages/projectSevenImages/projectSevenImage5.png'],
		'urban':['assets/projectImages/projectEightImages/projectEightImage1.png','assets/projectImages/projectEightImages/projectEightImage2.png','assets/projectImages/projectEightImages/projectEightImage3.png','assets/projectImages/projectEightImages/projectEightImage4.png','assets/projectImages/projectEightImages/projectEightImage5.png'],
		'bh':['assets/projectImages/projectNineImages/projectNineImage1.png','assets/projectImages/projectNineImages/projectNineImage2.png','assets/projectImages/projectNineImages/projectNineImage3.png','assets/projectImages/projectNineImages/projectNineImage4.png','assets/projectImages/projectNineImages/projectNineImage5.png'],
		'ppz':['assets/projectImages/projectTenImages/projectTenImage1.png','assets/projectImages/projectTenImages/projectTenImage2.png','assets/projectImages/projectTenImages/projectTenImage3.png','assets/projectImages/projectTenImages/projectTenImage4.png','assets/projectImages/projectTenImages/projectTenImage5.png'],
		'logos':['assets/projectImages/projectElevenImages/projectElevenImage1.png','assets/projectImages/projectElevenImages/projectElevenImage2.png','assets/projectImages/projectElevenImages/projectElevenImage3.png','assets/projectImages/projectElevenImages/projectElevenImage4.png','assets/projectImages/projectElevenImages/projectElevenImage3.png'],
	}

	var descriptions = {
		'zsupply': ['This is the project description for for Z Supply.',''],
		'illuminate': ['This is the project description for Illuminate.',''],
		'soriano': ['This is the project description for Soriano.',''],
		'negarin': ['This is the project description for Negarin London.',''],
		'revolve': ['This is the project description for Revolve.',''],
		'vow': ['This is the project description for Vow.',''],
		'equipment': ['This is the project description for Equipment.',''],
		'urban': ['This is the project description for Urban.',''],
		'bh': ['This is the project description for BH.',''],
		'ppz': ['This is the project description for PPZ.',''],
		'logos': ['This is the project description for logos.',''],
	}
	
	var page = window.location.hash.substring(1);
	page = (page) ? page:'zsupply';
	var description = descriptions[page][0];
	var website = descriptions[page][1];
	$('#projectParagraph').append(description + website);


	console.log(page);

	for(var i = 0; i < pages[page].length; i++)
	{
		var imagePath = pages[page][i];
		console.log(imagePath, description, website);
		$('#imageContainer').append('<img src="./' + imagePath + '" class=" img-responsive">');
	}
	
	
	
});
