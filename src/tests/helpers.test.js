import helpers from '../utils/helpers';

describe(`Personality test with mostly As`, () => {
    const qa = new Map();
    qa.set(1, "A");
    qa.set(2, "A");
    qa.set(3, "B");
    qa.set(4, "C");
    it('should return A', () => {
      expect(helpers.getMostFrequentAnswer(qa)).toEqual("A");
    });
});

describe(`Personality test with mostly Bs`, () => {
    const qa = new Map();
    qa.set(1, "C");
    qa.set(2, "A");
    qa.set(3, "B");
    qa.set(4, "D");
    qa.set(5, "B");
    qa.set(6, "B");
    qa.set(7, "D");
    qa.set(8, "D");
    qa.set(9, "B");
    qa.set(10, "B");
    it('should return B', () => {
      expect(helpers.getMostFrequentAnswer(qa)).toEqual("B");
    });
});

describe(`Personality test with mostly Cs`, () => {
    const qa = new Map();
    qa.set(1, "C");
    qa.set(2, "A");
    qa.set(3, "B");
    qa.set(4, "D");
    qa.set(5, "B");
    qa.set(6, "B");
    qa.set(7, "D");
    qa.set(8, "D");
    qa.set(9, "B");
    qa.set(10, "C");
    qa.set(11, "C");
    qa.set(12, "C");
    qa.set(13, "C");
    qa.set(14, "A");
    it('should return C', () => {
      expect(helpers.getMostFrequentAnswer(qa)).toEqual("C");
    });
});

describe(`Personality test with mostly Ds`, () => {
    const qa = new Map();
    qa.set(1, "A");
    qa.set(2, "B");
    qa.set(3, "C");
    qa.set(4, "D");
    qa.set(5, "D");
    qa.set(6, "D");
    qa.set(7, "D");
    qa.set(8, "D");
    qa.set(9, "B");
    qa.set(10, "C");
    qa.set(11, "C");
    qa.set(12, "A");
    qa.set(13, "B");
    qa.set(14, "A");
    it('should return D', () => {
      expect(helpers.getMostFrequentAnswer(qa)).toEqual("D");
    });
});


describe(`Personality test with just Bs`, () => {
    const qa = new Map();
    qa.set(1, "B");
    qa.set(2, "B");
    qa.set(3, "B");
    qa.set(4, "B");
    it('should return A', () => {
      expect(helpers.getMostFrequentAnswer(qa)).toEqual("B");
    });
});

describe(`Personality test with just As`, () => {
    const qa = new Map();
    qa.set(1, "A");
    qa.set(2, "A");
    qa.set(3, "A");
    qa.set(4, "A");
    it('should return A', () => {
      expect(helpers.getMostFrequentAnswer(qa)).toEqual("A");
    });
});

describe(`Personality test with just Cs`, () => {
    const qa = new Map();
    qa.set(1, "C");
    qa.set(2, "C");
    qa.set(3, "C");
    qa.set(4, "C");
    it('should return C', () => {
      expect(helpers.getMostFrequentAnswer(qa)).toEqual("C");
    });
});

describe(`Personality test with just Ds`, () => {
    const qa = new Map();
    qa.set(1, "D");
    qa.set(2, "D");
    qa.set(3, "D");
    qa.set(4, "D");
    it('should return D', () => {
      expect(helpers.getMostFrequentAnswer(qa)).toEqual("D");
    });
});

describe(`Personality test: change questions`, () => {
    const qa = new Map();
    qa.set(1, "A");
    qa.set(2, "B");
    qa.set(3, "C");
    qa.set(3, "B");
    it('should return B', () => {
      expect(helpers.getMostFrequentAnswer(qa)).toEqual("B");
    });
});

