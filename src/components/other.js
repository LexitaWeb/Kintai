import React, { Component, Children } from 'react'
import Slider from 'react-slick'
import Product from './product'
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

export default class Other extends Component {
  render() {
	  var settings = {
		  dots: true,
		  infinite: true,
		  speed:1000,
		  autoplay: true,
		  autoplaySpeed: 5000,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  arrows:false
	  }
	  return (
		  <Slider {...settings}>
			  {items.map((el, i) => {
				  return (
					  <div key={i}>
						  <div className="px-3">
							  <Product img={`/static/produce/${el.img}.jpg`} name={el.name} price={el.price}/>
						  </div>
					  </div>
				  )
			  })}
		  </Slider>
	  )
  }
}
