import { Sum } from "../constants/Sum";

test("home page", () => {
    let data = 10;
    expect(data).toBe(10);
})

describe("all test cases from sum.js file", () => {
    it("test case with IT", () => {
        expect(Sum(2,4)).not.toBe(3);
    })
})

