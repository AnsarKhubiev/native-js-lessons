type UsersType = {
    [key: string]: {
        id: number
        name: string
    }
}

let users1: UsersType

beforeEach(()=>{
    users1 = {
        "101": {id: 101, name: "Dimych"},
        "132131201": {id: 132131201, name: "Natasha"},
        "11201": {id: 11201, name: "Valera"},
        "11": {id: 11, name: "Katya"},
    }
})

test('should update corresponding user', ()=> {
    users1['101'].name = 'Katya'
    expect(users1['101'].name).toBe('Katya')
})

test('should delete corresponding user', ()=> {
   delete users1['11']
    expect(users1['11']).toBeUndefined()
})
