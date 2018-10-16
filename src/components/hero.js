import React, { Component } from 'react'
import '../static/assets/hero.jpg';
import LogoText from '../static/assets/logo-text.svg';
import {Link} from 'gatsby'

export default class Hero extends Component {
  render() {
	return (
	  <div className="hero">
		<div className="hero-slogan-wrap">
			<div className="hero-slogan">
					<div>
						<div className="hero-logo">
							<img src={LogoText} alt="Kintai"/>
						</div>
						<div className="hero-heading">šviežia ir rūkyta žuvis </div>
						<div className="hero-subheading"> jums iš nemuno deltos regioninio parko</div>
					</div>
					<div className="hero-button">
						{/* <a href="/shop" className="btn btn-secondary btn-lg rounded-0">Parduotuvė</a> */}
						<Link to="/shop/catalog" className="btn btn-outline-light btn-lg">Parduotuvė</Link>
					</div>
			</div>
		</div>
	  </div>
	)
  }
}
