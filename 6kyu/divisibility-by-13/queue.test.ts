import { CircularQueue } from './queue';

describe('An empty CircularQueue', () => {
  const cq = new CircularQueue();
  it('should have an index -1 and length 0', () => {
    expect(cq.max).toEqual(-1);
    expect(cq.index).toEqual(0);
  });
});

describe('A CircularQueue of elements [0,1,2]', () => {
  const cq = new CircularQueue([0, 1, 2]);
  it('should have a maximum index of 2 (0,1,2)', () => {
    expect(cq.max).toEqual(2);
  });

  it('should return 0 as its current index and its first element', () => {
    expect(cq.index).toEqual(0);
    expect(cq.next()).toEqual(0);
  });
  it('should return 1 as its current index and its second element', () => {
    expect(cq.index).toEqual(1);
    expect(cq.next()).toEqual(1);
  });
  it('should return 2 as its current index and its third element', () => {
    expect(cq.index).toEqual(2);
    expect(cq.next()).toEqual(2);
  });
  it('should roll back to index 0 and get 0 as first element', () => {
    expect(cq.index).toEqual(0);
    expect(cq.next()).toEqual(0);
  });
});

describe('A CircularQueue of elements [1,10,9,12,3,4]', () => {
  const cq = new CircularQueue([1, 10, 9, 12, 3, 4]);
  it('should have a maximum index of 5 (0,1,2,3,4,5)', () => {
    expect(cq.max).toEqual(5);
  });
  it('should have an index of 0 and 1 as its first element', () => {
    expect(cq.index).toEqual(0);
    expect(cq.next()).toEqual(1);
  });
});
