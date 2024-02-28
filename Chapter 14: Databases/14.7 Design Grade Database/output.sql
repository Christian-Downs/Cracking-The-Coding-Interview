
select * from (select
	s.name,
		avg(grade) as grade
from
	student s
join enrollement e ON
		s.id = e.student_id
group by
		e.student_id 
order by
		avg(grade) desc)
where 
grade >=
	(select
	Min(grade)
from
	(
	select
		avg(grade) as grade
	from
		enrollement e
	group by
		student_id
	order by
		avg(grade) desc
	limit (
	select
		count(*)
	from
		student)/ 10
	))
