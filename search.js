var process_form = function()
{
	var cam = document.getElementById("camera_input").value;

	switch (cam)
	{
		case "Front Hazard Avoidance Camera":
		cam = "fhaz";
		break;
		case "Rear Hazard Avoidance Camera":
		cam = "rhaz";
		break;
		case "Mast Camera":
		cam = "mast";
		break;
		case "Chemistry and Camera Complex":
		cam = "chemcam";
		break;
		case "Mars Hand Lens Imager":
		cam = "mahli";
		break;
		case "Mars Descent Imager":
		cam = "mardi";
		break;
		case "Navigation Camera	":
		cam = "navcam";
		break;
		case "All":
		cam = "all";
		break;
	}

	var date = document.getElementById("date_input").value;
	date = new Date(date);
	date = format_date(date);

	request_images(date, cam);
}