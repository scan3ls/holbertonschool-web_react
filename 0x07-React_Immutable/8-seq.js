import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const students = Seq(grades)
    .filter((x) => x.score >= 70)
    .map((y) => {
      const x = y;
      x.firstName = x.firstName[0].toUpperCase() + x.firstName.slice(1);
      x.lastName = x.lastName[0].toUpperCase() + x.lastName.slice(1);
      return x;
    });
  console.log(students.toJSON());
}
