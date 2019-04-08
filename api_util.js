// format date as a string for the api
var format_date = function(date)
{
	var dd = String(date.getDate()).padStart(2, '0');
	var mm = String(date.getMonth() + 1).padStart(2, '0'); 
	var yyyy = date.getFullYear();

	return yyyy + '-' + mm + '-' + dd;
}

// get current date
var get_date = function()
{
	var date = new Date();

	// okay yeah it not yesterday but day before. this is because if depending on t
	// local time, the rover may not have actually taken any pictures and the api would
	// just return 20 something of the same image
	date.setDate(date.getDate()-2);

	return format_date(date);	
}

// builds the url to send to nasa api
var build_url = function(date, camera)
{
	var base = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?"; //sol=1000&api_key=DEMO_KEY"
	
	var api_key = "&api_key=9gpz2bqBinpqUpx2IBt4wG5IiYj848gPYHzqy3U0";

	var earth_date = "earth_date=" + date;
	var cam = "";

	if (!(camera === "all"))
	{
		cam = "&camera=" + camera;
	}

	console.log(base + earth_date + cam + api_key);
	return base + earth_date + cam + api_key;
}