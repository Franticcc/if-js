const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  }
];

class User {
  constructor( parameter ) {
    this.firstName = parameter.firstName;
    this.lastName = parameter.lastName;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

class Student extends User {
  constructor(parameter ) {
    super(parameter);
    this.admissionYear = parameter.admissionYear;
    this.courseName = parameter.courseName;
  }

  get course() { 
    return new Date().getFullYear() - this.admissionYear; 
   }
}

class Students {
  constructor(studentsData) {
    this.studentsData = studentsData; 
  }

  getInfo() {
    return this.studentsData.map((infoStudent) => 
    `${new User(infoStudent).fullName} - ${new Student(infoStudent).courseName} - ${new Student(infoStudent).course} курс`,);
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());

// class User {
//     constructor( firstName, lastName ) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
  
//     get fullName() {
//       return this.firstName + ' ' + this.lastName;
//     }
//   }
  
//   class Student extends User {
//     constructor(firstName, lastName, admissionYear, courseName ) {
//       super(firstName, lastName );
//       this.admissionYear = admissionYear;
//       this.courseName = courseName;
//     }
  
//     get course() { 
//       return new Date().getFullYear() - this.admissionYear; 
//      }
//   }
  
//   class Students {
//     constructor(studentsData) {
//       this.studentsData = studentsData; 
//     }
  
//     getInfo() {
//       return this.studentsData.map((infoStudent) => 
//       `${new User(infoStudent).fullName} - ${new Student(infoStudent).courseName} - ${new Student(infoStudent).course} курс`,);
//     }
//   }
  
//   const students = new Students(studentsData);
//   console.log(students.getInfo());