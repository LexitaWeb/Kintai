import React, { Component } from 'react'
import Layout from '../../components/layout';
import Sidebar from '../../components/sidebar'
import Product from '../../components/product'
import Deals from '../../components/deals'
import Pagination from '../../components/pagination'
import PATTERN from '../../static/assets/pattern.svg'

const products = [
	{name:'Upėtakio filė', img:'1 (10)', price:5},
	{name:'Karpio šašlykas', img:'1 (11)', price:4},
	{ name:'Karpio šašlykas', img:'1 (12)', price:3},
	{name:'Karpio Kepsneliai', img:'1 (13)', price:6},
	{name:'Plačiakakčio filė', img:'1 (14)', price:7},
	{name:'Plačiakakčio kepsneliai', img:'1 (15)', price:5},
]
export default class Catalog extends Component {
	constructor(props){
		super(props);
		this.state = {
			filter:'all',
			filterNames:{
				all:'Prekės',
				frozen:'Šaldytos',
				smoked:'Rūkytos',
				thawed:'Atšildytos'
			}
		}
	}
	filterChange(filter){
		this.setState({
			filter:filter
		});
	}
  render() {
	return (
	  <Layout>
		<div className="row no-gutters">
				<div className={`col-auto sidebar-wrap sidebar-${ this.state.filter }`} style={{backgroundImage:`url("${PATTERN}")`}}>
				<Sidebar onFilter={this.filterChange.bind(this)} activeFilter={this.props.filter}/>
			</div>
			<div className="col-lg">
				<div className="px-5 py-4" style={{maxWidth:1000,margin:'0 auto'}}>
						{/* <h2 className="text-center mb-4 text-uppercase text-muted">Savaitės pasiūlymai</h2> */}
						<div className="mb-4">
							<Deals />
						</div>
						<div className="d-flex">
							<h2 className="flex-grow-1">Prekės</h2>
							<div>
								<select className="form-control ml-auto">
									<option value="0" readonly>Rūšiuoti pagal</option>
									<option value="0">Nuo naujausių</option>
									<option value="0">Nuo seniausių</option>
									<option value="0">Kainą nuo mažiausios</option>
									<option value="0">Kainą nuo didžiausios</option>
								</select>
							</div>
						</div>
						<div className="underline mb-3"></div>
						<div className="row">
							{products.map((el,i)=>{
								return(
									<div className="col-lg-4 col-md-6 mb-4" key={i}>
										<Product name={el.name} price={el.price} img={`/static/produce/${el.img}.jpg`}/>
									</div>
								)
							})}
						</div>
						<Pagination/>
				</div>
			</div>
		</div>
	  </Layout>
	)
  }
}
