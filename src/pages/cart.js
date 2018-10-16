import React, { Component } from 'react'
import Layout from '../components/layout'

const cartItems = [
	{name:'Produktas', img:'1 (10)', qt:4},
	{name:'Produktas', img:'1 (11)', qt:4},
	{name:'Produktas', img:'1 (12)', qt:4},
];
export default class Cart extends Component {
  render() {
	return (
	  <Layout>
		  <div className="container py-5">
				<h2 className="mb-5">Krepšelis</h2>
				<div class="row align-items-center flex-nowrap text-muted">
					<div style={{width:115}} className="col-auto">
					</div>
					<div className="col">
						<b>Pavadinimas</b>
					</div>
					<div className="col-auto">
						<b>Vieneto kaina</b>
					</div>
					<div className="col-lg-2 col-md-3 text-center">
						<b>Kiekis</b>
					</div>
					<div className="col-auto">
						<b>Viso</b>
					</div>

					<div className="col-auto" style={{width:76}}>
					</div>
				</div>
				<ul className="list cart-list">
					{cartItems.map((el,i)=>{
						return(
							<li key={i}>
								<div class="row align-items-center flex-nowrap">
									<div className="col-auto">
										<img width="70" src={`/static/produce/${el.img}.jpg`} alt=""/>
									</div>
									<div className="col">
										<a href="/shop/item">{el.name}</a>
									</div>
									<div style={{width:70}} className="col-auto">
										{2 * i + 1} € 
									</div>
									<div className="col-lg-2 col-md-3">
	
										<div className="input-group">
											<div className="input-group-prepend">
												<button className="btn btn-primary" onClick={this.decrease}>-</button>
											</div>
											<input value={3 * i + 1} type="text" className="form-control" />
											<div className="input-group-append">
												<button className="btn btn-primary" onClick={this.increase}>+</button>
											</div>
										</div>
									</div>
									<div className="col-auto">
										<div style={{width:40, textAlign:'right'}}>
											{(3 * i + 1) * (2 * i + 1)} €
										</div>
									</div>
	
									<div className="col-auto">
										<a href="javascript:;" className="btn btn-sm btn-outline-primary">
											<i className="fas fa-times"></i>
										</a>
									</div>
								</div>
							</li>
						)
					})}
				</ul>
				{/* <hr style={{borderWidth:3, marginTop:0}}/> */}
				<div className="mt-5">
					<h2>Suvestinė</h2>
					<ul className="list cart-summary">
						<li>
							<div><b>Suma</b></div>
							<div>
								48 €
							</div>
						</li>
						<li>
							<div>
								<b>Pristatymas</b>
							</div>
							<div>
								5 €
							</div>
						</li>
						<li>
							<div><b>Viso</b></div>
							<div>53 €</div>
						</li>
					</ul>
				</div>
				<div className="text-center mt-5">
					<a href="javascript:;" className="btn btn-lg btn-primary">ATSISKAITYTI</a>
				</div>
		  </div>
	  </Layout>
	)
  }
}
