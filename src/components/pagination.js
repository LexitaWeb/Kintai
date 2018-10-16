import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
	return (
	  <div className="pagination d-flex justify-content-center">
		<ul>
			<li>
				<a href="javascript:;"> <i className="fas fa-chevron-left"></i></a>
			</li>
			<li>
				<a href="javascript:;" className="active">1</a>
			</li>
			<li>
				<a href="javascript:;">2</a>
			</li>
			<li>
				<a href="javascript:;">3</a>
			</li>
			<li>
				<a href="javascript:;">4</a>
			</li>
			<li>
				<a href="javascript:;">5</a>
			</li>
			<li>
				<a href="javascript:;"> <i className="fas fa-chevron-right"></i></a>
			</li>
		</ul>
	  </div>
	)
  }
}
