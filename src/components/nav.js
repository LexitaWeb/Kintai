import { Link } from "gatsby";
import React, { Component } from 'react'
const fishesList = [
	{ name: 'Karpis', link: "javascript:;" },
	{ name: 'Šamas', link: "javascript:;" },
	{ name: 'Karosas', link: "javascript:;" },
	{ name: 'Silkė', link: "javascript:;" },
	{ name: 'Tunas', link: "javascript:;" },
	{ name: 'Ešerys', link: "javascript:;" },
	{ name: 'Karpis', link: "javascript:;" },
	{ name: 'Šamas', link: "javascript:;" },
	{ name: 'Karosas', link: "javascript:;" },
	{ name: 'Silkė', link: "javascript:;" },
	{ name: 'Tunas', link: "javascript:;" },
	{ name: 'Ešerys', link: "javascript:;" },
	{ name: 'Karpis', link: "javascript:;" },
	{ name: 'Šamas', link: "javascript:;" },
	{ name: 'Karosas', link: "javascript:;" },
	{ name: 'Silkė', link: "javascript:;" },
	{ name: 'Tunas', link: "javascript:;" },
	{ name: 'Ešerys', link: "javascript:;" },
]
export default class Nav extends Component {
	constructor(props){
		super(props);
		this.state = {
			menuOpen:false,
			searchOpen:false
		};

	}
	toggleMenu = () =>{
		this.setState({menuOpen:!this.state.menuOpen});
	}
	toggleSearch = () =>{
		this.setState({searchOpen:!this.state.searchOpen});
	}
	render() {
		return (
			<div className="navbar-wrap">
				<nav className="navbar justify-content-lg-center">
					<a href="javascript:;" className="d-lg-none" onClick={this.toggleMenu}>
						<i className="fas fa-bars fa-2x text-white"></i>
					</a>
					<ul className="nav-list d-none d-lg-flex">
						<li>
							<Link to="/">
								Pagrindinis
							</Link>
						</li>
						<li>
							<div className="dropdown">
								<Link to="/shop-main">
									Parduotuvė
									<span className="caret ml-2"></span>
								</Link>
								<ul className="dropdown-menu">
									<li>
										<div className="dropdown">
											<a href="javascript:;">
												Paruošimo rūšys
												<span className="caret right ml-auto mb-2"></span>
											</a>
											<ul className="dropdown-menu dropdown-menu-sub">
												<li>
													<Link to="/shop/catalog">Šaldytos</Link>
												</li>
												<li>
													<Link to="/shop/catalog">Atšildytos</Link>
												</li>
												<li>
													<Link to="/shop/catalog">Rūkytos</Link>
												</li>
											</ul>
										</div>
									</li>
									<li>
										<div className="dropdown">
											<a href="javascript:;">
												Žuvies rūšys
												<span className="caret right ml-auto mb-2"></span>
											</a>
											<ul className="dropdown-menu dropdown-menu-sub">
												<li>
													<Link to="/shop/catalog">Karpis</Link>
												</li>
												<li>
													<Link to="/shop/catalog">Šamas</Link>
												</li>
												<li>
													<Link to="/shop/catalog">Karosas</Link>
												</li>
												<li>
													<Link to="/shop/catalog">...</Link>
												</li>
											</ul>
										</div>
									</li>
									<li>
										<Link to="/shop/catalog">
											Visi produktai
										</Link>
									</li>
								
								</ul>
							</div>
						</li>
						<li>
							<Link to="/contacts">
								Kontaktai
						</Link>
						</li>
					</ul>
					<div className="d-flex">
						<a className="navbar-btn" href="javascript:;" onClick={this.toggleSearch}>
							<i className="fas fa-search mt-1"></i>
						</a>
						<Link className="navbar-btn" to="/cart">
							<i className="fas fa-shopping-cart mt-1"></i>
							<span className="badge">3</span>
						</Link>
					</div>
				</nav>
				<div className={`sidebar-menu d-lg-none bg-secondary ${this.state.menuOpen?"open":"closed"}`}>
					<div className="sidebar-menu-content">
						<div className="padding">
							<a href="javascript:;" className="d-lg-none" onClick={this.toggleMenu}>
								<i className="fas fa-bars fa-2x text-white"></i>
							</a>
						</div>
						<div className="mt-3 px-2">
							<small>Navigacija</small>
						</div>
						<ul className="list-group">
							<li>
								<Link to="/">Pagrindinis</Link>
							</li>
							<li>
								<Link to="/shop/catalog">Parduotuvė</Link>
							</li>
							<li>
								<Link to="/shop/catalog">Kontaktai</Link>
							</li>
						</ul>
						<div className="mt-3 px-2">
							<small>Paruošimo rūšys</small>
						</div>
						<ul>
							<li>
								<Link to="/shop/catalog" activeClassName="active">Visos</Link>
							</li>
							<li>
								<Link to="/">Šaldytos</Link>
							</li>
							<li>
								<Link to="/">Atšildytos</Link>
							</li>
							<li>
								<Link to="/">Rūkytos</Link>
							</li>
						</ul>
						<div className="mt-3 px-2">
							<small>Žuvies rūšys</small>
						</div>
						<ul>
							<li>
								<Link to="/shop/catalog" activeClassName="active">
									Visos
								</Link>
							</li>
							{fishesList.map((el,i)=>{
								return(
									<li key={i}>
										<Link to="/shop/catalog">{el.name}</Link>
									</li>
								)
							})}
						</ul>

					</div>
				</div>

				<div className={`search ${this.state.searchOpen?"open":"closed"}`}>
					<i className="fas fa-times text-white" onClick={this.toggleSearch}></i>
					<div className="d-flex align-items-center">
						<i className="fas fa-search text-white mr-3"></i>
						<input type="text" placeholder="Paieška"/>
					</div>
				</div>
			</div>
		)
	}
}
