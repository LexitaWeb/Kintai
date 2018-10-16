import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'


const ShopPage = () => {
	return (
	  <Layout>
			<h1 className="text-center">Parduotuvė</h1>
			<Link to="/shop/catalog">katalogas</Link>
			<div className="row">
			</div>
	  </Layout>
	)
}
export default ShopPage