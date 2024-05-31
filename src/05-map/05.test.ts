import {CreateGreetingMessage, ManType, } from "./05";

let people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18}
    ]
})

test("Should get arr of greeting messages", () => {
    const messages = CreateGreetingMessage(people)


    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello, Andrew! Welcome to IT-Incubator!")

})


