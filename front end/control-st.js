//logout
document.getElementById('logoutBtn').addEventListener('click', function() {
  window.location.href = 'control.html';
});

const form = document.getElementById('studentForm');
const table = document.getElementById('studentTable');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(event) {
event.preventDefault();

const id = document.getElementById('id').value;
const fullName = document.getElementById('fullName').value;
const level = document.getElementById('level').value;
const gpa = document.getElementById('gpa').value || '0'; 
const group = document.getElementById('group').value;
const password = document.getElementById('password').value;

if (!id || !fullName || !level || !group || !password) {
  document.getElementById('formError').style.display = 'block';
  return;
}

if (isIdExists(id)) {
  document.getElementById('idError').textContent = 'This ID already exists.';
  document.getElementById('idError').style.display = 'block';
  return;
}

document.getElementById('idError').style.display = 'none';
document.getElementById('formError').style.display = 'none';

const newRow = table.insertRow();
newRow.innerHTML = `
  <td>${id}</td>
  <td>${fullName}</td>
  <td>${level}</td>
  <td>${gpa}</td>
  <td>${group}</td>
  <td>${password}</td>
  <td class="action-buttons">
  <input type="button" value="Remove" onclick="removeStudent(this)">
  <input type="button" value="Edit" onclick="editStudent(this)">
</td>  `;



form.reset();
});

function removeStudent(button) {
const row = button.parentNode.parentNode;
row.parentNode.removeChild(row);
}

function editStudent(button) {
const row = button.parentNode.parentNode;
const cells = row.getElementsByTagName('td');

// Fill the form with existing data
document.getElementById('id').value = cells[0].innerText;
document.getElementById('fullName').value = cells[1].innerText;
document.getElementById('level').value = cells[2].innerText;
document.getElementById('gpa').value = cells[3].innerText;
document.getElementById('group').value = cells[4].innerText;
document.getElementById('password').value = cells[5].innerText;


row.parentNode.removeChild(row);
}

function isIdExists(id) {
const ids = Array.from(table.rows).map(row => row.cells[0].innerText);
return ids.includes(id);
}


const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function(event) {
event.preventDefault();
const searchQuery = document.getElementById('searchQuery').value.toLowerCase();
const rows = table.getElementsByTagName('tr');
for (let i = 0; i < rows.length; i++) {
  const cells = rows[i].getElementsByTagName('td');
  let found = false;
  for (let j = 0; j < cells.length; j++) {
    const cellText = cells[j].innerText.toLowerCase();
    if (cellText.includes(searchQuery)) {
      found = true;
      break;
    }
  }
  if (found) {
    rows[i].style.display = '';
  } else {
    rows[i].style.display = 'none';
  }
}
});