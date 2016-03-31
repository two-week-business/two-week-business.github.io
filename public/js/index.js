var teams = [
{
	name: "Seasonal Grams",
	blog: "http://dtechseasonalgrams.weebly.com",
	logo: "2/seasonal-logo.png",	
	image: "2/seasonal-pic.png",
	point1: "Easter Grams sold: 43",
	point2: "Formal Grams sold: 14",
	point3: "Serendades played: 6"
},
{
	name: "Highlander",
	blog: "http://highlandertournaments.weebly.com",
	logo: "2/highlander-logo.png",	
	image: "2/highlander-pic.png",
	point1: "E-Sports tournaments held: 3",
	point2: "Profit : $64",
	point3: "Money lost in own tournament: $4"
},
{
	name: "Buy Our Spam",
	blog: "http://buyourspam.weebly.com",
	logo: "2/spam-logo.png",	
	image: "2/spam-pic.png",
	point1: "Spam Musubi sold: 134",
	point2: "Vegetarian musubi Sold: 37",
	point3: "Business partnerships: 3"
},
{
	name: "Diamond Mentors",
	logo: "2/diamond-logo.png",	
	image: "2/diamond-pic.png",
	point1: "Mentors acquired: 3",
	point2: "Mentees connected: 10",
	point3: "Emails sent: 39"
},
{
	name: "Taiyaki",
	blog: "http://bitaiyaki.wordpress.com",
	logo: "2/taiyaki-logo.png",	
	image: "2/taiyaki-pic.png",
	point1: "Chocolate Taiyaki sold: 167",
	point2: "Strawbery Taiyaki sold: 49",
	point3: "Taiyaki shirts sold: 11"
},
{
	name: "First Served Food",
	blog: "http://fmalik18.wix.com/deliveryservice",
	logo: "2/first-logo.png",	
	image: "2/first-pic.png",
	point1: "Food items sold: 315",
	point2: "Types of food: 5",
	point3: "Ideas 'borrowed' from other teams: 3"
},
{
	name: "Cheese Please",
	blog: "https://medium.com/@buycheeseplease",
	logo: "2/cheese-logo.png",	
	image: "2/cheese-pic.png",
	point1: "Grilled Cheese sold: 192",
	point2: "School shirts sold: 8",
	point3: "Laser etched Grilled Cheese sold: 1"
},
{
	name: "Shake It Up",
	blog: "http://brubenstein19.wix.com/shake-it-up",
	logo: "2/shake-logo.png",	
	image: "2/shake-pic.png",
	point1: "Milkshakes Sold: 87",
	point2: "Number of Flavors: 8",
	point3: "Side Hustles: 3"
},
{
	name: "Kashè",
	blog: "http://teamkasheblog.wordpress.com",
	logo: "2/kashe-logo.png",	
	image: "2/first-pic.png",
	point1: "Profit from ice cream sandwhich sales: $105",
	point2: "Profit from photography services: $33",
	point3: "Ice cream toppings: 4 (if you include grilled cheese from other teams)"
},
]

function setContentHeight() {	
	var viewportHeight = window.innerHeight;		
	$("section-1").css("#height", viewportHeight);		

	var sections = $(".section");
	for (i = 0; i < sections.length; i ++)  {		
		sections[i].style.visibility = "visible";
	}
}

$(function() {	
	setContentHeight();
	var container = $(".teams-container");

	teams.forEach(function(team, i) {
		container.append(teamRow(team, i));
	})
})

function teamRow(teamObj, rowNumber) {
	var newRow = $(".model").clone().removeClass("model");

	if ((rowNumber % 2) === 0) {
		newRow.addClass("even")
	} else {
		newRow.addClass("odd")
	}

	var filePrefix = "public/img/";
	newRow.find(".business-name").html(teamObj.name);
	newRow.find(".business-logo").attr("src", filePrefix + teamObj.logo);
	newRow.find(".team-pic").attr("src", filePrefix + teamObj.image);
	newRow.find(".point-1").html(teamObj.point1);
	newRow.find(".point-2").html(teamObj.point2);
	newRow.find(".point-3").html(teamObj.point3);
	newRow.find(".blog-link").attr("href", teamObj.blog);

	return newRow
}