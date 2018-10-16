import React, { Component } from 'react'


const fishes = [
	{name:'Karpis', link:"javascript:;"},
	{name:'Šamas', link:"javascript:;"},
	{name:'Karosas', link:"javascript:;"},
	{name:'Silkė', link:"javascript:;"},
	{name:'Tunas', link:"javascript:;"},
	{name:'Ešerys', link:"javascript:;"},
	{name:'Karpis', link:"javascript:;"},
	{name:'Šamas', link:"javascript:;"},
	{name:'Karosas', link:"javascript:;"},
	{name:'Silkė', link:"javascript:;"},
	{name:'Tunas', link:"javascript:;"},
	{name:'Ešerys', link:"javascript:;"},
	{name:'Karpis', link:"javascript:;"},
	{name:'Šamas', link:"javascript:;"},
	{name:'Karosas', link:"javascript:;"},
	{name:'Silkė', link:"javascript:;"},
	{name:'Tunas', link:"javascript:;"},
	{name:'Ešerys', link:"javascript:;"},
]


export default class Sidebar extends Component {
	constructor(props){
		super(props);
		this.state = {sidebarOpen:false};
	}
  render() {
	return (
	  <div className={`sidebar ${this.state.sidebarOpen?"sidebar-open":"sidebar-closed"}`}>
			<span>Paruošimo rūšys</span>
			<ul>
				<li>
					<a href="javascript:;" className="active">Visos</a>
				</li>
				<li>
					<a href="javascript:;">Šaldytos</a>
				</li>
				<li>
					<a href="javascript:;">Atšildytos</a>
				</li>
				<li>
					<a href="javascript:;">Rūkytos</a>
				</li>
			</ul>
			<span>Žuvies rūšys</span>
			<ul>
				<li>
					<a href="javascript:;" className="active">Visos</a>
				</li>
				{fishes.map((el,i)=>{
					return (
						<li key={i}>
							<a href={el.link}>{el.name}</a>
						</li>
					);
				})}
			</ul>
	  </div>
	)
  }
}
