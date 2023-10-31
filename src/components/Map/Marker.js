import React, { Component } from 'react'

export default class Marker extends Component {
  render () {
    return (
      <div style={{width:'2.4rem', background: '#00a1e1', color: '#ffffff', padding: '0.1rem'}}>
        {this.props.text}
      </div>
    )
  }
}
