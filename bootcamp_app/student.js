const { Pool } = require('pg');
const arg = process.argv.slice(2);
const resultLimit = arg[1];
const cohortName = arg[0] + '%';

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect((err, res) => {
  console.log('Connected');
});

pool.query(`
SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort
FROM students
JOIN cohorts ON cohort_id=cohorts.id
WHERE cohorts.name LIKE '${cohortName}'
LIMIT ${resultLimit};
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch(err => {
    console.error('query error', err.stack);
  });
