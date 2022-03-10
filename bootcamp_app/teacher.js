const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const value = [`${process.argv[2]}%`];
const queryString = `
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests
JOIN teachers ON teacher_id=teachers.id
JOIN students ON students.id=student_id
JOIN cohorts ON students.cohort_id=cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teacher;
`;

pool.query(queryString, value).then(res => {
  res.rows.forEach(row => console.log(`${row.cohort}: ${row.teacher}`));
}).catch(err => {
  console.error('query error', err.stack);
});