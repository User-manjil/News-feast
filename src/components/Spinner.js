import React, { Component } from 'react'
import loading from "./Spinner@1x-1.6s-200px-200px.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className='center'>
        <img className="rounded mx-auto d-block" src={loading} alt="Loading" />
      </div>
    )
  }
}

export default Spinner
