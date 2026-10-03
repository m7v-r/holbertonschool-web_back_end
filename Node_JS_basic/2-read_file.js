const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(path, 'utf-8');
  const lines = fileContent.split('\n').filter((line) => line.trim() !== '');

  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  const students = lines.slice(1);
  console.log(`Number of students: ${students.length}`);

  const fields = {};

  students.forEach((student) => {
    const parts = student.split(',');
    const firstname = parts[0];
    const field = parts[3];

    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  });

  for (const [field, names] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
