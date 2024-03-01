import {StudentType} from "../02-objects/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        "name": 'Ansar',
        age: 34,
        isActive: false,
        address: {
            streetTitle: "Mutlu City",
            city: {
                title: "Istanbul",
                countryTitle: 'Turkey'
            }
        },
        technologies: [
            {id: 1, title: "HTML"},
            {id: 2,title: "JS"},
            {id: 3,title: "CSS"},
            {id: 4,title: "React"},
        ]
    }
})

test("new skill should be added to student", () => {
addSkill(student, 'Angular');
expect(student.technologies.length).toBe(5);
expect(student.technologies[4].title).toBe('Angular');
expect(student.technologies[3].id).toBeDefined();
})

test("student should be active", () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student);
    expect(student.isActive).toBe(true)
})

test("Does student live in city?", () => {
    let result1 = doesStudentLiveIn(student, 'Moscow');
    let result2 = doesStudentLiveIn(student, 'Istanbul');
    expect(result1).toBe(false);
    expect(result2).toBe(true);
    })