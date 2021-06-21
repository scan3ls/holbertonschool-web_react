interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'student',
    lastName: 'One',
    age: 16,
    location: 'High School',
}

const student2: Student = {
    firstName:  'student',
    lastName: 'Two',
    age: 18,
    location: 'University',
}

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const col1 = document.createElement('td');
    const col2 = document.createElement('td');

    col1.innerHTML = student.firstName;
    col2.innerHTML = student.location;

    row.append(col1, col2);
    tbody.append(row);
});

table.append(tbody);
document.body.appendChild(table);
