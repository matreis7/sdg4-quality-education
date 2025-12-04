// script/main.js
//page author: Thales Ferrari

//Source: https://stackoverflow.com/questions/31954089/how-can-i-reuse-a-navigation-bar-on-multiple-pages
//When page finish loading, fetch the html file 
$(function() {
	//load the navigation.html into the place holder
	$("#nav-placeholder").load("navigation.html", function() {
		//This runs after the navbar was inserted 
		navbarScrollEffect();
	});
	//load the footer.html
	$("#footer-placeholder").load("footer.html");
});


// Navbar behaviour
function navbarScrollEffect (){
	const navEl = document.querySelector(".navbar");
	if (!navEl) return; // Safety check

	window.addEventListener("scroll", function(){
		if (window.scrollY >= 56){
			navEl.classList.add("navbar-scrolled");
		}else if(window.scrollY < 56){
			navEl.classList.remove("navbar-scrolled");
		}
	});
};

// Home page 

// Wheel:

// Evenly slices arround the circle

document.addEventListener("DOMContentLoaded", setupWheelSlices);

function setupWheelSlices() {
  const orbit = document.querySelector(".mt-sdg-wheel-orbit");
  if (!orbit) return; // only on pages that have the wheel

  const slices = orbit.querySelectorAll("li");
  if (!slices.length) return;

  const total = slices.length; // numbers of slices
  const step = 360 / total; // angle step

  // SDG-style colours for each slice
  const colours = [
  	"#C5192D", // 1
  	"#4C9F38", // 2
  	"#FF3A21", // 3
  	"#26BDE2", // 4
  	"#FCC30B", // 5
  	"#A21942", // 6
  	"#DD1367", // 7
  	"#3F7E44", // 8
  ];

  // Loop through slices and set their angle
  slices.forEach((slice, index) => {
    const angle = index * step;

    // Rotate it around the center and turn it into a triangle-like wedge:

    // rotate = make the slices spread arround the circle
    // skew = make the square become a wedge-shaped slice
    slice.style.transform = `rotate(${angle}deg) skew(50deg)`; 

    // Adding colours to each slice:

  	// Take the link inside this slice
  	const link = slice.querySelector(".mt-sdg-wheel-item");
  	if (!link) return;
	
	// pick a colour based on index
	const colour = colours[index % colours.length];

	// set the radial-gradient background
	link.style.backgroundImage = 
	`radial-gradient(circle closest-side at 50% 50%,
	transparent 58%, ${colour} 58%, ${colour} 99%, transparent 99%)`;
  });
}


// Resources Page 

// Form