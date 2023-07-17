import { Component } from 'react'

export class Slide extends Component {
  private _clicks: number

  constructor(component: () => JSX.Element, clicks?: number) {
    super({})
    this._clicks = clicks ?? 0
    this.render = component
  }

  clicks = () => this._clicks
}
