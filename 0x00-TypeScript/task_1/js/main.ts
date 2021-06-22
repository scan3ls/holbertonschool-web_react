interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction; 
printTeacher = (firstName:string, lastName: string) => {
    return `${firstName[0]}. ${lastName}`;
}

interface IStudent {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}


interface IStudentConstructor {
    new (firstName: string, lastName: string): IStudent;
}

class StudentClass implements IStudent{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return "Currently working"
    }

    displayName() {
        return this.firstName
    }
}
