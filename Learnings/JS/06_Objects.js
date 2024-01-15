const student = {
    firstName: "Aryan",
    lastName: "Tomar",
    age: 20,
    isStudent: true,
    acads: {
        major: "FullStack",
        pep: "MERN",
        platform: ["myperfectice", "hitbullseye"],
        scores: {
            amcat: 99,
            cocubes: 98,
        },
    },
};

console.log(student);

console.log(student.acads);
console.log(student.firstName);
console.log(student.lastName);
console.log(student.age);
console.log(student.isStudent);
console.log(student.acads.major);
console.log(student.acads.pep);
console.log(student.acads.platform);
console.log(student.acads.platform[0]);
console.log(student.acads.platform[1]);
console.log(student.acads.scores);
console.log(student.acads.scores.amcat);
console.log(student.acads.scores.cocubes);