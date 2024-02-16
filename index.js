// DOM Elements Variables
const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

// Date Object Variable
const date = new Date();

// Date Elements Variables
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

// Formatted Date Variable
const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

// Event Listener For Date Options
dateOptionsSelectElement.addEventListener('change', () => {
	switch (dateOptionsSelectElement.value) {
		case 'yyyy-mm-dd':
			currentDateParagraph.textContent = formattedDate.split('-').reverse().join('-');
			break;
		case 'mm-dd-yyyy-h-mm':
			currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
			break;
		default:
			currentDateParagraph.textContent = formattedDate;
	}
});
