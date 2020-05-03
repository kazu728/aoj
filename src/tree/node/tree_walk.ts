export class Node {
  constructor(
    private _parent: number,
    private _left: number,
    private _right: number
  ) {}

  get parent() {
    return this._parent
  }

  get left() {
    return this._left
  }

  get right() {
    return this._right
  }

  setParent(parent: number) {
    this._parent = parent
  }
}
