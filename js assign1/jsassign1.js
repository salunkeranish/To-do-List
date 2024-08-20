document.addEventListener('DOMContentLoaded', () => {
  const studentForm = document.getElementById('studentForm');
  const studentRecords = document.getElementById('studentRecords');

  // Load stored students on page load
  loadStudents();

  studentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const studentName = document.getElementById('studentName').value.trim();
      const studentID = document.getElementById('studentID').value.trim();
      const emailID = document.getElementById('emailID').value.trim();
      const contactNo = document.getElementById('contactNo').value.trim();

      if (!validateForm(studentName, studentID, emailID, contactNo)) {
          alert('Please fill out all fields correctly.');
          return;
      }

      const student = { studentName, studentID, emailID, contactNo };
      addStudent(student);
      storeStudent(student);
      studentForm.reset();
  });

  function validateForm(name, id, email, contact) {
      const namePattern = /^[A-Za-z\s]+$/;
      const idPattern = /^[0-9]+$/;
      const contactPattern = /^[0-9]+$/;
      return namePattern.test(name) && idPattern.test(id) && contactPattern.test(contact) && validateEmail(email);
  }

  function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }

  function addStudent(student) {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${student.studentName}</td>
          <td>${student.studentID}</td>
          <td>${student.emailID}</td>
          <td>${student.contactNo}</td>
          <td>
              <button class="edit-btn" onclick="editStudent(this)">Edit</button>
              <button class="delete-btn" onclick="deleteStudent(this)">Delete</button>
          </td>
      `;
      studentRecords.appendChild(row);
  }

  function storeStudent(student) {
      const students = getStoredStudents();
      students.push(student);
      localStorage.setItem('students', JSON.stringify(students));
  }

  function getStoredStudents() {
      return JSON.parse(localStorage.getItem('students')) || [];
  }

  function loadStudents() {
      const students = getStoredStudents();
      students.forEach(student => addStudent(student));
  }

  window.editStudent = function (button) {
      const row = button.closest('tr');
      const studentName = row.cells[0].innerText;
      const studentID = row.cells[1].innerText;
      const emailID = row.cells[2].innerText;
      const contactNo = row.cells[3].innerText;

      document.getElementById('studentName').value = studentName;
      document.getElementById('studentID').value = studentID;
      document.getElementById('emailID').value = emailID;
      document.getElementById('contactNo').value = contactNo;

      deleteStudent(button);
  };

  window.deleteStudent = function (button) {
      const row = button.closest('tr');
      const studentID = row.cells[1].innerText;
      row.remove();

      let students = getStoredStudents();
      students = students.filter(student => student.studentID !== studentID);
      localStorage.setItem('students', JSON.stringify(students));
  };
});
