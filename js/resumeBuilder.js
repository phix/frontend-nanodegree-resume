"use strict";

var bio = {
	"name": "Nicholas Ratliff",
	"role": "Front End Application Developer",
	"contacts": {"mobile": "3145205145", "email": "1337.geek@gmail.com", "github": "phix.github.io", "twitter": "@nicholasratliff", "location": "St Louis Missouri"},
    "welcomeMessage": "Welcome!",
    "skills": ["VBA", "Classic ASP", "VBScript", "Batch", "C#", "Coldfusion", "Java", "IIS", "Websphere"],
    "biopic": './images/my_picture.jpg'
};

bio.display = function(){
	var bName = HTMLheaderName.replace("%data%", bio.name);
	var bRole = HTMLheaderRole.replace("%data%", bio.role);
	var bPic = HTMLbioPic.replace("%data%", bio.biopic);
	var bMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);	
	var topContacts = $("#topContacts");
	var footerContacts = $("#footerContacts");
	var bContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var bContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var bGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var bTwitter = HTMLtwitter.replace("%data%", bio.contacts.github);
	var bLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").prepend(bRole).prepend(bName);
	
	for(var x in bio.contacts) {
		topContacts.append(HTMLcontactGeneric.replace("%contact%",x).replace("%data%",bio.contacts[x]));
		footerContacts.append(HTMLcontactGeneric.replace("%contact%",x).replace("%data%",bio.contacts[x]));
	}

	$("#header").append(bPic).append(bMsg).append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
	    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
	    $("#skills").append(formattedSkills);
	}	
};

bio.display();

var education = {
	"schools": [{
			"name": "Fort Zumwalt North Highschool",
			"location": "Ofallon Missouri",
			"degree": "NA",
			"majors": ["Programming"],
			"dates": "1996-2000",
			"url" : "www.nowhere.com"
		}, {
			"name": "Example School",
			"location": "St Charles Missouri",
			"degree": "NA",
			"majors": ["Programming"],
			"dates": "2000-2004",
			"url": "www.nowhere.com"
		}


	],
	"onlineCourses": [{
		"title": "NA",
		"school": "NA",
		"date": "NA",
		"url": "NA"
	}]
};

education.display = function(){
	education.schools.forEach(function(val, i) {
	    $('#education').append(HTMLschoolStart);
	    var formattedName = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url);
	    var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
	    var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
	    var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
	    var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
	    var formattedNameDegree = formattedName + formattedDegree;
	    $('.education-entry:last').append(formattedNameDegree).append(formattedDates).append(formattedLocation).append(formattedMajors);
	});

	education.onlineCourses.forEach(function(val, i) {
    $('#education').append(HTMLschoolStart);
 			var oTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
			var oSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
			var oDate = HTMLonlineDates.replace("%data%",education.onlineCourses[i].date);
			var oUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
	    $('.education-entry:last').append(HTMLonlineClasses).append(oTitle + " - " + oSchool).append(oDate).append(oUrl);	
	});	 
};

education.display();

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Sr Specialist Application Developer",
			"location": "Earth City, Missouri",
			"dates": "2015 - Current",
			"description": "Application Developer for ATO and CARE Organizations"
		},
		{
			"employer": "AT&T",
			"title": "SR It Analyst",
			"location": "Earth City, Missouri",
			"dates": "Nov 2013 - 2015",
			"description": "Application Developer for ATO and CARE Organizations"
		}]
};


work.display = function(){

	work.jobs.forEach(function(val, i) {

	var wEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
	var wWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
	var wWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
	var wDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
	var wWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(wEmployer + wWorkTitle).append(wDatesWorked).append(wWorkLocation).append(wWorkDescription);
	    // $('#education').append(HTMLschoolStart);
	    // var formattedName = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url);
	    // var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
	    // var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
	    // var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
	    // var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
	    // var formattedNameDegree = formattedName + formattedDegree;
	    // $('.education-entry:last').append(formattedNameDegree).append(formattedDates).append(formattedLocation).append(formattedMajors);
	});

};

work.display();

var projects = {
    "projects":[{
          "title": "Example Project",
          "dates": "2014-2015",
          "description": "test description",
		  "images": ["http://vignette4.wikia.nocookie.net/starwars/images/6/63/Sabine_Starbird.svg/revision/latest?cb=20141030003059"]
    }]
};

projects.display = function(){
	projects.projects.forEach(function(val, i) {
 		//var oTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
	   	var pTitle = HTMLprojectTitle.replace("%data%", projects.projects[i]);
		var pDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var pDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(pTitle).append(pDates).append(pDescription)
			projects.projects[i].images.forEach(function(val, x) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[x]);
				$(".project-entry:last").append(formattedProjectImage);
			});
		
	});	 

	
};

projects.display();

$("#mapDiv").append(googleMap);
