
document.getElementById('logoutBtn').addEventListener('click', function() {

    window.location.href = 'Student.html';
});

function showEditGroupDropdown(studentId) {
    var groupCell = document.getElementById('group-' + studentId);
    var currentGroup = groupCell.innerText;
    var select = document.createElement('select');
    select.innerHTML = '<option value="A">Group A</option><option value="B">Group B</option>';
    select.value = currentGroup.trim().toUpperCase();
    select.addEventListener('change', function() {
        updateGroup(studentId, select.value);
    });
    groupCell.innerHTML = '';
    groupCell.appendChild(select);
}

function updateGroup(studentId, newGroup) {
    var groupCell = document.getElementById('group-' + studentId);
    groupCell.innerText = newGroup;
}
