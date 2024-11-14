export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}

type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooks = {
    books: string[]
}

export type CompanyType = { id: number, title: string }

export type WithCompaniesType = {
    companies: CompanyType[]
}

export const makeHairStyle = (u: UserType, power: number) => {
    return {
        ...u,
        hair: u.hair / power,
        address: {...u.address}
    }
}

export const moveUserToOtherCity = (u: UserWithLaptopType, city: string) => {
    return {...u, address: {...u.address, city}}
}

export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooks, otherHouse: number) => {
    return {...u, address: {...u.address, houses: otherHouse}}
}

export const updateLaptop = (u: UserWithLaptopType, newLaptop: string) => {
    return {...u, laptop: {title: newLaptop}}
}


export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooks, newBook: string) => {
    return {...u, books: [...u.books, newBook]}
}

export const updateBook = (u: UserWithLaptopType & UserWithBooks, oldBook: string, newBook: string) => (
    {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
)

export const removeBook = (u: UserWithLaptopType & UserWithBooks, bookForDelete: string) => (
    {...u, books: u.books.filter(b => b !== bookForDelete)}
)

export const updateCompanyTitle = (u: UserWithLaptopType & WithCompaniesType, id: number, titleOfCompany: string) => (
    {...u, companies: u.companies.map(c => c.id === id ? {...c, title: titleOfCompany} : c)}
)

export const updateCompanyTitle2 = (companies: {[key: string]: CompanyType[]},
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {

    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy
}