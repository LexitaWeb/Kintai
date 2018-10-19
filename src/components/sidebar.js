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
		this.state = {
			activeFilter:'all'
		};
		
	}
	setFilter(filter){
		this.props.onFilter(filter);
		this.setState({
			activeFilter:filter
		});
	}
  render() {
	return (
	  <div className={`sidebar sidebar-${this.state.activeFilter} sidebar-closed`}>
			<span>Paruošimo rūšys</span>
			<ul>
				<li>
					<a onClick={()=> this.setFilter('all')} href="javascript:;" className={this.state.activeFilter === 'all' ? 'active':''}>Visos</a>
				</li>
				<li>
					<a onClick={() => this.setFilter('frozen')} href="javascript:;" className={this.state.activeFilter === 'frozen' ? 'active' : ''}>Šaldytos</a>
				</li>
				<li>
					<a onClick={() => this.setFilter('thawed')} href="javascript:;" className={this.state.activeFilter === 'thawed' ? 'active' : ''}>Atšildytos</a>
				</li>
				<li>
					<a onClick={() => this.setFilter('smoked')} href="javascript:;" className={this.state.activeFilter === 'smoked' ? 'active' : ''}>Rūkytos</a>
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
