import React, { Component, Children } from 'react'

export default class Content extends Component {
  constructor(props){
	  super(props);
	  this.state = {
		test:'test'
	  };
  }
  render() {
	return (
	  <div id="content">
		{this.props.children}
	  </div>
	)
  }
}
