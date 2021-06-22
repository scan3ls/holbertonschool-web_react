// export const cpp: Subjects.Cpp = new Subjects.Cpp();
// export const java: Subjects.Java = new Subjects.Java();
// export const react: Subjects.React = new Subjects.React();
namespace Subjects {
    export const cpp: Cpp = new Cpp();
    export const java: Java = new Java();
    export const react: React = new React();
    export const teacher: Teacher = {
        firstName: 'Logan',
        lastName: 'Scanlon',
        experienceTeachingC: 10
    };
    
    console.log('C++');
    cpp.setTeacher(teacher);
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());
    
    console.log('Java');
    java.setTeacher(teacher);
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());
    
    console.log('React');
    react.setTeacher(teacher);
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());
}
