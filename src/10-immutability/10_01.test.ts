import {
    addNewBooksToUser,
    makeHairStyle,
    moveUserToOtherCity, moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    updateLaptop,
    UserWithBooks,
    UserWithLaptopType, WithCompaniesType
} from "./10_1";


test("reference type test", () => {
    const user = {
        name: "Ansar",
        hair: 35,
        address: {
            city: "Kislovodsk"
        }
    }

    const awesomeUser = makeHairStyle(user, 2)
    expect(awesomeUser.hair).toEqual(17.5)
    expect(user.hair).toEqual(35)
})

test("change address test", () => {
    const user: UserWithLaptopType = {
        name: "Ansar",
        hair: 35,
        address: {
            city: "Kislovodsk",
        },
        laptop: {
            title: "Asus"
        }
    }

    const movedUser = moveUserToOtherCity(user, "Istanbul")
    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe("Istanbul")
    expect(user.laptop).toBe(movedUser.laptop)

})

test("upgrade laptop to macbook", () => {
    const user: UserWithLaptopType = {
        name: "Ansar",
        hair: 35,
        address: {
            city: "Kislovodsk",
        },
        laptop: {
            title: "Asus"
        }
    }

    const userWithNewLaptop = updateLaptop(user, "macbook")

    expect(user).not.toBe(userWithNewLaptop)
    expect(user.address).toBe(userWithNewLaptop.address)
    expect(user.laptop).not.toBe(userWithNewLaptop.laptop)
    expect(userWithNewLaptop.laptop.title).toBe("macbook")
    expect(user.laptop.title).toBe("Asus")

})

test("move user to another house", () => {
    const user: UserWithLaptopType & UserWithBooks = {
        name: "Ansar",
        hair: 35,
        address: {
            city: "Kislovodsk",
        },
        laptop: {
            title: "Asus"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = moveUserToOtherHouse(user, 14)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.houses).toBe(14)
})

test("add new books to user", () => {
    const user: UserWithLaptopType & UserWithBooks = {
        name: "Ansar",
        hair: 35,
        address: {
            city: "Kislovodsk",
        },
        laptop: {
            title: "Asus"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = addNewBooksToUser(user, "ts")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("ts")
    expect(userCopy.books.length).toBe(5)
})

test("update js to ts", () => {
    const user: UserWithLaptopType & UserWithBooks = {
        name: "Ansar",
        hair: 35,
        address: {
            city: "Kislovodsk",
        },
        laptop: {
            title: "Asus"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = updateBook(user, "js", "ts")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("ts")
    expect(userCopy.books.length).toBe(4)
})

test("remove js book", () => {
    const user: UserWithLaptopType & UserWithBooks = {
        name: "Ansar",
        hair: 35,
        address: {
            city: "Kislovodsk",
        },
        laptop: {
            title: "Asus"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = removeBook(user, "js")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("react")
    expect(userCopy.books.length).toBe(3)
})

test("change title od company", () => {
    const user: UserWithLaptopType & WithCompaniesType = {
        name: "Ansar",
        hair: 35,
        address: {
            city: "Kislovodsk",
        },
        laptop: {
            title: "Asus"
        },
        companies: [
            {id: 1, title: "Епам"},
            {id: 2, title: "Apple"},
            {id: 3, title: "Google"}
        ]
    }

    const userCopy = updateCompanyTitle(user, 1, "Epam")
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies[0].title).toBe("Епам")
    expect(userCopy.companies[0].title).toBe("Epam")
})

test("update company", () => {
    const user: UserWithLaptopType = {
        name: "Ansar",
        hair: 35,
        address: {
            city: "Kislovodsk",
        },
        laptop: {
            title: "Asus"
        },
    }

    const companies = {
        "Ansar": [
            {id: 1, title: "Microsoft"},
            {id: 2, title: "Apple"},
            {id: 3, title: "Google"}
        ],
        "Karim": [
            {id: 1, title: "Bayramlar"},
            {id: 2, title: "Fenerbahce"},
            {id: 3, title: "Mutlu City"}
        ],
        "Ayna": [
            {id: 1, title: "Decathlon"},
            {id: 2, title: "Barclays"},
            {id: 3, title: "МЭСИ"}
        ]
    }

    const updatedCompanies = updateCompanyTitle2(companies, 'Ansar', 3, 'SpaceX')

    expect(updatedCompanies['Ansar'][2].title).toBe('SpaceX')
})