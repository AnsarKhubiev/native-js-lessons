import {ManType} from "./07";

let props: ManType
beforeEach(() => {
    props = {
        name: "Ansar",
        age: 35,
        lessons: [{title: "1",}, {title: "2"}],
        address: {
            title: "Lomonosova",
        }
    }
})

test("", () => {

    // const age = props.age
    // const lessons = props.lessons

    let {age, name, lessons, address} = props
    name = "Karim"
    lessons[0].title = "3"

    expect(name).toBe("Karim")
    expect(props.age).toBe(35)
    expect(props.age).toBe(35)
    expect(props.age).toBe(35)
    expect(props.lessons[0].title).toBe("3")
    expect(lessons[0].title).toBe("3")
    expect(props.address === address).toBe(true)
})

test("", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ls2] = props.lessons

        expect(ls1.title).toBe('1')
        expect(ls2.title).toBe('2')
})

