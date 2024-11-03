var students = [];

function showStudents() {
  totalNC = 0;

  for (let i = 0; i < students.length; i++) {
    var student = students[i];
    console.log(student);

    totalNC += students[i].NC;

    console.log(totalNC);
  }

  averageNC = totalNC / students.length;
  console.log(averageNC);
}

function addStudents() {
  var studentName = document.getElementById("inputName").value;
  var studentNumber = parseInt(document.getElementById("inputID").value);
  var studentNC = parseFloat(document.getElementById("inputNC").value);

  var student = {
     "Name": studentName,
     "Matrikelnummer": studentNumber,
     "NC": studentNC,
  };

  students.push(student);
  console.log(students);
  

}
