SELECT day, COUNT(*) total_assignments
FROM assignments
GROUP BY day
ORDER BY day;