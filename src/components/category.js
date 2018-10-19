import React, { Component } from 'react'
import Slider from 'react-slick'
import Product from '../components/product'
import {Link} from 'gatsby'

const items = [
	{ name: 'Upėtakio filė', price: 8, img: '1 (10)' },
	{ name: 'Plačiakakčio kepsneliai', price: 7, img: '1 (15)' },
	{ name: 'Karpio kepsneliai', price: 6, img: '1 (13)' },
	{ name: 'Plačiakakčio filė', price: 5, img: '1 (14)' },
	{ name: 'Upėtakio filė', price: 8, img: '1 (10)' },
	{ name: 'Plačiakakčio kepsneliai', price: 7, img: '1 (15)' },
	{ name: 'Karpio kepsneliai', price: 6, img: '1 (13)' },
	{ name: 'Plačiakakčio filė', price: 5, img: '1 (14)' },
];

export default class Category extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			dots:false
		}
		return (
			<div>
				<h2 className="category-heading">
					<Link to="/shop/catalog">
						{this.props.category}
					</Link>
				</h2>
				<Slider {...settings}>
					{items.map((el, i) => {
						return (
							<div key={i}>
								<div className="px-3">
									<Product img={`/static/produce/${el.img}.jpg`} name={el.name} price={el.price} />
								</div>
							</div>
						)
					})}
					<div>
						<div className="px-3">
							<Link to="/shop/catalog" className="category-more-link">
								<div className="category-more">
									<span className="text-muted">Daugiau produktų</span>
								</div>
							</Link>
						</div>
					</div>
				</Slider>
			</div>
		)
	}
}
