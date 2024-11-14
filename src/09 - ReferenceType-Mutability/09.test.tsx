type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

const increaseAge = (u: UserType) => {
    return u.age++
}


test("big reference type test", () => {
    const user = {
        name: "Ansar",
        age: 35,
        address: {
            title: "Kislovodsk"
        }
    }
    increaseAge(user)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
    expect(superman.age).toBe(1000)
})

test("array test", () => {
    const users = [
        {
            name: "Ansar",
            age: 35
        },
        {
            name: "Ayna",
            age: 33
        }
    ]

    const admin = users
    admin.push({name: "Karim", age: 8})

    expect(users[2]).toEqual({name: "Karim", age: 8})
})

test("value type test", () => {
    let usersCount = 1000

    let adminsCount = usersCount

    adminsCount++

    expect(usersCount).toEqual(1000)
})

test("reference type test", () => {
    const user = {
        name: "Ansar",
        age: 35,
        address: {
            title: "Kislovodsk"
        }
    }

    let addr = user.address

    const user2: UserType = {
        name: "Murat",
        age: 32,
        address: addr
    }

    user2.address.title = "Moscow"

    expect(user.address.title).toBe("Moscow")
})


test("reference type array test", () => {
    const address = {
        title: "Kislovodsk"
    }
    const user = {
        name: "Ansar",
        age: 35,
        address: address
    }
    const user2: UserType = {
        name: "Murat",
        age: 32,
        address: address
    }

    const users = [user, user2, {name: "Karim", age: 8, address: address}]
    const admins = [user, user2]
    admins[0].name = "Ans"

    expect(users[0].name).toBe("Ans")
})

test("sort array test", () => {
    const letters = ["b", "f", "n", "a"]
    letters.sort()
    expect(letters).toEqual(["a", "b", "f", "n"])
})

