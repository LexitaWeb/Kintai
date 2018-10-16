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
  render() {
	return (
	  <Layout>
		<div className="row no-gutters flex-nowrap">
				<div className="col-auto sidebar-wrap" style={{backgroundImage:`url("${PATTERN}")`}}>
				<Sidebar/>
			</div>
			<div className="col-lg-7 mx-auto">
				<div className="px-5 px-lg-0 py-5">
						<h2>Savaitės pasiūlymai</h2>
						<div className="mb-4">
							<Deals/>
						</div>
						<h2>Prekės</h2>
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
