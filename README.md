# twende-nasa

## WARNING: it could not finish it as I had a lot to do this weekend but I did do most of it

### How to run:

It should be able to run as itself. All the javascript includes are done through CDN

### What I did

In an attempt to not re-invent the wall, I used nanogallery to do the gallery of images. Javascript
is my least experienced language and I was not confident in my ability to build my own solution in
time. 

The homepage loads with photos taken from two days before. This time range was chosen as depending on the time you open the page, the rover may not have taken and photos.

Clicking on an image will open it in a lightbox and will display the date and camera as requested in the caption.

### Bugs and what was left to be done

The last thing to implement was the search. For the most part there was no issue except I think there is a bug in nanolibrary as it won't allow you to view the image when you click on it, but it refreshes the entire gallery. Again, I did not have the time to see if I could figure out a work around

### todo:

Better error handling when photos return nothing. Also the API returns many duplicate photos, maybe find a way to skip them.

As much as nanogallery made creating the gallery pretty easily, I think using my own solution would be better and relying on this library in particular may be stressful. 
