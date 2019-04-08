
// update the loading bar (although on my internet it loads too quickly to see)
var update_loading_bar = function(pbar, pos, max)
{
	pbar.style.width = ((pos/max)*100).toString() + "%";
}

// generate caption given data on an image
var caption = function(element)
{
	var date = element.earth_date;
	var cam = element.camera.full_name;

	return cam + " (" + date + ")"; 

}


// clears the page of elements
var clear_page = function()
{
	var gallery =  document.getElementById("gallery");
	while (gallery.firstChild)
	{
		gallery.removeChild(gallery.firstChild);
	}
}

// parse the json and create the gallery
var load_images = function(json)
{
	clear_page();

	if (json.photos.length < 1)
	{
		var empty = document.createElement("p");
		var emptytext = document.createTextNode("There are no photos");
		empty.append(emptytext);
		document.getElementsByClassName("gallery")[0].append(empty);
		return
	}

	var pbar = document.getElementById('pbar');

	var gallery_settings = `{
        "itemsBaseURL": "",
        "thumbnailWidth": "auto",
        "thumbnailHeight": 400,
        "thumbnailLabel": {
          "display": false
        },
        "thumbnailHoverEffect2": "imageScaleIn80|labelAppear75",
        "thumbnailAlignment": "center"
      }`

    var gallery = document.createElement("div");
    gallery.setAttribute("ID", "ngy2p");
   	gallery.setAttribute("data-nanogallery2", gallery_settings);

	for (var i =0; i < json.photos.length; i++)
	{
		// get image link and data
		var img_link = document.createElement("a");
		var img_caption = document.createTextNode(caption(json.photos[i]));

		// setup attributes and caption
		img_link.href = json.photos[i].img_src;
		img_link.append(img_caption);

		// add image to gallery
		gallery.append(img_link);

		update_loading_bar(pbar, i + 1, json.photos.length);
	}

	// remove loading bar and display gallery
	document.getElementsByClassName("progress")[0].style.display="none";
	//<script type="text/javascript" src="https://unpkg.com/nanogallery2/dist/jquery.nanogallery2.min.js"></script>
	var gallery_script = document.createElement("script");
	gallery_script.setAttribute("src", "https://unpkg.com/nanogallery2/dist/jquery.nanogallery2.min.js");
	
	gallery_element = document.getElementById("gallery");
	gallery_element.append(gallery);
	gallery_element.append(gallery_script);
}

// gets the data from nasa and update gallery
var request_images = function (date, camera)
{
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     
    	var json = JSON.parse(this.responseText);
    	load_images(json);
     }
  };	
 xhttp.open("GET", build_url(date, camera), true);
 xhttp.send();	
}