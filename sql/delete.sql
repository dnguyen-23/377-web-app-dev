-- this is a file for deleting records

-- 1.) we first have to identify the ID of the student that we are deleting from
select *
from students
where stu_id = 'STD0000003QhS1'
;

delete
from students 
where stu_id = 'STD0000003QhS1'
;

-- 2.) We have to delete the children records that are dependent on the deleted student
-- we need to eliminate the orphans
select *
from attendance
where att_stu_id = 'STD0000003QhS1'
;


-- we are going to work with a subset of the students ot make it easier to review the results
select stu_id, stu_first_name, stu_last_name , count(*)
from students
left outer join attendance on att_stu_id = stu_id -- this will also join the students that didn't have an attendance record
where stu_last_name like "Le%"
and stu_grade_level = "12"
and att_stu_id is NULL -- is NULL, you cannot say = NULL
group by stu_id, stu_first_name, stu_last_name 
;
-- you have to group by all three columns because the sql engine wants to make sure you know specifically what results you want

-- find the total number of orphans in the att table
select count(*)
from students
left outer join attendance on att_stu_id = stu_id -- you must use left outer join because you are finding orphans, this means that they don't have a parent (a stu_id)
where stu_id IS NULL
;

delete from students where stu_last_name like 'Z%';

-- using the in operator based on a sub-select
select *
from students
where stu_skl_id in (select skl_id from schools where skl_name like "%Elementary%")
;

select *
from students
where stu_skl_id not in (select skl_id from schools where skl_name like "%Elementary%")
;

-- identify the orphaned attendance records using sub-select in clause
delete
from attendance
where att_stu_id not in (select stu_id from students)
;

select stu_id, stu_first_name, stu_last_name
from students
left outer join attendance on stu_id = att_stu_id
-- where stu_id is NULL
;