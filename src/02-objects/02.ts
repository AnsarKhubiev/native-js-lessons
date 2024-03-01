
type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

export const student: StudentType = {
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
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "JS"
        },
        {
            id: 3,
            title: "CSS"
        },
        {
            id: 4,
            title: "React"
        },
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)