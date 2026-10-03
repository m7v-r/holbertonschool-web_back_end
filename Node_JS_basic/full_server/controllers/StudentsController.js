import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const filePath = process.argv[2];

    readDatabase(filePath)
      .then((fields) => {
        const output = ['This is the list of our students'];
        const sortedKeys = Object.keys(fields).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

        for (const key of sortedKeys) {
          output.push(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
        }

        response.status(200).send(output.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const filePath = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major must be CS or SWE');
      return;
    }

    readDatabase(filePath)
      .then((fields) => {
        const students = fields[major] || [];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
