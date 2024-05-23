import {mult, splitIntoWords, sum} from "./01";

//data
let a: number;
let b: number;
let c: number;

beforeEach(()=>{
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    //action
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test('multiply should be correct', () => {
    //data
    let a = 1
    let b = 2
    let c = 3

    //action
    const result1 = mult(a, b);
    const result2 = mult(b, c);

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test ("splitting into words should be correct", ()=>{
    const sent1 = 'Hello my friends!'
    const sent2 = 'JS - the best programming language!'

    const result3 = splitIntoWords(sent1);
    const result4 = splitIntoWords(sent2);

    expect(result3).toHaveLength(3);
    expect(result3[0]).toBe('hello')
    expect(result3[1]).toBe('my')
    expect(result3[2]).toBe('friends')

    expect(result4.length).toBe(5);
    expect(result4[0]).toBe('js');
    expect(result4[1]).toBe('the');
    expect(result4[2]).toBe('best');
    expect(result4[3]).toBe('programming');
    expect(result4[4]).toBe('language');

})