// ===========================  HOME PAGE: Wheel =========================== 

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


// =========================== RESOURCES: Form ===========================
// ref https://codepen.io/javascriptacademy-stash/pen/oNeNMNR

const form = document.getElementById('mt-rsc-form');
const resourceTitle = document.getElementById('resourceTitle');
const resourceType = document.getElementById('resourceType');
const resourceLink = document.getElementById('resourceLink');
const resourceAuthor = document.getElementById('resourceAuthor');
const resourceSummary = document.getElementById('resourceSummary');
const resourceDescription = document.getElementById('resourceDescription');

form.addEventListener(`submit`, e => {
	const isValid = validateInputs();

	if (!isValid){
		e.preventDefault();
	}

	// validateInputs();
});

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
}

const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
}

const isValidLink = link => {
	const re = /^(https?:\/\/)[^\s]+$/i;
    return re.test(String(link).toLowerCase());
}

const validateInputs = () => {
	let isFormValid = true;

	const titleValue = resourceTitle.value.trim();
	const typeValue = resourceType.value.trim();
	const linkValue = resourceLink.value.trim();
	const authorValue = resourceAuthor.value.trim();
	const summaryValue = resourceSummary.value.trim();
	const descriptionValue = resourceDescription.value.trim();

	// Title
	if (titleValue === '') {
		setError(resourceTitle, 'Title is required');
		isFormValid = false;
	} else {
		setSuccess(resourceTitle);
	}

	// Link
	if (linkValue === '') {
		setError(resourceLink, 'Link is required');
	} else if (!isValidLink(linkValue)) {
		setError(resourceLink, 'Provide a valid link address');
		isFormValid = false;
	} else {
		setSuccess(resourceLink);
	}

	// Author
	if (authorValue === '') {
		setError(resourceAuthor, 'Author is required');
		isFormValid = false;
	} else if (authorValue.length < 2) {
		setError(resourceAuthor, 'Author / Source must be at least 2 character.');
		isFormValid = false;
	} else {
		setSuccess(resourceAuthor);
	}

	// Type
	if (typeValue === ''){
		setError(resourceType, 'Type is required');
		isFormValid = false;
	} else {
		setSuccess(resourceType);
	}

	// Summary 
	if (summaryValue !== '' && summaryValue.length < 10){
		setError(resourceSummary, 'If you provide a summary, make it at least 10 charcters.');
		isFormValid = false;
	} else {
		setSuccess(resourceSummary);
	}

	// Description
	if (descriptionValue !== '' && descriptionValue.length < 20){
		setError(resourceDescription, 'If you describe it, add a bit more detail (20+ charcters.');
		isFormValid = false;
	} else {
		setSuccess(resourceDescription);
	}

	// Checkbox

	return isFormValid;
}

// Search Bar

