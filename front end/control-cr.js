document.getElementById('logoutBtn').addEventListener('click', function() {
  window.location.href = 'control.html';
});


const form = document.getElementById('courseForm');
const table = document.getElementById('courseTable');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(event) {
event.preventDefault();

const courseCode = document.getElementById('courseCode').value;
const courseName = document.getElementById('courseName').value;

if (!courseCode || !courseName) {
  document.getElementById('formError').style.display = 'block';
  return;
}

if (isCourseCodeExists(courseCode)) {
  document.getElementById('courseCodeError').textContent = 'This Course Code already exists.';
  document.getElementById('courseCodeError').style.display = 'block';
  return;
}

document.getElementById('courseCodeError').style.display = 'none';
document.getElementById('formError').style.display = 'none';

const newRow = table.insertRow();
newRow.innerHTML = `
  <td>${courseCode}</td>
  <td>${courseName}</td>
  <td class="action-buttons">
  <input type="button" value="Remove" onclick="removeCourse(this)">
  <input type="button" value="Edit" onclick="editCourse(this)">
</td>  `;


form.reset();
});

function removeCourse(button) {
const row = button.parentNode.parentNode;
row.parentNode.removeChild(row);
}

function editCourse(button) {
const row = button.parentNode.parentNode;
const cells = row.getElementsByTagName('td');

// Fill the form with existing data
document.getElementById('courseCode').value = cells[0].innerText;
document.getElementById('courseName').value = cells[1].innerText;

row.parentNode.removeChild(row);
}

function isCourseCodeExists(courseCode) {
const codes = Array.from(table.rows).map(row => row.cells[0].innerText);
return codes.includes(courseCode);
}


const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function(event) {
event.preventDefault();
const searchCourseCode = document.getElementById('searchCourseCode').value.toLowerCase();
const rows = table.getElementsByTagName('tr');
for (let i = 0; i < rows.length; i++) {
  const cells = rows[i].getElementsByTagName('td');
  const courseCode = cells[0].innerText.toLowerCase();
  if (courseCode.includes(searchCourseCode)) {
    rows[i].style.display = '';
  } else {
    rows[i].style.display = 'none';
  }
}
});