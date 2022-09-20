// let username: string = ""
// const num = 123
// username = "123"
// // username = 123
// username = "James' Exampe"
// username = 'James "Woods"'
// username = `James ${num.toString()}`
var Student = /** @class */ (function () {
    function Student(first, last, courses) {
        this.first = first;
        this.last = last;
        this.courses = courses;
        // this.first = first;
        // this.last = last;
        // this.courses = courses;
    }
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var studentOne = new Student("Will", "Wilder", ["Codefi Front-End Bootcamp"]);
studentOne.enroll("Codefi Back-End Bootcamp");
// studentOne.courses
studentOne.listCourses();
console.log("studentOne:", studentOne);
// CLASSES & INTERFACES END \\
