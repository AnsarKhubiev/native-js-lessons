import {sum} from "./01";

let a: number = 1;
let b: number = 2;
let c: number = 3;

beforeEach(()=>{
    a = 1;
    b = 2;
    c = 3
})

test('sum should be correct', ()=>{
    const a = 1;
    const b = 2;
    const c = 3;

    const result = sum(a, b);

    expect(result).toBe(3);
})