-- -- Answer to question no -4

-- -- Create Database

CREATE DATABASE hospital_db;

-- Create Table

CREATE TABLE departments(
dept_id int primary key,
dept_name varchar(50) not null,
floor_number int
);

-- Answer to the question no- 5

-- Create Doctor Table

CREATE TABlE doctors(
doctor_id int primary key,
doctor_name varchar(50) not null,
specialization varchar(50),
phone_number varchar(15),
dept_id int,
foreign key (dept_id) references departments(dept_id)
);

-- Answer to the question no - 6

-- Create Patients Table

CREATE TABLE patients(
patient_id int primary key,
patient_name varchar(50) not null,
gender varchar(10),
phone_number varchar(15),
address varchar(100)
);

-- Answer to the question no -7

-- Create Appointments Table

CREATE TABLE appointments(
appointment_id int primary key,
patient_id int,
doctor_id int,
appointment_date date,
status varchar(50),
fee numeric(8,2) default (0),
foreign key (patient_id) references patients(patient_id),
foreign key (doctor_id) references doctors(doctor_id)
);


-- Answer to the question no - 8

-- INSERT INTO departments

INSERT INTO departments (dept_id, dept_name, floor_number)
VALUES 
    (1, 'Cardiology', 3),
    (2, 'Neurology', 4),
    (3, 'Medicine', 2);

-- INSERT INTO doctors

INSERT INTO doctors (doctor_id, doctor_name, specialization, phone_number, dept_id)
VALUES 
    (101, 'Dr. Rahim Uddin',    'Cardiologist',        '01711000001', 1),
    (102, 'Dr. Nusrat Jahan',   'Neurologist',         '01711000002', 2),
    (103, 'Dr. Kamal Hossain',  'Medicine Specialist', '01711000003', 3),
    (104, 'Dr. Farzana Akter',  'Cardiologist',        '01711000004', 1);

-- INSERT INTO patients

INSERT INTO patients (patient_id, patient_name, gender, phone_number, address)
VALUES 
    (201, 'Arif Hasan',   'Male',   '01811000001', 'Dhanmondi'),
    (202, 'Sadia Islam',  'Female', '01811000002', 'Mirpur'),
    (203, 'Tanvir Ahmed', 'Male',   '01811000003', 'Uttara'),
    (204, 'Mitu Rahman',  'Female', '01811000004', 'Savar');


-- INSERT INTO appointments

INSERT INTO appointments (appointment_id, patient_id, doctor_id, appointment_date, status, fee)
VALUES
    (1001, 201, 101, '2026-10-01', 'Completed', 1000.00),
    (1002, 202, 102, '2026-10-02', 'Completed', 1200.00),
    (1003, 201, 103, '2026-10-03', 'Completed', 700.00),
    (1004, 203, 104, '2026-10-04', 'Scheduled', 1000.00),
    (1005, 204, 101, '2026-10-05', 'Cancelled', 0.00),
    (1006, 202, 103, '2026-10-06', 'Completed', 1500.00);

-- Answer to the question no 9

select 
p.patient_name, 
d.doctor_name 
from appointments as a
inner join patients as p on a.patient_id = p.patient_id
inner join doctors as d on a.doctor_id = d.doctor_id;

-- Answer to the question no 10

select 
doc.doctor_name,
dept.dept_name
from
doctors as doc
inner join departments as dept
on doc.dept_id = dept.dept_id;

-- Answer to the question no 11

select max(fee) as highest_appointment_fee from appointments;

-- Answer to the question no 12

SELECT
p.patient_name,
d.doctor_name,
a.fee
FROM appointments AS a
INNER JOIN patients AS p
ON a.patient_id = p.patient_id
INNER JOIN doctors AS d
ON a.doctor_id = d.doctor_id
WHERE a.fee = (SELECT MAX(fee) FROM appointments); -- Sub Query


