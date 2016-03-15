var bio = {
	"name": "Nicholas Ratliff",
	"role": "Front End Application Developer",
	"contacts": {
            "mobile": "3145205145",
            "email": "1337.geek@gmail.com",
            "github": "phix.github.io",
            "twitter": "@nicholasratliff",
            "location": "St Louis MO"
    },
    "welcomeMessage": "Welcome!",
    "skills": ["VBA", "Classic ASP", "VBScript", "Batch", "C#", "Coldfusion", "Java", "IIS", "Websphere"],
    "biopic": './images/my_picture.jpg'
};

bio.display = function(){
	console.log(bio.name);
	var bName = HTMLheaderName.replace("%data%", bio.name);
	var bRole = HTMLheaderRole.replace("%data%", bio.role);
	var bPic = HTMLbioPic.replace("%data%", bio.biopic);
	var bMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var bSkills = HTMLskills.replace("%data%", bio.skills);

	// $("#header").prepend(bName).prepend(bRole).append(bMsg).prepend(bPic).append(HTMLskillsStart);
	$("#header").prepend(HTMLskillsStart).prepend(bPic).prepend(bMsg).prepend(bRole).prepend(bName);
	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	};
};

bio.display();

function contactDiv(divId){
	var bContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var bContactEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var bGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
	var bTwitter = HTMLtwitter.replace("%data%",bio.contacts.github);
	var bLocation = HTMLlocation.replace("%data%",bio.contacts.location);

	$(divId).append(bContactMobile).append(bContactEmail).append(bTwitter).append(bGitHub).append(bLocation);
}
contactDiv("#topContacts");
contactDiv("#footerContacts");

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Sr Specialist Application Developer",
			"location": "Earth City, Missouri",
			"datesWorked": "Nov 2013 - Current",
			"description": "Application Developer for ATO and CARE Organizations"
		}]
};


work.display = function(){
	var wEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
	var wWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
	var wWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[0].location);
	var wDatesWorked = HTMLworkDates.replace("%data%", work.jobs[0].datesWorked);
	var wWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[0].description);
	$("#workExperience").append(HTMLworkStart).append(wEmployer + " - " + wWorkTitle).append(wDatesWorked).append(wWorkLocation).append(wWorkDescription);
};

work.display();

var projects = {
	"title": "Example Project",
	"dates": "2014-2015",
	"description": "test description",
	"images": ["image1.jpg", "image2.jpg"]
};

projects.display = function(){
	var pTitle = HTMLprojectTitle.replace("%data%", projects.title);
	var pDates = HTMLprojectDates.replace("%data%", projects.dates);
	var pDescription = HTMLprojectDescription.replace("%data%", projects.description);
	var pImage1 = HTMLprojectImage.replace("%data%", projects.images[0]);
	var pImage2 = HTMLprojectImage.replace("%data%", projects.images[1]);
	$("#projects").append(HTMLprojectStart).append(pTitle).append(pDates).append(pDescription).append(pImage1).append(pImage2);
};

projects.display();

var education = {
	"schools": {
		"name": "Fort Zumwalt North Highschool",
		"location": "Ofallon MO",
		"degree": "NA",
		"majors": "NA",
		"dates": "1996-2000"		
	},
	"onlineCourses": {
		"title": "NA",
		"school": "NA",
		"date": "NA",
		"url": "NA"
	}
};

education.display = function(){
	var eName = HTMLschoolName.replace("%data%",education.schools.name);
	var eLoc = HTMLschoolLocation.replace("%data%",education.schools.location);
	var eDegree = HTMLschoolDegree.replace("%data%",education.schools.degree);
	var eMajor = HTMLschoolMajor.replace("%data%",education.schools.majors);
	var eDates = HTMLschoolDates.replace("%data%",education.schools.dates);
	
	var oTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses.title);
	var oSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses.school);
	var oDate = HTMLonlineDates.replace("%data%",education.onlineCourses.date);
	var oUrl = HTMLonlineURL.replace("%data%",education.onlineCourses.url);

	$("#education").append(HTMLschoolStart).append(eName).append(eLoc).append(eDates).append(eMajor).append(HTMLonlineClasses).append(oTitle + " - " + oSchool).append(oDate).append(oUrl);
};

education.display();
$("#mapDiv").append(googleMap);

