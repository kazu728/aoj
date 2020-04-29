export class Node {
  constructor(
    private _node: number,
    private _degree: number,
    private _parentNode: number,
    private _childNodes: number[]
  ) {}

  public get node(): number {
    return this._node
  }

  public get degree(): number {
    return this._degree
  }

  public get parentNode(): number {
    return this._parentNode
  }

  public get childNodes(): number[] {
    return this._childNodes
  }
}
