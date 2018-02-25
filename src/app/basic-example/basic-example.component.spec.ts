import { factorial, fibonacci, replaceWordByAnother } from './basic-example.component';

describe('Basic example', () => {

  it('5! should return 120', () => {
    const res = factorial(5);

    expect(res).toBe(120);
  });

  it('fibonacci of 8 should return 34', () => {
    const res = fibonacci(8);

    expect(res).toBe(34);
  });

  it('replaceWordByAnother when replace given word the result should contains that word', () => {
    const strBase = 'Big hero 6';
    const searchValue = 'hero';
    const newValue = 'churumbelo';

    const res = replaceWordByAnother(strBase, searchValue, newValue);

    expect(res).toContain(newValue);
  });

  it('replaceWordByAnother when cannot find searchValue should return strBase', () => {
    const strBase = 'Big hero 6';
    const searchValue = 'churumbelo';
    const newValue = 'churumbelito';

    const res = replaceWordByAnother(strBase, searchValue, newValue);

    expect(res).toEqual(strBase);
  });

});
