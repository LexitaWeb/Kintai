import React, { Component } from 'react'
import Layout from '../components/layout'
import SimpleMap from '../components/map'
export default class Contacts extends Component {
  render() {
	return (
	  <Layout>
		<div className="container py-5">
			<h2 className="mb-4">Mūsų kontaktai</h2>
			<ul className="list mb-5">
				<li>
					UAB „Kintai“ Kuršių g. 11, Kintų miestelis, Šilutės rajonas, Lietuva LT-99358
				</li>
				<li>
					GPS koordinatės: N55.40021 ; E21.28654
				</li>
				<li>
					Tel.: +37044147339
				</li>
				<li>
					Faks.: +37044147339
				</li>
				<li>
					El.paštas: info@kintai.lt , admin@kintai.lt
				</li>
				<li>
					Interneto svetainė: www.kintai.lt
				</li>
			</ul>
			<ul className="list mb-5">
				<li>
					<h6>
						Direktorius
					</h6>
				</li>
				<li>
					Rimgaudas Višinskas
				</li>
				<li>
					Tel.: +37044147339
				</li>
				<li>
					Mob. tel.: +37069844853
				</li>
				<li>
					El.paštas: r.visinskas@kintai.lt
				</li>
			</ul>
			<ul className="list">
				<li>
					<h6>
						Žuvies perdirbimo cechas / parduotuvės
					</h6>
				</li>
				<li>
					Informacija Tel.: +37061406533
				</li>
				<li>
					El. paštas: j.visinskas@kintai.lt
				</li>
			</ul>
		</div>
		<SimpleMap/>
	  </Layout>
	)
  }
}
