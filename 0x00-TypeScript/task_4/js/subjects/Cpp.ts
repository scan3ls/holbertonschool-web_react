/// <reference path="./Subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements() {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher() {
            if (!this.teacher) return 'No available teacher';
            if (!this.teacher.experienceTeachingC) return 'No available teacher';
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}