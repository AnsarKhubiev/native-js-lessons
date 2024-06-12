const mentors = [
    {id: 'id100', title: "Dimych", salary: 10},//0
    {id: 'id20222', title: "Viktor", salary: 100},//1
    {id: 'id323242', title: "Valera", salary: 100},//2
    {id: 'id489829898989', title: "Artem", salary: 100}//3
];

const artemId = 'id489829898989';
const mentor1 = mentors.find(m => m.id === artemId);

const mentor2 = mentors[3];

mentor1.salary = 50;

// console.log(mentor1['salary'])

const propertyName = 'title'
const value = 'Sveta'

mentors[propertyName] = value
// console.log(mentors[propertyName])


const students = [
    {id: 'id100', title: "Andrew"}, //0
    {id: 'id2', title: "Anna"}, //1
    {id: 'id4', title: "Sasha"}, //2
    {id: 'id1000000', title: "Marina"},//1000000
];

const studentObj = [
    {id100: {id: 'id100', title: 'Andrew'}},
    {id2: {id: 'id2', title: 'Anna'}},
    {id4: {id: 'id4', title: 'Sasha'}},
    {
        id1000000: {
            id: 'id1000000',
            title: 'Marina',
            technologies: [
                {id: 1, title: "CSS"},
                {id: 2, title: "HTML"},
                {id: 3, title: "Reac"},
                {id: 4, title: "JS"},
            ]
        }
    }
]

// const marina = studentObj.find((s)=> s['id1000000'])
// let tech = marina.id1000000.technologies.find((t)=> t.id === 4)
// tech.title = 'React'

const marina = studentObj.find((s) => s['id1000000'])['id1000000'].technologies.find((t) => t.id === 3).title = 'React'
console.log(marina)


const studentObj2 = {
    id100: {id100: {id: 'id100', title: 'Andrew'}},
    id2: {id2: {id: 'id2', title: 'Anna'}},
    id4: {id4: {id: 'id4', title: 'Sasha'}},
    id1000000: {
            id: 'id1000000',
            title: 'Marina',
            technologies: {
                1: {id: 1, title: "CSS"},
                2: {id: 2, title: "HTML"},
                3: {id: 3, title: "Reac"},
                4: {id: 4, title: "JS"},
            }
    }
}

const tech2 = studentObj2['id1000000'].technologies[3].title = 'React'
console.log(tech2)
