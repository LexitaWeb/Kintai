import React, { Component } from 'react'
import {Link} from 'gatsby'
import Logo from '../static/assets/logo-text.svg'
export default class Footer extends Component {
  render() {
	return (
	  <div className="footer bg-primary text-white py-4">
		<div className="container">
			<div className="row no-gutters">
				<div className=" mx-auto">
					<img src={Logo} style={{width:150}} alt="Kintai"/>
					<div className="ml-5">© 2018</div>
				</div>
				{/* <div className="col-sm">
					<ul className="list">
						<li className="d-flex">
							<Link className="text-white ml-auto" to="/">Pagrindinis</Link>
						</li>
						<li className="d-flex">
							<Link className="text-white ml-auto" to="/">Parduotuvė</Link>
						</li>
						<li className="d-flex">
							<Link className="text-white ml-auto" to="/">Kontaktai</Link>
						</li>
					</ul>
				</div> */}
			</div>
		</div>
	  </div>
	)
  }
}
