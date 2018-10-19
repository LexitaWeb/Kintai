import React, { Component } from 'react'
import {Link} from 'gatsby'

export default class Product extends Component {
  render() {
	return (
	  <div className="product">
		<div className="product-img">
			<a href="/shop/item" style={{backgroundImage:`url("${this.props.img}")`}}>
			</a>
				<div className="product-actions d-none d-lg-block">
					<a href="javascript:;">
						Į krepšelį
					</a>
				</div>
		</div>
		<div className="product-info">
			<div className="product-name">
				<Link to="/shop/item">
					{this.props.name}
				</Link>
			</div>
			<div className="product-price">{this.props.price} €</div>
		</div>
	  </div>
	)
  }
}
