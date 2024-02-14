// JavaScript code

// Function to toggle the visibility of the form overlay
function toggleFormOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = overlay.style.display === 'none' ? 'flex' : 'none';
}

// Function to handle form submission and display news items
document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var description = document.getElementById('description').value;

    var newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    newsItem.appendChild(descriptionElement);


    var newsList = document.getElementById('newsList');
    newsList.insertBefore(newsItem, newsList.firstChild);

    document.getElementById('description').value = '';

    toggleFormOverlay();
});


document.getElementById('fixedButton').addEventListener('click', function() {
    toggleFormOverlay();
});


document.getElementById('closeButton').addEventListener('click', function() {
    toggleFormOverlay();
});


document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'control.html';
});