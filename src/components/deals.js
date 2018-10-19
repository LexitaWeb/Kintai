import React, { Component, Children } from 'react'
import Slider from 'react-slick'
const items = [
	{name:'Upėtakio filė',price:8, img:'1 (10)'},
	{name:'Plačiakakčio kepsneliai',price:7, img:'1 (15)'},
	{name:'Karpio kepsneliai',price:6, img:'1 (13)'},
	{name:'Plačiakakčio filė',price:5, img:'1 (14)'},
];
export default class Deals extends Component {
	render() {
		var settings = {
			dots: true,
			autoplay:true,
			arrows:false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		}
		return (
			<Slider {... settings}>
				{items.map((el,i)=>{
					return(
						<div className={`slider slider-${this.props.orientation}`} key={i}>
							{/* <div className="slide-image" style={{backgroundImage:`/static/produce/${el.img}.jpg`, height:600}}></div> */}
							<div className="row no-gutters">
								<div className="col-md">
									{/* <img src={`/static/produce/${el.img}.jpg`} style={{width:'100%'}} alt=""/> */}
									<div className="slider-img" style={{backgroundImage:`url("/static/produce/${el.img}.jpg")`}}></div>
								</div>
								<div className="col-md-4 slider-description">
									<div className="px-3 py-2 d-flex flex-column justify-content-center h-100">
										<div className="slider-name">
												{el.name}
										</div>
										<div className="slider-price-old">
											10 €
										</div>
										<div className="slider-price">
											{el.price} €
										</div>
										<a href="/shop/item" className="btn btn-outline-primary mt-3">Plačiau</a>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</Slider>
		)
	}
}
