import Layout from '../components/layout'
import {Link} from 'gatsby'
import Category from '../components/category'
import Pagination from '../components/pagination'
import Deals from '../components/deals'
import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

export default class ShopPage extends Component {
	constructor(props){
		super(props)
		this.state={
			categories:[
				'Upėtakis',
				'Karipis',
				'Plačiakaktis',
				'Upėtakis',
				'Erškėtas',
				'Kiti produktai'
			]
		}
	}
	render() {
		return (
			<Layout>
				<div style={{background:'#efefef', padding:'64px 0'}}>
					<h4 className="text-center fade-down-1" style={{letterSpacing:6}}>PARAGAUK IR PASKANAUK</h4>
					<h1 className="text-center fade-down-2" style={{letterSpacing:5}}>PAMARIO ŽUVIENE</h1>
				</div>
				<div className="container">
					<div className="mx-3 mt-3">
						<Deals/>
					</div>
					{this.state.categories.map((el,i)=>{
						return(
							<div className="py-4" key={i}>
								<Fade>
									<Category category={el} items={this.state.items} />
								</Fade>
							</div>
						)
					})}
				</div>
				<div className="mb-4">
					<Pagination/>
				</div>
			</Layout>
		)
	}
}