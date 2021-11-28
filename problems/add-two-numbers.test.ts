import { inputData } from "./add-two-numbers.input.json";
import addTwoNumbers, { ListNode } from "./add-two-numbers";

const createListRecursively = ([val, ...rest]: number[]) =>
  rest.length
    ? new ListNode(val, createListRecursively(rest))
    : new ListNode(val);

describe("#addTwoNumbers", () => {
  test.each(inputData)(`addTwoNumbers(%s, %s) :>> %s`, (l1, l2, expected) => {
    let l1List = createListRecursively(l1);
    let l2List = createListRecursively(l2);
    let expectedList = createListRecursively(expected);

    let result = addTwoNumbers(l1List, l2List);

    expect(result).toEqual(expectedList);
  });
});
