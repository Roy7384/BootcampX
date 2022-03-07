SELECT students.name AS student, AVG(duration) AS total_assignment_duration
FROM students
JOIN assignment_submissions ON students.id=student_id
WHERE students.end_date IS NULL
GROUP BY student
ORDER BY total_assignment_duration DESC;