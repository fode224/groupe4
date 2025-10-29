import { isEmprunt , isValidBorrowData } from "../src/utils/borrow.utils";

describe("isValidBorrowData", () => {
  test("should return true when userId and bookId are numbers", () => {
    expect(isValidBorrowData({ userId: 1, bookId: 2 })).toBe(true);
  });

  test("should return false when userId is missing", () => {
    expect(isValidBorrowData({ bookId: 2 })).toBe(false);
  });

  test("should return false when bookId is missing", () => {
    expect(isValidBorrowData({ userId: 1 })).toBe(false);
  });

  test("should return false when wrong types", () => {
    expect(isValidBorrowData({ userId: "1", bookId: 2 })).toBe(false);
  });
});
describe("isEmprunt", () => {
  test("should return true if valid Emprunt object", () => {
    const emprunt = {
      id: 1,
      userId: 1,
      bookId: 2,
      borrowedAt: new Date(),
      dueDate: new Date(),
    };
    expect(isEmprunt(emprunt)).toBe(true);
  });

  test("should return false if missing fields", () => {
    const emprunt = { id: 1, userId: 1 };
    expect(isEmprunt(emprunt as any)).toBe(false);
  });
});

