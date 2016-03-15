var bio = {
	"name": "Nicholas Ratliff",
	"role": "Front End Application Developer",
	"contacts": [
            {name:"mobile",value:"3145205145"},
            {name:"email", value: "1337.geek@gmail.com"},
            {name:"github", value: "phix.github.io"},
            {name:"twitter", value: "@nicholasratliff"},
            {name:"location", value: "St Louis MO"}
            ]
    ,
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
	// var bContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	// var bContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
	// var bGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	// var bTwitter = HTMLtwitter.replace("%data%", bio.contacts.github);
	// var bLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var topContacts = $("#topContacts");
	var footerContacts = $("#footerContacts");

	$("#header").prepend(bRole).prepend(bName);
	 
	$(bio.contacts).each(function(index) {
		topContacts.append(HTMLcontactGeneric.replace("%contact%",this.name).replace("%data%",this.value));
		footerContacts.append(HTMLcontactGeneric.replace("%contact%",this.name).replace("%data%",this.value));
	});

	$("#header").append(bPic).append(bMsg).append(HTMLskillsStart);
	 for(x in bio.skills) {
	 	var bSkill = HTMLskills.replace("%data%",bio.skills[x])
	 	$("#skills").append(bSkill);
	};	
};

bio.display();

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
	// $("#workExperience").append(HTMLworkStart).append(wEmployer + " - " + wWorkTitle).append(wDatesWorked).append(wWorkLocation).append(wWorkDescription);
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(wEmployer + wWorkTitle).append(wDatesWorked).append(wWorkLocation).append(wWorkDescription);
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
	$("#projects").append(HTMLprojectStart);
	$(".project-entry:last").append(pTitle).append(pDates).append(pDescription).append(pImage1).append(pImage2);
};

projects.display();

var education = {
	"schools": [{
		"name": "Fort Zumwalt North Highschool",
		"location": "63303",
		"degree": "NA",
		"majors": "Programming",
		"dates": "1996-2000"
	}],
	"onlineCourses": [{
		"title": "NA",
		"school": "NA",
		"date": "NA",
		"url": "NA"

	}]
}

education.display = function(){

	if(education.schools.length > 0){		
		$("#education").append(HTMLschoolStart)
		for(x in education.schools) {
			var eName = HTMLschoolName.replace("%data%",education.schools[x].name);
			var eLoc = HTMLschoolLocation.replace("%data%",education.schools[x].location);
			var eDegree = HTMLschoolDegree.replace("%data%",education.schools[x].degree);
			var eMajor = HTMLschoolMajor.replace("%data%",education.schools[x].majors);
			var eDates = HTMLschoolDates.replace("%data%",education.schools[x].dates);	
			$(".education-entry:last").append(eName).append(eLoc).append(eDates).append(eMajor);		 	
		};
	}

	if(education.onlineCourses.length > 0){
		for(x in education.onlineCourses) {
			var oTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[x].title);
			var oSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[x].school);
			var oDate = HTMLonlineDates.replace("%data%",education.onlineCourses[x].date);
			var oUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[x].url);
			$(".education-entry:last").append(HTMLonlineClasses).append(oTitle + " - " + oSchool).append(oDate).append(oUrl)	
		};
	}	 
};
education.display();

$("#mapDiv").append(googleMap);

