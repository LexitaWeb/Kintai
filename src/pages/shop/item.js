import React, { Component } from 'react'
import Layout from '../../components/layout'
import Other from '../../components/other'
export default class Item extends Component {
  constructor(props){
	  super(props);
	  this.state = {
			quantity:1,
	  }
  }
  increase = () =>{
	  this.setState({
		  quantity: this.state.quantity + 1
	  });
  }
  decrease = () =>{
	  if (this.state.quantity > 1){
		  this.setState({
			  quantity: this.state.quantity - 1
		  });
	  }
  }
  render() {
	return (
	  <Layout>
		<div className="item-img-top">
			<div className="item-name">
				Plačiakakčio kepsneliai
			</div>
		</div>

		{/* ITEM SELECT */}
		<div className="container py-5">
			<div className="row">
					<div className="col-md-4 col-lg-6 mb-4 mb-lg-0">
					<div className="item-img">
						<img className="w-100" src="/static/produce/1 (15).jpg" alt="Placiakakcio kepsneliai"/>
					</div>
				</div>
				<div className="col-md-8 col-lg-6 d-flex flex-column">
					<h4 className="text-muted">Placiakakcio kepsneliai</h4>
					<div className="item-type mb-3">
						<a href="javascript:;"><img title="Visa žuvis" src="/static/icons/fish.svg" alt="asd"/></a>
						<a href="javascript:;"><img title="Nukaulinta" src="/static/icons/boneless.svg" alt="asd"/></a>
						<a href="javascript:;"><img  title="Kepsneliai" src="/static/icons/steak.svg" className="active" alt="asd"/></a>
						<a href="javascript:;"><img title="Filė" src="/static/icons/filet.svg" alt="asd"/></a>
						<a href="javascript:;"><img  title="Malta" src="/static/icons/grinded.svg" alt="asd"/></a>
					</div>
					<div className="row">
							<div className="col-4">
								<b className="mr-2">Vieneto kaina</b>
							</div>
							<div className="col-6">
								<span>6€</span>
							</div>
							<div className="col-4">
								<b className="mr-2">Vieneto svoris</b>
							</div>
							<div className="col-6">
								<span>1,25 KG</span>
							</div>
					</div>
					<div className="item-desc mt-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum vitae eveniet, voluptatibus facilis maxime a consectetur molestiae iste suscipit asperiores sapiente blanditiis doloribus hic unde neque dolor perferendis dolorem.
					</div>
					<div className="item-quantity mt-auto">
						<div className="row">
							<div className="col-auto align-self-center">
								Vienetai
							</div>
							<div className="col-4">
								<div className="input-group">
									<div className="input-group-prepend">
										<button className="btn btn-primary" onClick={this.decrease}>-</button>
									</div>
									<input value={this.state.quantity} type="text" className="form-control"/>
									<div className="input-group-append">
										<button className="btn btn-primary" onClick={this.increase}>+</button>
									</div>
								</div>
							</div>
							<div className="col-4">
								<a href="/cart" className="btn btn-secondary text-white">
									Į Krepšelį
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		{/* ITEM NUTRITION */}
		<div className="item-nutrition mt-3">
			<div className="container py-5">
				<div className="row">
					<div className="col-lg mb-4 mb-lg-0">
						<div className="px-lg-5">
							<h2>Produkto aprašymas</h2>
							<div className="text-justify">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis perspiciatis doloribus, odit quidem quo reprehenderit eveniet, molestiae, minus itaque id quod ipsa dolorum odio ratione maiores harum commodi distinctio vero.
							</div>
						</div>
					</div>
					<div className="col-lg">

						<div class="px-lg-5">
							<h2>Maistinė vertė</h2>
							<ul className="item-nutrition-list">
								<li>
									<span>Šimte gramų</span>
								</li>
								<li>
									<span>Riebalai</span>
									<span>12g</span>
								</li>
								<li>
									<span>Cholesterolis</span>
									<span>63 mg</span>
								</li>
								<li>
									<span>Natris</span>
									<span>63 mg</span>
								</li>
								<li>
									<span>Kalis</span>
									<span>61 mg</span>
								</li>
								<li>
									<span>Angliavandeniai</span>
									<span>0 g</span>
								</li>
								<li>
									<span>Baltymai</span>
									<span>22 g</span>
								</li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
		</div>

		{/* SIMILAR */}
		<div className="item-other py-5">
			<div className="container">
				<h2>Panašios prekės</h2>
				<Other/>
			</div>
		</div>
	  </Layout>
	)
  }
}
