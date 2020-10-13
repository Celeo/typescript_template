import { addTwo } from "./index";

test("Add two numbers", () => {
  const result = addTwo(1, 2);
  expect(result).toBe(3);
});
