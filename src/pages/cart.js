import React, { Component } from 'react'
import Layout from '../components/layout'

export default class Cart extends Component {
  constructor(props){
	  super(props);
	  this.state = {
		  cartItems: [
			  { name: 'Upėtakio filė be kaulų', img: '1 (10)', qt: 4, price:3 },
			  { name: 'Karpio šašlykas', img: '1 (11)', qt: 4, price:6 },
			  { name: 'Produktas', img: '1 (13)', qt: 4, price:5 },
		  ]
	  };
  }
  render() {
	return (
	  <Layout>
		  <div className="container py-lg-5 py-3">
				<h2>Krepšelis</h2>
				{/* <div class="row align-items-center flex-nowrap text-muted">
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
				</div> */}
				{/* <ul className="list cart-list">
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

				</ul> */}
					<table className="cart-list">
						<thead>
							<tr>
								<th></th>
								<th>Pavadinimas</th>
								<th>Vieneto kaina</th>
								<th width="150">Kiekis</th>
								<th>Viso</th>
								<th width="30"></th>
							</tr>
						</thead>
						<tbody>
							{this.state.cartItems.map((el,i)=>{
								return(
									<tr key={i}>
										<td>
											<img width="70" src={`/static/produce/${el.img}.jpg`} alt={el.name}/>
										</td>
										<td>
											{el.name}
										</td>
										<td>
											<span className="d-md-none fw-500">Vieneto kaina: </span>{el.price} €
										</td>
										<td>
											<div className="input-group">
												<div className="input-group-prepend">
													<button className="btn btn-primary">-</button>
												</div>
												<input value={3 * i + 1} type="text" className="form-control" />
												<div className="input-group-append">
													<button className="btn btn-primary">+</button>
												</div>
											</div>
										</td>
										<td>
											<span className="d-md-none fw-500">Viso: </span>{el.qt * el.price} €
										</td>
										<td>
											<a href="javascript:;" className="btn btn-sm btn-outline-primary">
												<i className="fas fa-times d-none d-md-block"></i>
												<span className="d-md-none">Pašalinti</span>
											</a>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				{/* <hr style={{borderWidth:3, marginTop:0}}/> */}
				<div className="mt-5">
					<h2>Suvestinė</h2>
					<ul className="list cart-summary">
						<li>
							<div><span className="fw-500">Suma</span></div>
							<div>
								56 €
							</div>
						</li>
						<li>
							<div>
								<span className="fw-500">Pristatymas</span>
							</div>
							<div>
								5 €
							</div>
						</li>
						<li>
							<div><span className="fw-500">Viso</span></div>
							<div>61 €</div>
						</li>
					</ul>
				</div>
				<div className="text-center mt-5">
					<a href="javascript:;" className="btn btn-lg btn-primary">UŽBAIGTI UŽSAKYMĄ</a>
				</div>
		  </div>
	  </Layout>
	)
  }
}
