SELECT teachers.name AS teacher,
cohorts.name AS cohort,
COUNT(*) AS total_assistances
FROM assistance_requests
JOIN teachers ON teacher_id=teachers.id
JOIN students ON students.id=student_id
JOIN cohorts ON students.cohort_id=cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY teacher, cohort
ORDER BY teacher;