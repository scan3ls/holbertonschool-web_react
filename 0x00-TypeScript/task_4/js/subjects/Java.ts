/// <reference path="./Subject.ts" />
namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements() {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher() {
            if (!this.teacher) return 'No available teacher';
            if (!this.teacher.experienceTeachingJava) return 'No available teacher';
            return `Available Teacher: ${this.teacher.firstName}`
        }
    }
}
