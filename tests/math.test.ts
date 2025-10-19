import { add } from '../src/utils/math';

test('addition de 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});