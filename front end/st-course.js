
document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'Student.html';
});


document.getElementById('courseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var selectedCourse = document.getElementById('course').value;
    if(selectedCourse) {
        var courseArray = selectedCourse.split(':');
        addCourseToTable(courseArray[0], courseArray[1]);
        disableCourseOption(selectedCourse);
        document.getElementById('course').value = '';
    }
});

function addCourseToTable(courseName, courseCode) {
    var tableBody = document.getElementById('selectedCourses');
    var newRow = tableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2); 
    cell1.textContent = courseName;
    cell2.textContent = courseCode;
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-course-btn';
    removeButton.addEventListener('click', function() {

        removeCourseFromTable(newRow, courseName);
    });
    cell3.appendChild(removeButton);
}



function removeCourseFromTable(row, courseName) {
    // Remove the row from the table
    row.parentNode.removeChild(row);
    // Enable the corresponding option in the course select
    var courseSelect = document.getElementById('course');
    var options = courseSelect.options;
    for (var i = 0; i < options.length; i++) {
        if (options[i].textContent === courseName) {
            options[i].disabled = false;
            break;
        }
    }
}