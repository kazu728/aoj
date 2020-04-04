export class Node {
  constructor(
    private _key: number,
    private _prev: number,
    private _next: number
  ) {}

  get key(): number {
    return this._key
  }

  get prev(): number {
    return this._prev
  }

  get next(): number {
    return this._next
  }

  setNext(next: number) {
    this._next = next
  }

  setprev(prev: number) {
    this._prev = prev
  }
}
