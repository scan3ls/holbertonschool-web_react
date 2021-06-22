interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

export class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    workTeacherTasks() {
        return 'Getting to work';
    }
}

export function createEmployee(salary: string | number) {
    if (typeof salary === 'string') salary = parseInt(salary);
    return ( salary < 500 ? new Teacher : new Director);
};

export function isDirector(employee: any): employee is Director {
    return employee instanceof Director;
}

export function executeWork(employee: DirectorInterface | TeacherInterface) {
    return (isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks());
}
