export class CircularQueue {
  private _elements: number[];
  private _currentIndex = 0;
  private _maxIndex: number;

  constructor(seq: number[] = []) {
    this._elements = seq;
    this._maxIndex = seq.length - 1;
  } //.

  get max(): number {
    return this._maxIndex;
  } //.

  get index(): number {
    return this._currentIndex;
  } //.

  public next(): number {
    const item = this._elements[this._currentIndex];
    this._currentIndex =
      this._currentIndex === this._maxIndex ? 0 : this._currentIndex + 1;
    return item;
  } //.
} //. CircularQueue
