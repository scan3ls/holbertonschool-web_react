/// <reference path="./Subject.ts" />
namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements() {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher() {
            if (!this.teacher) return 'No available teacher';
            if (!this.teacher.experienceTeachingReact) return 'No available teacher';
            return `Available Teacher: ${this.teacher.firstName}`
        }
    }
}
