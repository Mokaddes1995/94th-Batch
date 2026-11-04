Employee (কর্মচারী)

Employee
├── emp_id (PK)           → SERIAL PRIMARY KEY
├── first_name            → VARCHAR(50)
├── last_name             → VARCHAR(50)
├── gender                → VARCHAR(10)
├── date_of_birth         → DATE
├── email                 → VARCHAR(100) UNIQUE
├── phone                 → VARCHAR(15)
├── hire_date             → DATE
├── salary                → DECIMAL(10,2)
├── dept_id (FK)          → Department-এর সাথে সম্পর্ক
├── job_id (FK)           → Job-এর সাথে সম্পর্ক
├── manager_id (FK)       → নিজের টেবিলের সাথে (Self-referencing)
└── status                → VARCHAR(20) (Active/Inactive)


Department (বিভাগ)

Department
├── dept_id (PK)          → SERIAL PRIMARY KEY
├── dept_name             → VARCHAR(100) UNIQUE
├── location              → VARCHAR(100)
├── budget                → DECIMAL(12,2)
└── manager_id (FK)       → Employee-এর দিকে


Job / Position (পদ)

Job
├── job_id (PK)           → SERIAL PRIMARY KEY
├── job_title             → VARCHAR(100)
├── min_salary            → DECIMAL(10,2)
└── max_salary            → DECIMAL(10,2)

Project (প্রকল্প)

Project
├── project_id (PK)       → SERIAL PRIMARY KEY
├── project_name          → VARCHAR(100)
├── start_date            → DATE
├── end_date              → DATE
├── budget                → DECIMAL(12,2)
└── dept_id (FK)          → Department-এর সাথে


Attendance (উপস্থিতি)

Attendance
├── attendance_id (PK)    → SERIAL PRIMARY KEY
├── emp_id (FK)           → Employee-এর সাথে
├── attendance_date       → DATE
├── check_in              → TIME
├── check_out             → TIME
└── status                → VARCHAR(20) (Present/Absent/Late)


Salary / Payroll (বেতন)

Payroll
├── payroll_id (PK)       → SERIAL PRIMARY KEY
├── emp_id (FK)           → Employee-এর সাথে
├── pay_month             → VARCHAR(20)
├── basic_salary          → DECIMAL(10,2)
├── bonus                 → DECIMAL(10,2)
├── deduction             → DECIMAL(10,2)
├── net_salary            → DECIMAL(10,2)
└── pay_date              → DATE


 Leave (ছুটি)

 Leave
├── leave_id (PK)         → SERIAL PRIMARY KEY
├── emp_id (FK)           → Employee-এর সাথে
├── leave_type            → VARCHAR(50) (Sick/Casual/Annual)
├── start_date            → DATE
├── end_date              → DATE
├── reason                → TEXT
└── status                → VARCHAR(20) (Approved/Pending/Rejected)

